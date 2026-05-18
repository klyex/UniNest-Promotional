import { useEffect, useState } from 'react';
import boothLogo from '../assets/uninest-booth-logo.png';

const NAV_LINKS = [
  { href: '#problem', label: 'Story' },
  { href: '#features', label: 'Features' },
  { href: '#serve', label: 'Students' },
  { href: '#listings', label: 'Listings' },
  { href: '#pricing', label: 'Plans' },
];

const painPoints = [
  {
    icon: 'clock',
    title: 'Time-consuming',
    copy: 'Students lose hours jumping between posts, screenshots, and chats just to confirm if a room is still available.',
  },
  {
    icon: 'stress',
    title: 'Stressful & uncertain',
    copy: 'Prices, rules, distance, and amenities are often scattered, outdated, or hard to compare.',
  },
  {
    icon: 'shield',
    title: 'Risky & unverified',
    copy: 'Without verified details or student feedback, choosing a place can feel like a gamble.',
  },
];

const features = [
  {
    icon: 'pin',
    title: 'Real-time location matching',
    copy: 'Find stays near campus with distance and commute context at a glance.',
  },
  {
    icon: 'match',
    title: 'Smart student matching',
    copy: 'Compare rooms by budget, room type, lifestyle fit, and study needs.',
  },
  {
    icon: 'verified',
    title: 'Verified & trusted listings',
    copy: 'See key room details, rules, and landlord information before visiting.',
  },
  {
    icon: 'chat',
    title: 'Direct chat with landlords',
    copy: 'Ask questions, request viewings, and keep rental conversations organized.',
  },
  {
    icon: 'bell',
    title: 'Availability alerts',
    copy: 'Get updates when rooms open, reservations change, or replies arrive.',
  },
  {
    icon: 'budget',
    title: 'Budget-friendly options',
    copy: 'Browse student-ready rentals with clear monthly rates and inclusions.',
  },
];

const audiences = [
  { icon: 'cap', title: 'Students', meta: 'Near-campus rooms with trusted details.' },
  { icon: 'bed', title: 'Boarders', meta: 'Practical bedspaces and shared rooms.' },
  { icon: 'door', title: 'Dorm seekers', meta: 'Dorm rules, amenities, and reviews.' },
  { icon: 'house', title: 'Apartment renters', meta: 'Flexible stays with direct landlord contact.' },
];

const listings = [
  {
    name: 'Panabo Student Dorm',
    distance: 'Near DNSC - Panabo City',
    rating: '4.9',
    reviews: '32 reviews',
    price: 'PHP 4,500',
    tags: ['Near DNSC', 'Verified landlord', 'Wi-Fi'],
    badge: '2 rooms left',
    accent: 'one',
  },
  {
    name: 'Carmen Boarding House',
    distance: 'Carmen, Davao del Norte',
    rating: '4.8',
    reviews: '24 reviews',
    price: 'PHP 3,800',
    tags: ['Budget friendly', 'Shared room', 'Verified landlord'],
    badge: 'Viewing today',
    accent: 'two',
  },
  {
    name: 'Tagum Road Bedspace',
    distance: 'Along Tagum Road',
    rating: '4.7',
    reviews: '19 reviews',
    price: 'PHP 3,200',
    tags: ['Panabo City', 'Utilities listed', 'Budget friendly'],
    badge: 'Budget pick',
    accent: 'three',
  },
  {
    name: 'Near DNSC Dorm Suite',
    distance: 'Davao del Norte',
    rating: '4.8',
    reviews: '36 reviews',
    price: 'PHP 4,200',
    tags: ['Near DNSC', 'Study desk', 'Verified landlord'],
    badge: 'Student favorite',
    accent: 'four',
  },
];

const booths = Array.from({ length: 10 }, (_, index) => `A${index + 1}`);

const pricingPlans = [
  {
    name: 'Free Plan',
    price: '\u20b10/month',
    badge: 'Current Plan',
    button: 'Free Plan',
    features: [
      'Up to 3 property/unit listings',
      'Basic booking requests',
      'Tenant inquiries',
      'Standard listing visibility',
    ],
  },
  {
    name: 'Basic Landlord',
    price: '\u20b1299/month',
    button: 'Choose Basic',
    features: [
      'Up to 10 property/unit listings',
      'Booking request management',
      'Tenant inquiry tools',
      'Basic performance stats',
    ],
  },
  {
    name: 'Pro Landlord',
    price: '\u20b1599/month',
    badge: 'Recommended',
    button: 'Choose Pro',
    featured: true,
    features: [
      'Unlimited property/unit listings',
      'Priority listing visibility',
      'Advanced tenant analytics',
      'Review insights',
      'Faster verification support',
    ],
  },
];

function useRevealAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function IconShape({ type }) {
  return (
    <span className={`icon-shape icon-${type}`} aria-hidden="true">
      <span />
    </span>
  );
}

function AudienceIcon({ type }) {
  return (
    <span className={`audience-icon audience-${type}`} aria-hidden="true">
      <span />
    </span>
  );
}

function AppPreview() {
  return (
    <div className="app-preview" aria-label="UniNest listing preview">
      <div className="room-art" aria-hidden="true">
        <span className="room-sun" />
        <span className="room-window">
          <span />
          <span />
          <span />
          <span />
        </span>
        <span className="room-shelf">
          <span />
          <span />
          <span />
        </span>
        <span className="room-bed">
          <span />
        </span>
        <span className="room-desk">
          <span />
        </span>
      </div>

      <article className="preview-card">
        <div className="search-bar" role="search">
          <span className="search-icon" aria-hidden="true" />
          <span>Search near DNSC campus</span>
          <strong>Filters</strong>
        </div>
        <div className="preview-card-top">
          <span className="status-pill">Verified listing</span>
          <span className="rating-pill">
            <span className="star" aria-hidden="true" />
            4.8
          </span>
        </div>
        <h2>Near DNSC Dorm Suite</h2>
        <p>Panabo City - Verified landlord - Study desk - Shared kitchen</p>
        <div className="preview-meta">
          <span>
            <small>Monthly</small>
            PHP 4,200
          </span>
          <span>
            <small>Distance</small>
            0.7 km
          </span>
        </div>
        <div className="preview-actions">
          <span>Reserve room</span>
          <span>Chat landlord</span>
        </div>
      </article>

      <div className="campus-chip">
        <span className="route-dot" />
        <div>
          <strong>Near campus</strong>
          <p>Panabo City, Davao del Norte</p>
        </div>
      </div>
    </div>
  );
}

function ListingCard({ listing }) {
  return (
    <article className="listing-card" data-reveal>
      <div className={`listing-visual listing-visual-${listing.accent}`}>
        <span className="listing-badge">{listing.badge}</span>
        <div className="listing-room" aria-hidden="true">
          <span className="listing-window" />
          <span className="listing-bed" />
          <span className="listing-table" />
        </div>
      </div>
      <div className="listing-body">
        <div className="listing-heading">
          <div>
            <p>{listing.distance}</p>
            <h3>{listing.name}</h3>
          </div>
          <span className="rating-pill">
            <span className="star" aria-hidden="true" />
            {listing.rating}
          </span>
        </div>
        <span className="reviews">{listing.reviews}</span>
        <p className="price">
          <strong>{listing.price}</strong>
          <span>/month</span>
        </p>
        <div className="tag-row">
          {listing.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <button className="listing-cta" type="button">
          View details
        </button>
      </div>
    </article>
  );
}

function PricingCard({ plan }) {
  return (
    <article className={`pricing-card ${plan.featured ? 'featured' : ''}`} data-reveal>
      <div className="pricing-card-top">
        <div>
          <h3>{plan.name}</h3>
          <p className="plan-price">{plan.price}</p>
        </div>
        {plan.badge ? <span className="plan-badge">{plan.badge}</span> : null}
      </div>
      <ul className="plan-features">
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <button className="pricing-button" type="button">
        {plan.button}
      </button>
    </article>
  );
}

function BoothMap() {
  return (
    <div className="booth-map" aria-label="DNSC Gymnasium booth map">
      <div className="map-stage">Stage</div>
      <div className="map-main">
        <div className="vertical-booths" aria-label="A booth column">
          {booths.map((booth) => (
            <div
              className={booth === 'A10' ? 'map-booth active' : 'map-booth'}
              key={booth}
              aria-current={booth === 'A10' ? 'true' : undefined}
            >
              {booth === 'A10' ? 'A10 - UniNest' : booth}
            </div>
          ))}
        </div>
        <div className="map-open-area">Other booth areas</div>
      </div>
      <div className="map-gates" aria-label="Gymnasium access points">
        <div className="map-gate">Exit</div>
        <div className="map-gate">Entrance</div>
      </div>
    </div>
  );
}

function BoothModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="booth-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booth-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" aria-label="Close booth map" onClick={onClose}>
          Close
        </button>
        <div className="modal-heading">
          <img className="modal-logo" src={boothLogo} alt="" />
          <h2 id="booth-modal-title">Find UniNest</h2>
          <p>DNSC Gymnasium</p>
        </div>
        <BoothMap />
        <div className="modal-actions">
          <button className="button primary" type="button" onClick={onClose}>
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}

function SubscriptionSection() {
  return (
    <section className="promo-section subscribe-section">
      <div className="section-inner subscribe-panel" data-reveal>
        <div className="subscribe-copy">
          <p className="eyebrow">UniNest updates</p>
          <h2>Stay updated with UniNest</h2>
          <p>Get housing updates, booth announcements, and student rental tips.</p>
        </div>
        <div className="subscribe-action">
          <form className="subscribe-form" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="subscribe-email">
              Email address
            </label>
            <input id="subscribe-email" type="email" placeholder="Enter your email" />
            <button className="button primary" type="submit">
              Subscribe
            </button>
          </form>
          <div className="subscribe-pills" aria-label="Newsletter topics">
            <span>Housing updates</span>
            <span>Booth announcements</span>
            <span>Rental tips</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="promo-section pricing-section" id="pricing">
      <div className="section-inner">
        <div className="section-heading centered" data-reveal>
          <p className="eyebrow">Landlord subscriptions</p>
          <h2>Simple plans for every landlord</h2>
          <p>Start free and upgrade as your listings grow.</p>
        </div>
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <PricingCard plan={plan} key={plan.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

function UniNestPromo() {
  const [isBoothOpen, setIsBoothOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useRevealAnimation();

  const closeMenu = () => setIsMenuOpen(false);
  const openBooth = () => {
    closeMenu();
    setIsBoothOpen(true);
  };

  return (
    <div className="promo-page">
      <header className={`promo-nav ${isMenuOpen ? 'menu-open' : ''}`}>
        <a className="brand" href="#home" aria-label="UniNest home" onClick={closeMenu}>
          <img className="brand-logo" src={boothLogo} alt="" />
          <span>UniNest</span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="promo-nav-links"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <span />
          <span />
          <span />
        </button>

        <nav className="nav-links" id="promo-nav-links" aria-label="Promotional sections">
          {NAV_LINKS.map((link) => (
            <a href={link.href} key={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>

        <button className="nav-cta" type="button" onClick={openBooth}>
          Visit Booth
        </button>
      </header>

      <main>
        <section className="hero promo-section" id="home">
          <div className="section-inner hero-grid">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow">Student housing, made simple</p>
              <h1>Your Campus Stay, Simplified.</h1>
              <p className="hero-subtitle">
                Find safe, affordable, and verified places to stay near campus.
              </p>
              <div className="hero-actions" aria-label="Primary actions">
                <a className="button primary" href="#listings">
                  Find Your Home
                </a>
                <a className="button secondary" href="#features">
                  List Your Property
                </a>
              </div>
              <div className="hero-badges" aria-label="UniNest highlights">
                <span>Verified listings</span>
                <span>Budget friendly</span>
                <span>Near campus</span>
              </div>
            </div>

            <div className="hero-visual" data-reveal>
              <AppPreview />
            </div>
          </div>
        </section>

        <section className="promo-section problem-section" id="problem">
          <div className="section-inner">
            <div className="section-heading centered" data-reveal>
              <p className="eyebrow">The problem</p>
              <h2>Finding a place to stay should not feel this uncertain.</h2>
              <p>
                UniNest turns the stressful housing hunt into a clearer path from search to
                reservation.
              </p>
            </div>
            <div className="problem-grid">
              {painPoints.map((point) => (
                <article className="problem-card" key={point.title} data-reveal>
                  <IconShape type={point.icon} />
                  <h3>{point.title}</h3>
                  <p>{point.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="promo-section features-section" id="features">
          <div className="section-inner">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">Features</p>
              <h2>Everything students need to compare rentals with confidence.</h2>
            </div>
            <div className="feature-grid">
              {features.map((feature) => (
                <article className="feature-card" key={feature.title} data-reveal>
                  <IconShape type={feature.icon} />
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="promo-section serve-section" id="serve">
          <div className="section-inner serve-layout">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">Who We Serve</p>
              <h2>Built for every kind of campus stay.</h2>
            </div>
            <div className="serve-grid">
              {audiences.map((audience) => (
                <article className="serve-card" key={audience.title} data-reveal>
                  <AudienceIcon type={audience.icon} />
                  <div>
                    <h3>{audience.title}</h3>
                    <p>{audience.meta}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="promo-section listings-section" id="listings">
          <div className="section-inner">
            <div className="section-heading centered" data-reveal>
              <p className="eyebrow">Featured Listings</p>
              <h2>Rental previews that feel clear before you visit.</h2>
            </div>
            <div className="listing-grid">
              {listings.map((listing) => (
                <ListingCard listing={listing} key={listing.name} />
              ))}
            </div>
          </div>
        </section>

        <section className="promo-section visit-section" id="visit">
          <div className="section-inner visit-panel" data-reveal>
            <div>
              <p className="eyebrow">Campus demo</p>
              <h2>Visit UniNest at DNSC Gymnasium</h2>
              <p>
                Try the listing preview, ask about reservations, and find us at Booth A10 on the
                booth map.
              </p>
            </div>
            <div className="visit-card" aria-hidden="true">
              <span className="visit-pin" />
              <strong>A10</strong>
              <p>UniNest booth</p>
            </div>
            <button className="button primary" type="button" onClick={openBooth}>
              Visit Our Booth
            </button>
          </div>
        </section>

        <PricingSection />

        <section className="promo-section final-section" id="final-cta">
          <div className="section-inner final-panel" data-reveal>
            <span className="final-shape shape-one" aria-hidden="true" />
            <span className="final-shape shape-two" aria-hidden="true" />
            <div className="final-copy">
              <p className="eyebrow">Start close to campus</p>
              <h2>Ready to Find Your Nest?</h2>
              <div className="hero-actions">
                <a className="button primary" href="#listings">
                  Find Your Home
                </a>
                <a className="button secondary" href="#features">
                  List Your Property
                </a>
              </div>
              <p className="trust-line">Verified listings near DNSC and across Davao del Norte.</p>
            </div>
            <div className="final-visual" aria-hidden="true">
              <span className="final-window" />
              <div className="final-listing-chip">
                <span />
                <strong>A10</strong>
                <small>Verified room preview</small>
              </div>
            </div>
          </div>
        </section>

        <SubscriptionSection />
      </main>

      <footer className="promo-footer">
        <div className="footer-brand">
          <a className="brand" href="#home">
            <img className="brand-logo" src={boothLogo} alt="" />
            <span>UniNest</span>
          </a>
          <p>Safe, affordable, verified student housing near campus.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <a href="#features">Features</a>
          <a href="#listings">Featured listings</a>
          <a href="#visit">Visit booth</a>
        </div>
        <div>
          <h3>Find Us</h3>
          <p>DNSC Gymnasium</p>
          <p>Booth A10</p>
        </div>
      </footer>

      <BoothModal isOpen={isBoothOpen} onClose={() => setIsBoothOpen(false)} />
    </div>
  );
}

export default UniNestPromo;
