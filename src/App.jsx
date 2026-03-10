export default function PortfolioQuant() {
  const projects = [
    {
      title: "Hybrid Market Intelligence Engine",
      tag: "Quant Research / NLP / Market Data",
      year: "Ongoing",
      description:
        "Multi-source market data infrastructure combining news scraping, OHLCV collection, macro signals, technical indicators, and financial modeling for European equities.",
    },
    {
      title: "Interactive TradingView-style iOS App",
      tag: "iOS / Finance / Data Viz",
      year: "Ongoing",
      description:
        "Mobile interface for real-time market visualization with CAC 40 data, charting tools, and advanced user interaction.",
    },
    {
      title: "IBKR + Raspberry Pi Data Pipeline",
      tag: "Systems / Data Engineering / Quant",
      year: "Ongoing",
      description:
        "Continuous market data collection architecture using a Raspberry Pi, local buffering, and synchronization toward a central research environment.",
    },
  ];

  const experience = [
    {
      period: "2025",
      title: "Strategic Development Project — MCS",
      detail:
        "Work on growth strategy, B2C expansion, and B2B reinforcement for a metalworking company.",
    },
    {
      period: "2025",
      title: "Testing Technology Internship — Renault Trucks",
      detail:
        "Instrumentation-focused work in testing technology and industrial measurement systems.",
    },
    {
      period: "2024",
      title: "Market Environment Exposure — Natixis",
      detail:
        "Immersion near the trading floor with exposure to structured products.",
    },
  ];

  const interests = [
    "Quantitative Finance",
    "Market Microstructure",
    "Options & Volatility",
    "Financial Machine Learning",
    "Time Series Modeling",
    "Research Infrastructure",
    "NLP for Markets",
    "Interactive Analytics",
  ];

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <a href="#home" style={styles.brand}>
            Your Name — Quant Portfolio
          </a>
          <nav style={styles.nav}>
            <a href="#about" style={styles.navLink}>about</a>
            <a href="#projects" style={styles.navLink}>projects</a>
            <a href="#experience" style={styles.navLink}>experience</a>
            <a href="#research" style={styles.navLink}>research interests</a>
            <a href="#contact" style={styles.navLink}>contact</a>
          </nav>
        </div>
      </header>

      <main id="home" style={styles.main}>
        <section style={styles.hero}>
          <div>
            <p style={styles.kicker}>
              Quantitative Finance · Data · Research Engineering
            </p>
            <h1 style={styles.title}>
              Building rigorous market research systems at the intersection of
              data infrastructure, financial modeling, and machine learning.
            </h1>
            <p style={styles.lead}>
              Student at Mines Saint-Étienne with a background in advanced
              mathematics and engineering, focused on quantitative finance,
              market data pipelines, derivative modeling, and predictive market
              intelligence.
            </p>
            <div style={styles.buttonRow}>
              <a href="#projects" style={styles.primaryButton}>
                View selected projects
              </a>
              <a href="#contact" style={styles.secondaryButton}>
                Contact
              </a>
            </div>
          </div>

          <div style={styles.sideCard}>
            <div>
              <div style={styles.sideTitle}>Current focus</div>
              <p style={styles.sideText}>
                European market data infrastructure, options and volatility,
                macro-financial signals, NLP on financial news, and hybrid
                predictive systems.
              </p>
            </div>
            <div>
              <div style={styles.sideTitle}>Education</div>
              <p style={styles.sideText}>
                École des Mines de Saint-Étienne · Data Science and Applied
                Mathematics for Finance
              </p>
            </div>
            <div>
              <div style={styles.sideTitle}>Tools</div>
              <p style={styles.sideText}>
                Python, SQL, Jupyter, Java, Swift, React, Git, IBKR API
              </p>
            </div>
          </div>
        </section>

        <section id="about" style={styles.sectionSplit}>
          <div>
            <p style={styles.kicker}>about</p>
            <h2 style={styles.sectionTitle}>
              A profile designed for quant research and systematic thinking.
            </h2>
          </div>
          <div>
            <p style={styles.paragraph}>
              My work is centered on translating financial intuition into robust
              systems: collecting high-quality data, structuring research
              pipelines, and building interpretable models that connect market
              moves, macro context, volatility regimes, and company-level
              information.
            </p>
            <p style={styles.paragraph}>
              I am especially interested in derivative markets, volatility
              modeling, hybrid learning frameworks, and interactive tools for
              backtesting and market analysis. This website is conceived as a
              long-term research portfolio: sober, readable, and extensible.
            </p>
          </div>
        </section>

        <section id="projects" style={styles.section}>
          <div style={styles.sectionHeader}>
            <div>
              <p style={styles.kicker}>projects</p>
              <h2 style={styles.sectionTitle}>Selected work</h2>
            </div>
            <p style={styles.mutedText}>
              Designed to remain compatible with future interactive modules:
              backtests, factor dashboards, time-series visualizations, and live
              research demos.
            </p>
          </div>

          <div style={styles.list}>
            {projects.map((project) => (
              <article key={project.title} style={styles.card}>
                <div style={styles.cardTop}>
                  <div>
                    <p style={styles.cardTag}>{project.tag}</p>
                    <h3 style={styles.cardTitle}>{project.title}</h3>
                    <p style={styles.cardText}>{project.description}</p>
                  </div>
                  <div style={styles.cardYear}>{project.year}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" style={styles.sectionSplit}>
          <div>
            <p style={styles.kicker}>experience</p>
            <h2 style={styles.sectionTitle}>
              Academic and professional trajectory
            </h2>
          </div>
          <div style={styles.timeline}>
            {experience.map((item) => (
              <div key={item.title} style={styles.timelineItem}>
                <div style={styles.timelinePeriod}>{item.period}</div>
                <div>
                  <h3 style={styles.timelineTitle}>{item.title}</h3>
                  <p style={styles.cardText}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="research" style={styles.sectionSplit}>
          <div>
            <p style={styles.kicker}>research interests</p>
            <h2 style={styles.sectionTitle}>
              Domains I want to explore deeply
            </h2>
          </div>
          <div style={styles.tags}>
            {interests.map((item) => (
              <span key={item} style={styles.tag}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" style={styles.section}>
          <p style={styles.kicker}>contact</p>
          <h2 style={styles.sectionTitle}>Let’s connect</h2>
          <p style={styles.paragraph}>
            You can use this section for your email, GitHub, LinkedIn, CV, or a
            short note on what kinds of opportunities and collaborations you are
            looking for.
          </p>
          <div style={styles.buttonRow}>
            <a href="#" style={styles.secondaryButton}>GitHub</a>
            <a href="#" style={styles.secondaryButton}>LinkedIn</a>
            <a href="#" style={styles.secondaryButton}>CV</a>
            <a href="mailto:your.email@example.com" style={styles.primaryButton}>
              Email
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#0a0a0a",
    color: "#e5e5e5",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    borderBottom: "1px solid #262626",
    backgroundColor: "rgba(10,10,10,0.92)",
    backdropFilter: "blur(10px)",
  },
  headerInner: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "24px",
  },
  brand: {
    color: "#f5f5f5",
    textDecoration: "none",
    fontSize: "14px",
    letterSpacing: "0.02em",
  },
  nav: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  navLink: {
    color: "#a3a3a3",
    textDecoration: "none",
    fontSize: "14px",
  },
  main: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "56px 24px 80px",
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "1.6fr 1fr",
    gap: "40px",
    paddingBottom: "64px",
    borderBottom: "1px solid #171717",
  },
  kicker: {
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.25em",
    color: "#22d3ee",
    marginBottom: "16px",
  },
  title: {
    fontSize: "54px",
    lineHeight: 1.1,
    fontWeight: 300,
    color: "#fafafa",
    margin: 0,
    maxWidth: "760px",
  },
  lead: {
    marginTop: "24px",
    fontSize: "18px",
    lineHeight: 1.8,
    color: "#a3a3a3",
    maxWidth: "760px",
  },
  buttonRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    marginTop: "28px",
  },
  primaryButton: {
    padding: "12px 20px",
    border: "1px solid rgba(34,211,238,0.4)",
    borderRadius: "16px",
    color: "#67e8f9",
    textDecoration: "none",
  },
  secondaryButton: {
    padding: "12px 20px",
    border: "1px solid #262626",
    borderRadius: "16px",
    color: "#d4d4d4",
    textDecoration: "none",
  },
  sideCard: {
    border: "1px solid #262626",
    borderRadius: "24px",
    padding: "24px",
    backgroundColor: "rgba(23,23,23,0.55)",
    display: "flex",
    flexDirection: "column",
    gap: "28px",
  },
  sideTitle: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    color: "#737373",
    marginBottom: "8px",
  },
  sideText: {
    color: "#d4d4d4",
    fontSize: "14px",
    lineHeight: 1.8,
    margin: 0,
  },
  section: {
    padding: "64px 0",
    borderBottom: "1px solid #171717",
  },
  sectionSplit: {
    display: "grid",
    gridTemplateColumns: "0.9fr 1.1fr",
    gap: "40px",
    padding: "64px 0",
    borderBottom: "1px solid #171717",
  },
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    gap: "24px",
    marginBottom: "32px",
  },
  sectionTitle: {
    fontSize: "36px",
    lineHeight: 1.2,
    fontWeight: 300,
    color: "#fafafa",
    margin: 0,
  },
  paragraph: {
    color: "#a3a3a3",
    lineHeight: 1.9,
    fontSize: "16px",
    marginTop: 0,
    marginBottom: "18px",
  },
  mutedText: {
    color: "#737373",
    fontSize: "14px",
    lineHeight: 1.8,
    maxWidth: "420px",
    textAlign: "right",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  card: {
    border: "1px solid #262626",
    borderRadius: "24px",
    padding: "24px",
    backgroundColor: "rgba(23,23,23,0.45)",
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    gap: "24px",
  },
  cardTag: {
    color: "#22d3ee",
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    margin: 0,
  },
  cardTitle: {
    marginTop: "10px",
    marginBottom: "14px",
    fontSize: "28px",
    fontWeight: 300,
    color: "#f5f5f5",
  },
  cardText: {
    color: "#a3a3a3",
    lineHeight: 1.8,
    fontSize: "16px",
    margin: 0,
  },
  cardYear: {
    color: "#737373",
    fontSize: "14px",
    whiteSpace: "nowrap",
  },
  timeline: {
    display: "flex",
    flexDirection: "column",
    gap: "28px",
  },
  timelineItem: {
    display: "grid",
    gridTemplateColumns: "110px 1fr",
    gap: "16px",
  },
  timelinePeriod: {
    color: "#737373",
    fontSize: "14px",
  },
  timelineTitle: {
    margin: 0,
    fontSize: "20px",
    fontWeight: 400,
    color: "#f5f5f5",
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },
  tag: {
    border: "1px solid #262626",
    borderRadius: "999px",
    padding: "10px 16px",
    backgroundColor: "rgba(23,23,23,0.6)",
    color: "#d4d4d4",
    fontSize: "14px",
  },
};
