import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">🔐 DIGITAL SAFETY AWARENESS</p>

          <h1>
            Stay Safe in the
            <span> Digital World</span>
          </h1>

          <p className="hero-description">
            Learn simple ways to protect your social media accounts,
            mobile phone, personal information and money from online threats.
          </p>

          <div className="hero-buttons">
            <Link to="/social-media" className="primary-btn">
              Start Learning
            </Link>

            <Link to="/blog" className="secondary-btn">
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Safety Categories */}
      <section className="home-section">
        <div className="section-heading">
          <p>LEARN & PROTECT</p>
          <h2>Understand Your Digital Safety</h2>
          <span>
            Simple information to help you stay protected online.
          </span>
        </div>

        <div className="cards">
          <div className="card">
            <div className="card-icon">📱</div>

            <h3>Social Media Safety</h3>

            <p>
              Learn how to protect your accounts, privacy and
              personal information on social media.
            </p>

            <Link to="/social-media">
              Learn More →
            </Link>
          </div>

          <div className="card">
            <div className="card-icon">🔐</div>

            <h3>Mobile Safety</h3>

            <p>
              Keep your phone, apps and personal data safe from
              common mobile security risks.
            </p>

            <Link to="/mobile-safety">
              Learn More →
            </Link>
          </div>

          <div className="card">
            <div className="card-icon">🚨</div>

            <h3>Scams & Frauds</h3>

            <p>
              Understand common online scams and learn how to
              identify suspicious messages and requests.
            </p>

            <Link to="/scams">
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="tips-section">
        <div className="section-heading">
          <p>QUICK TIPS</p>
          <h2>Stay Safe Online</h2>
        </div>

        <div className="tips">
          <div className="tip">
            <span>01</span>
            <div>
              <h3>Use Strong Passwords</h3>
              <p>
                Create unique passwords for your important accounts.
              </p>
            </div>
          </div>

          <div className="tip">
            <span>02</span>
            <div>
              <h3>Enable Two-Factor Authentication</h3>
              <p>
                Add an extra layer of security to your accounts.
              </p>
            </div>
          </div>

          <div className="tip">
            <span>03</span>
            <div>
              <h3>Never Share OTPs</h3>
              <p>
                Banks and legitimate services will never ask for your OTP.
              </p>
            </div>
          </div>

          <div className="tip">
            <span>04</span>
            <div>
              <h3>Think Before You Click</h3>
              <p>
                Check suspicious links before opening them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="home-section blog-preview">
        <div className="section-heading">
          <p>FROM OUR BLOG</p>
          <h2>Learn Something New</h2>
        </div>

        <div className="blog-preview-card">
          <div>
            <span className="blog-category">SOCIAL MEDIA</span>

            <h2>How to Protect Your Social Media Account</h2>

            <p>
              Learn some simple steps that can make your social
              media account much safer.
            </p>
          </div>

          <Link to="/blog">
            View All Blogs →
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;