function Scams() {
  const scams = [
    {
      icon: "🔢",
      title: "OTP Scam",
      text: "A scammer may pretend to be from a bank or company and ask for your OTP.",
      tip: "Never share your OTP with anyone."
    },
    {
      icon: "💳",
      title: "UPI Scam",
      text: "Scammers may send fake payment requests or trick you into entering your UPI PIN.",
      tip: "You never need a UPI PIN to receive money."
    },
    {
      icon: "🎣",
      title: "Phishing",
      text: "Fake emails, messages or websites may try to steal your passwords or personal information.",
      tip: "Check links carefully before clicking."
    },
    {
      icon: "💼",
      title: "Fake Job Scam",
      text: "Scammers may offer fake jobs and ask you to pay registration or processing fees.",
      tip: "Don't pay money to get a job."
    },
    {
      icon: "🛒",
      title: "Fake Shopping",
      text: "Fake websites or sellers may offer products at unrealistic prices and take your money.",
      tip: "Check the website and seller before paying."
    }
  ];

  return (
    <main className="page scams-page">

      {/* Header */}
      <section className="page-header">
        <p>STAY ALERT</p>

        <h1>Scams & Frauds</h1>

        <span>
          Learn how common online scams work and how to
          recognize them before it's too late.
        </span>
      </section>


      {/* Scam Cards */}
      <section className="scams-section">

        <div className="scam-grid">

          {scams.map((scam, index) => (
            <div className="scam-card" key={index}>

              <div className="scam-icon">
                {scam.icon}
              </div>

              <h2>{scam.title}</h2>

              <p>{scam.text}</p>

              <div className="scam-tip">
                <strong>💡 Safety Tip</strong>

                <span>{scam.tip}</span>
              </div>

            </div>
          ))}

        </div>

      </section>


      {/* Warning Section */}
      <section className="scam-warning">

        <p>🚨 REMEMBER</p>

        <h2>
          Stop. Think. Verify.
        </h2>

        <span>
          If someone creates urgency, asks for money,
          passwords, OTPs or personal information,
          take a moment to verify before doing anything.
        </span>

      </section>

    </main>
  );
}

export default Scams;