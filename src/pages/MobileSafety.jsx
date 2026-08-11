function MobileSafety() {
  const safetyTips = [
    {
      icon: "🔒",
      title: "Use a Screen Lock",
      text: "Protect your phone with a PIN, password, fingerprint or face lock."
    },
    {
      icon: "🔄",
      title: "Keep Your Phone Updated",
      text: "Install system and security updates to fix known security problems."
    },
    {
      icon: "📲",
      title: "Install Trusted Apps",
      text: "Download apps only from official and trusted app stores."
    },
    {
      icon: "🔐",
      title: "Check App Permissions",
      text: "Review what permissions your apps have and remove unnecessary access."
    },
    {
      icon: "📶",
      title: "Be Careful With Public Wi-Fi",
      text: "Avoid accessing sensitive accounts when using unknown public networks."
    },
    {
      icon: "💳",
      title: "Protect Your Payments",
      text: "Never share your UPI PIN, OTP or banking passwords with anyone."
    }
  ];

  return (
    <main className="page mobile-page">

      {/* Header */}
      <section className="page-header">
        <p>PROTECT YOUR DEVICE</p>

        <h1>Mobile Safety</h1>

        <span>
          Simple ways to protect your smartphone, apps and
          personal information.
        </span>
      </section>


      {/* Safety Tips */}
      <section className="safety-section">

        <h2>6 Simple Safety Rules</h2>

        <div className="safety-grid">

          {safetyTips.map((tip, index) => (
            <div className="safety-card" key={index}>

              <div className="safety-icon">
                {tip.icon}
              </div>

              <div>
                <h3>{tip.title}</h3>

                <p>{tip.text}</p>
              </div>

            </div>
          ))}

        </div>

      </section>


      {/* Avoid Section */}
      <section className="avoid-section mobile-avoid">

        <div className="avoid-content">

          <p className="small-title">⚠️ AVOID THESE MISTAKES</p>

          <h2>Keep Your Phone Safe</h2>

          <p>
            Small mistakes can put your personal information
            and accounts at risk.
          </p>

          <div className="avoid-list">

            <div>❌ Don't install unknown APKs</div>
            <div>❌ Don't share your phone PIN</div>
            <div>❌ Don't ignore security updates</div>
            <div>❌ Don't use weak screen locks</div>
            <div>❌ Don't give unnecessary app permissions</div>
            <div>❌ Don't share OTPs or UPI PINs</div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default MobileSafety;