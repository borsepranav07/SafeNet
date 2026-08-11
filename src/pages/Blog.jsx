import { Link } from "react-router-dom";

function Blog() {
  const blogs = [
    {
      id: 1,
      category: "SOCIAL MEDIA",
      title: "How to Protect Your Social Media Account",
      description:
        "Learn simple steps to protect your account, privacy and personal information."
    },
    {
      id: 2,
      category: "SCAM AWARENESS",
      title: "How to Identify an Online Scam",
      description:
        "Learn the warning signs that can help you recognize suspicious messages and requests."
    },
    {
      id: 3,
      category: "MOBILE SAFETY",
      title: "How to Keep Your Mobile Phone Safe",
      description:
        "Simple security practices that can help protect your phone and personal data."
    },
    {
      id: 4,
      category: "PASSWORD SECURITY",
      title: "How to Create a Strong Password",
      description:
        "Understand what makes a password strong and how to protect your important accounts."
    }
  ];

  return (
    <main className="page blog-page">

      {/* Header */}

      <section className="page-header">

        <p>LEARN & STAY SAFE</p>

        <h1>Safety Blog</h1>

        <span>
          Simple articles to help you understand online safety
          and protect yourself in the digital world.
        </span>

      </section>


      {/* Blog Cards */}

      <section className="blog-grid">

        {blogs.map((blog) => (
          <article className="article-card" key={blog.id}>

            <div className="article-image">
              🛡️
            </div>

            <div className="article-content">

              <span className="article-category">
                {blog.category}
              </span>

              <h2>{blog.title}</h2>

              <p>{blog.description}</p>

              <Link to={`/blog/${blog.id}`}>
                Read Article →
              </Link>

            </div>

          </article>
        ))}

      </section>

    </main>
  );
}

export default Blog;