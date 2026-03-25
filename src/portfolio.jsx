import { useState, useEffect } from "react";

const PROJECTS = [
  {
    title: "Car Rental Web Application",
    overview: "A full-stack car rental platform that enables users to browse, book, and manage vehicle reservations with real-time availability and secure authentication. (Initial load may take ~20 seconds due to server cold start.)",
    stack: ["React", "Node.js (Express)", "PostgreSQL", "Tailwind CSS", "JWT"],
    features: [
      "Designed and implemented JWT-based authentication and role-based authorization for secure user access.",
      "Developed RESTful APIs to handle real-time car availability, booking transactions, and user data management.",
      "Built a responsive and user-friendly interface to ensure seamless experience across desktop and mobile devices.",
    ],
    outcome: "Deployed on Vercel with a fully functional frontend, backend API, and PostgreSQL database integration.",
    demo: "https://carrent-delta.vercel.app/",
    github: "https://github.com/arin6532/carrent",
  },
  {
    title: "Scheduler Web Application",
    overview: "A web-based scheduling system for managing tasks and appointments, featuring automated email notifications to improve productivity and time management.",
    stack: ["PHP", "MySQL", "Bootstrap 5", "PHPMailer"],
    features: [
      "Developed full CRUD functionality for managing schedules, tasks, and user appointments.",
      "Integrated automated email notification system using PHPMailer for reminders and alerts.",
      "Optimized database queries to improve performance and ensure reliable data handling.",
    ],
    outcome: "Deployed on InfinityFree with a fully functional scheduling system, including task management and email notifications.",
    demo: "https://arinschedule.infinityfreeapp.com/",
    github: "https://github.com/arin6532/schedule_project",
  },
];

const TECH_SKILLS = [
  { label: "Programming Languages", value: "JavaScript (ES6+), PHP, SQL, HTML5, CSS3" },
  { label: "Frontend Development", value: "React, Tailwind CSS, Bootstrap 5" },
  { label: "Backend & Database", value: "Node.js (Express), PHP, RESTful APIs, PostgreSQL, MySQL, MongoDB" },
  { label: "Tools & Platforms", value: "Git, GitHub, VS Code, Figma, Appsmith, Vercel, InfinityFree" },
];

function useInView() {
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.06 });
    obs.observe(ref);
    return () => obs.disconnect();
  }, [ref]);
  return [setRef, inView];
}

const GitHubIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

function Divider() {
  return <div style={{ borderTop: "1px solid #e4e4e4" }} />;
}

function SectionLabel({ children }) {
  return (
    <p style={{
      fontSize: "26px", fontWeight: 700, color: "#000",
      letterSpacing: "-0.02em",
      marginBottom: "36px",
    }}>
      {children}
    </p>
  );
}

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  const [expRef, expInView] = useInView();
  const [projRef, projInView] = useInView();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #fafafa; -webkit-font-smoothing: antialiased; }
        a { text-decoration: none; color: inherit; }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 26px; background: #111; color: #fff;
          border-radius: 8px; font-size: 16px; font-weight: 600;
          font-family: inherit; cursor: pointer; transition: background 0.15s, transform 0.1s;
          letter-spacing: -0.01em;
        }
        .btn-primary:hover { background: #000; transform: translateY(-1px); }

        .btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 26px; background: #fff; color: #111;
          border: 1.5px solid #ddd; border-radius: 8px; font-size: 16px; font-weight: 600;
          font-family: inherit; cursor: pointer; transition: border-color 0.15s, transform 0.1s;
          letter-spacing: -0.01em;
        }
        .btn-ghost:hover { border-color: #111; transform: translateY(-1px); }

        .card {
          border: 1.5px solid #e8e8e8; border-radius: 12px; padding: 34px;
          background: #fff; transition: border-color 0.2s, box-shadow 0.2s;
        }
        .card:hover { border-color: #bbb; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }

        .contact-row {
          display: flex; align-items: center; gap: 18px;
          padding: 18px 22px; border: 1.5px solid #e8e8e8; border-radius: 10px;
          background: #fff; transition: border-color 0.15s, box-shadow 0.15s;
        }
        .contact-row:hover { border-color: #111; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }

        .skill-row {
          display: flex; gap: 24px; padding: 18px 0;
          align-items: baseline; flex-wrap: wrap;
        }
        .skill-row + .skill-row { border-top: 1px solid #f0f0f0; }

        .tag {
          font-size: 14px; font-weight: 500;
          border: 1.5px solid #e4e4e4; border-radius: 6px;
          padding: 5px 13px; color: #444; background: #fafafa;
        }

        ul { list-style: none; padding: 0; }
        ul li { display: flex; gap: 10px; margin-bottom: 11px; font-size: 16px; color: #333; line-height: 1.75; }
        ul li::before { content: "·"; color: #aaa; font-size: 22px; line-height: 1.5; flex-shrink: 0; }
      `}</style>

      <div style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: "#fafafa", color: "#111", minHeight: "100vh" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto", padding: "0 32px 120px" }}>

          {/* ── HERO ── */}
          <section style={{
            padding: "88px 0 72px",
            borderBottom: "1px solid #e4e4e4",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(10px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}>
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "15px", fontWeight: 500, color: "#888",
              letterSpacing: "0.06em", marginBottom: "20px",
            }}>
              Web Developer · Portfolio
            </p>
            {/* ชื่อ: ไม่เปลี่ยนขนาด */}
            <h1 style={{
              fontSize: "clamp(40px, 7vw, 60px)", fontWeight: 700,
              letterSpacing: "-0.03em", color: "#000",
              lineHeight: 1.05, marginBottom: "18px",
            }}>
              Arin Wangweerakun
            </h1>
            <p style={{ fontSize: "17px", color: "#666", marginBottom: "42px", lineHeight: 1.6 }}>
              Nickname: Kean &nbsp;·&nbsp; Age: 24 &nbsp;·&nbsp; Nakhon Si Thammarat, Thailand
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://drive.google.com/file/d/1jGxcjT3Oan4wM2H44oJiuNBw-aWNh9Zh/view?usp=sharing" className="btn-primary">Resume</a>
              <a href="https://github.com/arin6532" target="_blank" rel="noreferrer" className="btn-ghost">
                <GitHubIcon /> GitHub
              </a>
            </div>
          </section>

          {/* ── SUMMARY ── */}
          <section style={{ padding: "68px 0" }}>
            <SectionLabel>Summary</SectionLabel>
            <p style={{ fontSize: "19px", color: "#222", lineHeight: 1.9, fontWeight: 400, maxWidth: "680px" }}>
              A motivated Junior Full-Stack Developer with hands-on experience in building scalable web applications using React, Node.js, and relational databases. Passionate about developing efficient, user-focused solutions — from system design to deployment.
            </p>
          </section>

          <Divider />

          {/* ── EDUCATION ── */}
          <section style={{ padding: "68px 0" }}>
            <SectionLabel>Education</SectionLabel>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "20px" }}>
              <div>
                <p style={{ fontSize: "22px", fontWeight: 700, color: "#000", marginBottom: "8px" }}>
                  B.Sc. in Computer Science
                </p>
                <p style={{ fontSize: "16px", color: "#666", marginBottom: "22px" }}>
                  Nakhon Si Thammarat Rajabhat University
                </p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "15px", fontWeight: 700, background: "#111", color: "#fff", borderRadius: "7px", padding: "7px 16px" }}>
                    First-Class Honors
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: 500, border: "1.5px solid #ddd", borderRadius: "7px", padding: "7px 16px", color: "#333", background: "#fff" }}>
                    GPA 3.84
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: 500, border: "1.5px solid #ddd", borderRadius: "7px", padding: "7px 16px", color: "#333", background: "#fff" }}>
                    Military Draft ✓
                  </span>
                </div>
              </div>
            </div>
          </section>

          <Divider />

          {/* ── SKILLS ── */}
          <section style={{ padding: "68px 0" }}>
            <SectionLabel>Technical Skills</SectionLabel>
            <div style={{ background: "#fff", border: "1.5px solid #e8e8e8", borderRadius: "12px", padding: "8px 28px" }}>
              {TECH_SKILLS.map(({ label, value }) => (
                <div key={label} className="skill-row">
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "13px", fontWeight: 500, color: "#888",
                    minWidth: "160px", flexShrink: 0, letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}>{label}</span>
                  <span style={{ fontSize: "16px", color: "#111", fontWeight: 400, lineHeight: 1.6 }}>{value}</span>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* ── PROJECTS ── */}
          <section style={{ padding: "68px 0" }} ref={projRef}>
            <SectionLabel>Featured Projects</SectionLabel>
            <div style={{
              display: "flex", flexDirection: "column", gap: "24px",
              opacity: projInView ? 1 : 0,
              transform: projInView ? "none" : "translateY(16px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}>
              {PROJECTS.map((p) => (
                <div key={p.title} className="card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "18px" }}>
                    <h3 style={{ fontSize: "21px", fontWeight: 700, color: "#000", letterSpacing: "-0.02em" }}>{p.title}</h3>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <a href={p.demo} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: "10px 20px", fontSize: "15px" }}>
                        <ExternalIcon /> Demo
                      </a>
                      <a href={p.github} target="_blank" rel="noreferrer" className="btn-ghost" style={{ padding: "10px 20px", fontSize: "15px" }}>
                        <GitHubIcon /> Code
                      </a>
                    </div>
                  </div>

                  <p style={{ fontSize: "16px", color: "#444", lineHeight: 1.8, marginBottom: "20px" }}>{p.overview}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "26px" }}>
                    {p.stack.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>

                  <div style={{ marginBottom: "22px" }}>
                    <p style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "12px", fontWeight: 500, color: "#999",
                      letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "14px",
                    }}>
                      Key Features
                    </p>
                    <ul>
                      {p.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{
                    background: "#f7f7f7", border: "1px solid #ebebeb",
                    borderRadius: "8px", padding: "15px 20px",
                    display: "flex", gap: "14px", alignItems: "flex-start",
                  }}>
                    <span style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "11px", fontWeight: 600, color: "#888",
                      letterSpacing: "0.15em", textTransform: "uppercase",
                      whiteSpace: "nowrap", paddingTop: "3px",
                    }}>Outcome</span>
                    <span style={{ fontSize: "15px", color: "#333", lineHeight: 1.75 }}>{p.outcome}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* ── EXPERIENCE ── */}
          <section style={{ padding: "68px 0" }} ref={expRef}>
            <SectionLabel>Experience</SectionLabel>
            <div style={{
              display: "flex", flexDirection: "column", gap: "0",
              opacity: expInView ? 1 : 0,
              transform: expInView ? "none" : "translateY(16px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}>
              {/* Job 1 */}
              <div style={{ paddingBottom: "52px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "6px", marginBottom: "8px" }}>
                  <p style={{ fontSize: "21px", fontWeight: 700, color: "#000", letterSpacing: "-0.02em" }}>Software Developer Intern</p>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "14px", color: "#888" }}>4 months</span>
                </div>
                <p style={{ fontSize: "16px", color: "#666", marginBottom: "22px" }}>Neer Code CO., LTD.</p>
                <ul>
                  {[
                    "Developed internal web applications to support automated attendance tracking systems.",
                    "Implemented file upload functionality and dynamic UI components using JavaScript.",
                    "Collaborated with team members to integrate frontend interfaces with backend systems and databases.",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: "52px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "6px", marginBottom: "8px" }}>
                  <p style={{ fontSize: "21px", fontWeight: 700, color: "#000", letterSpacing: "-0.02em" }}>Technical Support / Printer Technician</p>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "14px", color: "#888" }}>1 year</span>
                </div>
                <p style={{ fontSize: "16px", color: "#666", marginBottom: "18px" }}>Phuket Carrent</p>
                <p style={{ fontSize: "16px", color: "#333", lineHeight: 1.8 }}>
                  Provided technical support by troubleshooting hardware, software, and network issues, including LAN setup, IP configuration, and system maintenance.
                </p>
              </div>
            </div>
          </section>

          <Divider />

          {/* ── CONTACT ── */}
          <section style={{ padding: "68px 0" }}>
            <SectionLabel>Contact</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "460px" }}>
              {[
                { label: "Email", value: "arin6532@gmail.com", href: "mailto:arin6532@gmail.com" },
                { label: "GitHub", value: "github.com/arin6532", href: "https://github.com/arin6532" },
                { label: "Phone", value: "082-432-7311", href: "tel:0824327311" },
              ].map(({ label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="contact-row">
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "12px", fontWeight: 500, color: "#999",
                    minWidth: "58px", letterSpacing: "0.08em", textTransform: "uppercase",
                  }}>{label}</span>
                  <span style={{ fontSize: "16px", fontWeight: 500, color: "#111" }}>{value}</span>
                  <span style={{ marginLeft: "auto", color: "#ccc", fontSize: "20px" }}>→</span>
                </a>
              ))}
            </div>
          </section>

        </div>

        {/* FOOTER */}
        <footer style={{ borderTop: "1px solid #e4e4e4", padding: "28px 32px", background: "#fff" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "16px", fontWeight: 700, color: "#111", letterSpacing: "-0.01em" }}>Arin Wangweerakun</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "#aaa" }}>© 2025 · Built with React</span>
          </div>
        </footer>
      </div>
    </>
  );
}