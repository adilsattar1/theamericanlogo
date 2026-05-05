import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Checkout Cancelled",
  description: "Your checkout session was cancelled.",
  keywords: ["checkout", "cancelled", "payment"],
  path: "/checkout-cancelled",
});

export default function Page() {
  return (
    <section className="thnkyoywrp">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="txtwrp">
              <h2 className="main-heading">Checkout Was Cancelled</h2>
              <p className="main-pera">No payment was collected. You can return to packages and try again anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
