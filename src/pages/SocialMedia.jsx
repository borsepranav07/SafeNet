function SocialMedia() {
  const safetyTips = [
    {
      icon: "🔐",
      title: "Use a Strong Password",
      text: "Use a unique password that is difficult for others to guess."
    },
    {
      icon: "🛡️",
      title: "Enable Two-Factor Authentication",
      text: "2FA adds an extra layer of protection to your social media account."
    },
    {
      icon: "👤",
      title: "Be Careful With Unknown People",
      text: "Don't accept requests or messages from people you don't know."
    },
    {
      icon: "🔒",
      title: "Keep Your Account Private",
      text: "Use privacy settings to control who can see your posts and information."
    },
    {
      icon: "📍",
      title: "Avoid Sharing Your Location",
      text: "Don't publicly share your home address, live location or daily routine."
    },
    {
      icon: "🔗",
      title: "Check Links Before Clicking",
      text: "Avoid suspicious links sent through messages, comments or emails."
    }
  ];

  return (
    <main className="page social-page">

      {/* Header */}
      <section className="page-header">
        <p>STAY PROTECTED</p>

        <h1>Social Media Safety</h1>

        <span>
          Simple tips to protect your accounts, privacy and
          personal information on social media.
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


      {/* Things to Avoid */}
      <section className="avoid-section">

        <div className="avoid-content">

          <p className="small-title">⚠️ BE CAREFUL</p>

          <h2>Things You Should Never Share</h2>

          <p>
            Some information can be used by scammers or attackers
            to target you.
          </p>

          <div className="avoid-list">

            <div>❌ Passwords</div>
            <div>❌ OTPs</div>
            <div>❌ UPI PIN</div>
            <div>❌ Bank Details</div>
            <div>❌ Home Address</div>
            <div>❌ Live Location</div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default SocialMedia;