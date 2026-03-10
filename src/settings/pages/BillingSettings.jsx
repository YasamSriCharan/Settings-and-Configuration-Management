export default function BillingSettings() {
  return (
    <div className="page">
      <h1>Billing</h1>

      {/* Payment Methods */}
      <div className="card">
        <h2>Payment Methods</h2>
        <p>Manage credit/debit cards and online payments.</p>

        <footer>
          <button className="btn btn-primary">Add Payment Method</button>
        </footer>
      </div>

      {/* Subscriptions */}
      <div className="card">
        <h2>Subscriptions</h2>
        <p>View active subscriptions and renewal dates.</p>

        <ul className="subscription-list">
          <li>Pro Plan — Renews March 14</li>
          <li>Cloud Sync — Renews April 03</li>
        </ul>
      </div>

      {/* Billing History */}
      <div className="card">
        <h2>Billing History</h2>
        <p>Access invoices and transaction details.</p>

        <footer>
          <button className="btn btn-secondary">View History</button>
        </footer>
      </div>
    </div>
  );
}
