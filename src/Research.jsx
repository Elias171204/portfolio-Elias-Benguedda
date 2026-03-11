import Layout from "./Layout";
import { styles } from "./siteStyles";
import { interests } from "./siteData";

export default function Research() {
  return (
    <Layout>
      <section style={styles.sectionSplit}>
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
    </Layout>
  );
}