import Layout from "./Layout";
import { styles } from "./siteStyles";
import { experience } from "./siteData";

export default function Experience() {
  return (
    <Layout>
      <section style={styles.sectionSplit}>
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
    </Layout>
  );
}
