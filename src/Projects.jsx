import Layout from "./Layout";
import { styles } from "./siteStyles";
import { projects } from "./siteData";

export default function Projects() {
  return (
    <Layout>
      <section style={styles.section}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
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
    </Layout>
  );
}