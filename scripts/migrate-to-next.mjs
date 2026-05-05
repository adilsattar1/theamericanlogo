import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const HTMLtoJSX = require("htmltojsx");
const converter = new HTMLtoJSX({ createClass: false });

const root = process.cwd();
const includesDir = path.join(root, "includes");
const appDir = path.join(root, "app");
const componentsDir = path.join(root, "components");

const componentNameOverrides = {
  "header.php": "Header",
  "footer.php": "Footer",
  "clint.php": "ClientLogos",
  "pkg-includ.php": "PackageInclude",
  "cta.php": "Cta",
  "testi.php": "Testimonials",
  "bottomform.php": "BottomForm",
};

const pageSlug = (file) => file.replace(/\.php$/i, "");
const pageDir = (slug) => (slug === "index" ? appDir : path.join(appDir, slug));

const toComponentName = (name) =>
  name
    .replace(/\.php$/i, "")
    .split(/[-_]/g)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

const cleanPhp = (html) => {
  let out = html;
  out = out.replace(/<\?php[\s\S]*?\?>/g, "");
  out = out.replace(/<\?[\s\S]*?\?>/g, "");
  return out;
};

const normalizePaths = (html) => {
  let out = html;
  out = out.replace(/(src|href)=["']assets\//g, '$1="/assets/');
  out = out.replace(/href=["']['"]/g, 'href="/"');
  out = out.replace(/href=["'](?!https?:|mailto:|tel:|#|javascript:|\/)([^"']+)["']/g, (m, p1) => {
    const trimmed = p1.replace(/\.php$/i, "");
    if (trimmed === "index" || trimmed === "") return 'href="/"';
    if (trimmed.startsWith("/")) return `href="${trimmed}"`;
    return `href="/${trimmed}"`;
  });
  return out;
};

const escTemplate = (text) => text.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

const extractHeadMeta = (raw) => {
  const title = (raw.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || "").trim() || "The American Logo";
  const description = (raw.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i)?.[1] || "").trim();
  return { title, description };
};

const extractBody = (raw) => {
  const body = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return body ? body[1] : raw;
};

const read = (p) => fs.readFileSync(p, "utf8");
const write = (p, content) => {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content, "utf8");
};

fs.mkdirSync(path.join(root, "scripts"), { recursive: true });
fs.mkdirSync(appDir, { recursive: true });
fs.mkdirSync(componentsDir, { recursive: true });

write(
  path.join(componentsDir, "RawHtml.jsx"),
  `export default function RawHtml({ html, className = "" }) {\n  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;\n}\n`
);

const includeFiles = fs.readdirSync(includesDir).filter((f) => f.endsWith(".php"));
const includeMap = Object.fromEntries(
  includeFiles.map((file) => [file, componentNameOverrides[file] || toComponentName(file)])
);

for (const file of includeFiles) {
  const componentName = includeMap[file] || toComponentName(file);
  const includeRaw = read(path.join(includesDir, file));
  const content = normalizePaths(cleanPhp(includeRaw)).trim();
  const jsx = converter.convert(content);
  write(
    path.join(componentsDir, `${componentName}.jsx`),
    `export default function ${componentName}() {\n  return (\n    <>\n${jsx
      .split("\n")
      .map((line) => `      ${line}`)
      .join("\n")}\n    </>\n  );\n}\n`
  );
}

const phpFiles = fs
  .readdirSync(root)
  .filter((f) => f.endsWith(".php"))
  .sort((a, b) => (a === "index.php" ? -1 : b === "index.php" ? 1 : a.localeCompare(b)));

for (const phpFile of phpFiles) {
  const raw = read(path.join(root, phpFile));
  const { title, description } = extractHeadMeta(raw);
  const bodyRaw = extractBody(raw);
  const slug = pageSlug(phpFile);
  const sequence = [];
  let workingBody = bodyRaw.replace(
    /<\?php[\s\S]*?\$[a-zA-Z_]+\s*=\s*\$srcurl\."([^"]+)";[\s\S]*?include\(\$[a-zA-Z_]+\);[\s\S]*?\?>/g,
    (_, includeFile) => {
      const component = includeMap[includeFile];
      return component ? `__INCLUDE__${component}__` : "";
    }
  );

  workingBody = normalizePaths(cleanPhp(workingBody));

  const parts = workingBody.split(/(__INCLUDE__[A-Za-z0-9]+__)/g).filter(Boolean);
  for (const part of parts) {
    const includeMatch = part.match(/^__INCLUDE__([A-Za-z0-9]+)__$/);
    if (includeMatch) {
      sequence.push({ type: "include", name: includeMatch[1] });
    } else {
      const trimmed = part.trim();
      if (trimmed) sequence.push({ type: "html", html: trimmed });
    }
  }

  const usedIncludes = [...new Set(sequence.filter((item) => item.type === "include").map((item) => item.name))];
  const includeImportPath = slug === "index" ? "../components" : "../../components";
  const allImports = [...usedIncludes.map((c) => `import ${c} from "${includeImportPath}/${c}";`)].join("\n");

  const pagePath = path.join(pageDir(slug), "page.jsx");
  const blocks = sequence
    .map((item) => {
      if (item.type === "include") return `      <${item.name} />`;
      const jsx = converter.convert(item.html);
      return jsx
        .split("\n")
        .map((line) => `      ${line}`)
        .join("\n");
    })
    .join("\n");

  write(
    pagePath,
    `${allImports}\n\nexport const metadata = {\n  title: ${JSON.stringify(
      title
    )},\n  description: ${JSON.stringify(description || "The American Logo")},\n};\n\nexport default function Page() {\n  return (\n    <>\n${blocks}\n    </>\n  );\n}\n`
  );
}
