function About() {
  return (
    <main className="page about-page">

      {/* Header */}

      <section className="page-header">

        <p>ABOUT US</p>

        <h1>Making Digital Safety Simple</h1>

        <span>
          We believe everyone should be able to understand
          online safety without needing technical knowledge.
        </span>

      </section>


      {/* About Content */}

      <section className="about-content">

        <div className="about-card">

          <div className="about-icon">
            🔐
          </div>

          <h2>Our Mission</h2>

          <p>
            SafeNet is an educational website created to help
            people understand social media safety, mobile
            security and common online scams.
          </p>

          <p>
            Our goal is to explain important safety concepts
            in simple language so that everyone can use
            technology more safely.
          </p>

        </div>


        <div className="about-card">

          <div className="about-icon">
            🛡️
          </div>

          <h2>What We Cover</h2>

          <div className="about-list">

            <div>✓ Social Media Safety</div>

            <div>✓ Mobile Phone Safety</div>

            <div>✓ Online Scams</div>

            <div>✓ Privacy Protection</div>

            <div>✓ Password Security</div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;