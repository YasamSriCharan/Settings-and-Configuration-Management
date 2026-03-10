// src/settings/components/SectionCard.jsx
export default function SectionCard({ title, description, children }) {
  return (
    <section className="card">
      {(title || description) && (
        <header style={{ marginBottom: 12 }}>
          {title && <h2 style={{ margin: 0 }}>{title}</h2>}
          {description && (
            <p style={{ margin: "6px 0 0", opacity: 0.8 }}>{description}</p>
          )}
        </header>
      )}

      <div style={{ display: "grid", gap: 12 }}>
        {children}
      </div>
    </section>
  );
}
