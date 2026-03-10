import { useSettingsStore } from "../store/settingsStore";

export default function AccountSettings() {
  const { name, email, setName, setEmail } = useSettingsStore();

  return (
    <div className="page">
      <h1>Account</h1>

      {/* Profile */}
      <div className="card">
        <h2>Profile Details</h2>
        <p>Manage your personal information and avatar.</p>

        <div className="form-group">
          <label>Name</label>
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      {/* Password */}
      <div className="card">
        <h2>Password</h2>
        <p>Secure your account with a strong password.</p>

        <button className="btn btn-primary">Change Password</button>
      </div>

      {/* Devices */}
      <div className="card">
        <h2>Connected Devices</h2>
        <p>See devices logged into your account.</p>

        <ul className="device-list">
          <li>MacBook Pro — Active</li>
          <li>iPhone 15 — Active</li>
          <li>Windows PC — Last seen 2 days ago</li>
        </ul>
      </div>
    </div>
  );
}
