import Layout from "./Layout";
import { styles } from "./siteStyles";

export default function Contact() {
  return (
    <Layout>
      <section style={styles.section}>
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
    </Layout>
  );
}