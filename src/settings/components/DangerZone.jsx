export default function DangerZone({ title, description, action }) {
  return (
    <div className="danger-zone">
      <h3>{title}</h3>
      <p>{description}</p>

      <button className="btn btn-danger" onClick={action}>
        Confirm
      </button>
    </div>
  );
}
