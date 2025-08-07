
import React, { useState } from "react";
import { FaGithub, FaTwitter, FaMedium, FaEnvelope, FaCalendarAlt, FaCoffee, FaArrowLeft, FaArrowRight, FaHome, FaTags, FaInfoCircle, FaThLarge, FaMapMarkerAlt } from "react-icons/fa";
import './App.css';

const blogPosts = [
  {
    title: "How I Solved Ethernaut Level 3: Coin Flip",
    date: "May 11, 2025",
    summary: "Learn how to exploit weak randomness using blockhash to solve Ethernaut challenges like a pro.",
    tags: ["Ethereum", "Smart Contracts", "Blockchain"],
    readTime: "5 min read",
    image: "/images/coinflip.jpg",
    link: "https://medium.com/@sh4n4X/ethernaut-coin-flip-solution",
  },
  {
    title: "Top 5 Smart Contract Vulnerabilities",
    date: "May 5, 2025",
    summary: "A breakdown of the most common and critical vulnerabilities in Web3 smart contracts.",
    tags: ["Web3", "Security", "Blockchain"],
    readTime: "7 min read",
    image: "/images/vulnerabilities.jpg",
    link: "https://medium.com/@sh4n4X/smart-contract-vulnerabilities",
  },
  {
    title: "Intro to Blockchain Security Auditing",
    date: "April 28, 2025",
    summary: "Understand how audits work, what tools are used, and how to start as a smart contract auditor.",
    tags: ["Security Auditing", "Blockchain"],
    readTime: "8 min read",
    image: "/images/auditing.jpg",
    link: "https://medium.com/@sh4n4X/blockchain-security-auditing",
  },
  {
    title: "Beginner’s Guide to Capture The Flag (CTF) Challenges",
    date: "April 20, 2025",
    summary: "Get started with CTFs in Web3 and cybersecurity — platforms, techniques, and mindset.",
    tags: ["CTF", "Hacking", "Security"],
    readTime: "6 min read",
    image: "/images/ctf.jpg",
    link: "https://medium.com/@sh4n4X/ctf-guide",
  },
  {
    title: "Web3 Bug Bounty Platforms You Should Know",
    date: "April 15, 2025",
    summary: "Explore top bug bounty programs for blockchain security researchers.",
    tags: ["Bug Bounties", "Web3", "Security"],
    readTime: "5 min read",
    image: "/images/bugbounty.jpg",
    link: "https://medium.com/@sh4n4X/web3-bug-bounty-platforms",
  },
  {
    title: "Understanding Reentrancy Attacks in Ethereum",
    date: "April 10, 2025",
    summary: "A comprehensive look at one of the most dangerous smart contract vulnerabilities.",
    tags: ["Reentrancy", "Ethereum", "Security"],
    readTime: "6 min read",
    image: "/images/reentrancy.jpg",
    link: "https://medium.com/@sh4n4X/reentrancy-attacks",
  },
  {
    title: "Best Tools for Smart Contract Auditing",
    date: "April 5, 2025",
    summary: "Explore the tools top auditors use to analyze and secure smart contracts.",
    tags: ["Tools", "Auditing", "Blockchain"],
    readTime: "7 min read",
    image: "/images/tools.jpg",
    link: "https://medium.com/@sh4n4X/smart-contract-auditing-tools",
  },
  {
    title: "Zero-Knowledge Proofs in Blockchain",
    date: "April 1, 2025",
    summary: "Understand the power of ZKPs in privacy-focused blockchain apps.",
    tags: ["ZKP", "Privacy", "Blockchain"],
    readTime: "6 min read",
    image: "/images/zkp.jpg",
    link: "https://medium.com/@sh4n4X/zkp-in-blockchain",
  }
];

export default function App() {
  const [page, setPage] = useState(1);
  const postsPerPage = 5;
  const paginatedPosts = blogPosts.slice((page - 1) * postsPerPage, page * postsPerPage);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="navbar-title">XSh4n4's Blog</h1>
        <ul className="navbar-links">
          <li><FaHome /> Home</li>
          <li><FaThLarge /> Categories</li>
          <li><FaTags /> Tags</li>
          <li><FaInfoCircle /> About</li>
        </ul>
      </nav>

      <div className="main-content">
        {/* Left side: Blog posts */}
        <div className="left-pane">
          {paginatedPosts.map((post, index) => (
            <div className="blog-card" key={index}>
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-details">
                <h2 className="blog-title">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">{post.title}</a>
                </h2>
                <div className="meta-info">
                  <span><FaCalendarAlt /> {post.date}</span>
                  <span><FaCoffee /> {post.readTime}</span>
                </div>
                <div className="tags">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <p className="summary">{post.summary}</p>
              </div>
            </div>
          ))}

          <div className="pagination">
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}><FaArrowLeft /></button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={page === i + 1 ? 'active' : ''}
              >
                {i + 1}
              </button>
            ))}
            <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}><FaArrowRight /></button>
          </div>

          <footer className="footer">
            <h2>Suhana Shaik</h2>
            <div className="footer-icons">
              <FaGithub /> <FaTwitter /> <FaMedium /> <FaEnvelope />
            </div>
            <p>© 2025 Suhana Shaik. All rights reserved.</p>
          </footer>
        </div>

        {/* Right side: Personal Info */}
        <div className="right-pane">
          <div className="profile-pic"></div>
          <h2>About Me</h2>
          <p>
            I'm a Web3 security enthusiast, blockchain developer, and smart contract auditor.
            I love finding vulnerabilities and helping secure decentralized apps.
          </p>
          <p className="location"><FaMapMarkerAlt /> India</p>
          <ul>
            <li><strong>GitHub:</strong> @sh4n4X</li>
            <li><strong>Twitter:</strong> @sh4n4X</li>
            <li><strong>Medium:</strong> @sh4n4X</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

