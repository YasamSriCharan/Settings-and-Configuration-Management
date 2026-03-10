import { Link } from "react-router-dom";
import "./store.css";

const products = [
  {
    name: "Aero Glide X",
    price: "₹1500",
    colors: ["#0f0f10", "#3f3f46", "#d4d4d8"],
    tagline: "Featherlight daily trainer",
    badge: "Everyday"
  },
  {
    name: "Pulse Trail Pro",
    price: "₹2700",
    colors: ["#0b3b2e", "#f97316", "#fcd34d"],
    tagline: "Grip-first trail runner",
    badge: "Trail"
  },
  {
    name: "Volt Racer Evo",
    price: "₹2000",
    colors: ["#111827", "#22d3ee", "#818cf8"],
    tagline: "Race-day carbon plate",
    badge: "Race"
  },
  {
    name: "Studio Slip Luxe",
    price: "₹10,000",
    colors: ["#292524", "#d6d3d1", "#a855f7"],
    tagline: "Post-run recovery slide",
    badge: "Recovery"
  }
];

const features = [
  { title: "Free 30-day returns", copy: "No restocking fees. Print-free labels." },
  { title: "Fast carbon-neutral ship", copy: "Delivery in 2–4 days with offsets." },
  { title: "Fit concierge", copy: "Chat to dial in sizing and rotation." }
];

export default function ShoeStoreHome() {
  return (
    <div className="store-shell">
      <header className="store-nav">
        <div className="logo-mark">StrideLab</div>
        <nav className="nav-links">
          <a href="#collection">Arrivals</a>
          <a href="#features">Why us</a>
          <Link to="/settings/general" className="ghost-link">Account</Link>
        </nav>
        <div className="nav-actions">
          <button className="ghost-btn">Sign in</button>
          <button className="primary-btn">Cart</button>
        </div>
      </header>

      <main className="store-main">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Spring ’26</p>
            <h1>Performance footwear, simplified.</h1>
            <p className="lede">
              Breathable knits, tuned cushioning, carbon propulsion. Built for daily miles without fuss.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#collection">Shop shoes</a>
              <Link className="ghost-btn" to="/settings/general">Settings</Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="shoe-card">
              <div className="shoe-head">
                <p className="badge">Flagship</p>
                <span className="price-tag">₹15,000</span>
              </div>
              <h3>Aero Glide X</h3>
              <p className="shoe-copy">Engineered knit upper, nitrogen midsole, and an adaptive rocker for smooth turnover.</p>
              <div className="color-dots">
                {["#0f0f10", "#3f3f46", "#d4d4d8"].map((c) => (
                  <span key={c} style={{ background: c }} />
                ))}
              </div>
              <button className="primary-btn full">Add to bag</button>
            </div>
          </div>
        </section>

        <section id="features" className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <h4>{feature.title}</h4>
              <p>{feature.copy}</p>
            </article>
          ))}
        </section>

        <section id="collection" className="product-grid">
          <div className="section-head">
            <div>
              <p className="eyebrow">New Arrivals</p>
              <h2>Built for speed, tuned for comfort.</h2>
            </div>
            <a href="#!" className="ghost-link">Full catalog</a>
          </div>

          <div className="grid">
            {products.map((product) => (
              <article key={product.name} className="product-card">
                <div className="badge subtle">{product.badge}</div>
                <h3>{product.name}</h3>
                <p className="product-copy">{product.tagline}</p>
                <div className="color-dots">
                  {product.colors.map((c) => (
                    <span key={c} style={{ background: c }} />
                  ))}
                </div>
                <div className="product-footer">
                  <span className="price-tag">{product.price}</span>
                  <button className="ghost-btn">Add</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stories" className="cta-card">
          <div>
            <p className="eyebrow">Stay in stride</p>
            <h2>Tune preferences once, shop faster forever.</h2>
            <p className="cta-copy">
              Sync sizing, payment, and notifications in settings so checkout and delivery stay effortless.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="primary-btn" to="/settings/account">Account</Link>
            <Link className="ghost-btn" to="/settings/notifications">Notifications</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
