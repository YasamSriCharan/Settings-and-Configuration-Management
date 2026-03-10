export default function IntegrationsSettings() {
  return (
    <div className="page">
      <h1>Integrations</h1>

      {/* Third-Party Apps */}
      <div className="card">
        <h2>Third-Party Apps</h2>
        <p>Control how external apps interact with your data.</p>

        <ul className="integration-list">
          <li>Slack — Connected</li>
          <li>Discord — Connected</li>
          <li>Notion — Not Connected</li>
        </ul>
      </div>

      {/* API Access */}
      <div className="card">
        <h2>API Access</h2>
        <p>Manage API keys and permissions.</p>

        <footer>
          <button className="btn btn-primary">Generate API Key</button>
        </footer>
      </div>

      {/* Webhooks */}
      <div className="card">
        <h2>Webhooks</h2>
        <p>Automate workflows with event-based triggers.</p>

        <footer>
          <button className="btn btn-secondary">Add Webhook</button>
        </footer>
      </div>
    </div>
  );
}
