import { Link } from "react-router-dom";
import Layout from "./Layout";
import { styles } from "./siteStyles";

export default function Home() {
  return (
    <Layout>
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
            <Link to="/projects" style={styles.primaryButton}>
              View selected projects
            </Link>
            <Link to="/contact" style={styles.secondaryButton}>
              Contact
            </Link>
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
    </Layout>
  );
}
