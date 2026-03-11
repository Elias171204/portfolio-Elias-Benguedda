import Layout from "./Layout";
import { styles } from "./siteStyles";

export default function About() {
  return (
    <Layout>
      <section style={styles.sectionSplit}>
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
    </Layout>
  );
}