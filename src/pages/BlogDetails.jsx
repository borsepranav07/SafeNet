import { useParams, Link } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();

  const blogs = {
    1: {
      category: "SOCIAL MEDIA",
      title: "How to Protect Your Social Media Account",
      intro:
        "Social media is a great way to connect with people, but your account can become a target if it is not properly protected.",
      sections: [
        {
          title: "Use a Strong Password",
          text:
            "Create a unique password for your social media account. Avoid using simple information such as your name, birthday or phone number."
        },
        {
          title: "Enable Two-Factor Authentication",
          text:
            "Two-factor authentication adds another layer of protection. Even if someone gets your password, they may still need the second verification step."
        },
        {
          title: "Be Careful With Unknown Accounts",
          text:
            "Avoid accepting requests from people you do not know. Fake accounts can be used to collect personal information or send malicious links."
        },
        {
          title: "Protect Your Personal Information",
          text:
            "Avoid publicly sharing sensitive information such as your home address, phone number, passwords or live location."
        }
      ]
    },

    2: {
      category: "SCAM AWARENESS",
      title: "How to Identify an Online Scam",
      intro:
        "Online scams often try to make you act quickly without giving you enough time to think or verify the information.",
      sections: [
        {
          title: "Unexpected Messages",
          text:
            "Be careful when you receive unexpected messages asking for money, personal information or account details."
        },
        {
          title: "Urgent Requests",
          text:
            "Scammers often create fear or urgency by claiming that your account will be blocked or that you must act immediately."
        },
        {
          title: "Suspicious Links",
          text:
            "Don't open links from unknown sources. Check the website address carefully before entering your password or payment information."
        },
        {
          title: "Never Share OTPs",
          text:
            "Never share OTPs, UPI PINs or passwords with another person, even if they claim to be from a bank or company."
        }
      ]
    },

    3: {
      category: "MOBILE SAFETY",
      title: "How to Keep Your Mobile Phone Safe",
      intro:
        "Your smartphone contains personal photos, messages, accounts and payment information, so protecting it is important.",
      sections: [
        {
          title: "Use a Screen Lock",
          text:
            "Use a strong PIN, password, fingerprint or face lock to prevent unauthorized access to your device."
        },
        {
          title: "Keep Your Phone Updated",
          text:
            "Install software and security updates when they become available. Updates often fix known security problems."
        },
        {
          title: "Install Trusted Apps",
          text:
            "Download applications only from trusted sources and review the permissions requested by each app."
        },
        {
          title: "Protect Payment Information",
          text:
            "Never share your UPI PIN, banking password or OTP with anyone."
        }
      ]
    },

    4: {
      category: "PASSWORD SECURITY",
      title: "How to Create a Strong Password",
      intro:
        "A strong password makes it much harder for someone to gain unauthorized access to your account.",
      sections: [
        {
          title: "Make It Long",
          text:
            "Use a password that is long enough and difficult to guess. Longer passwords are generally harder to crack."
        },
        {
          title: "Avoid Personal Information",
          text:
            "Don't use your name, birthday, phone number or other easily available information."
        },
        {
          title: "Use Different Passwords",
          text:
            "Avoid using the same password for every account. If one account is compromised, other accounts can remain protected."
        },
        {
          title: "Use Two-Factor Authentication",
          text:
            "Whenever available, enable two-factor authentication for an additional layer of account security."
        }
      ]
    }
  };

  const blog = blogs[id];

  if (!blog) {
    return (
      <main className="page">
        <h1>Blog Not Found</h1>

        <p>
          The article you are looking for does not exist.
        </p>

        <Link to="/blog">
          ← Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <main className="page blog-details">

      {/* Article Header */}

      <section className="article-header">

        <Link to="/blog" className="back-link">
          ← Back to Blog
        </Link>

        <span className="article-category">
          {blog.category}
        </span>

        <h1>{blog.title}</h1>

        <p className="article-intro">
          {blog.intro}
        </p>

      </section>


      {/* Article Content */}

      <article className="article-body">

        {blog.sections.map((section, index) => (
          <section key={index}>

            <h2>{section.title}</h2>

            <p>{section.text}</p>

          </section>
        ))}

      </article>


      {/* Bottom */}

      <div className="article-bottom">

        <h2>Stay Safe Online 🔐</h2>

        <p>
          Small safety habits can make a big difference.
          Stay alert and think before you share or click.
        </p>

        <Link to="/blog">
          Read More Articles →
        </Link>

      </div>

    </main>
  );
}

export default BlogDetails;