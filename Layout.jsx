import { Link } from "react-router-dom";
import { styles } from "./siteStyles";

export default function Layout({ children }) {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <Link to="/" style={styles.brand}>
            Your Name — Quant Portfolio
          </Link>

          <nav style={styles.nav}>
            <Link to="/about" style={styles.navLink}>about</Link>
            <Link to="/projects" style={styles.navLink}>projects</Link>
            <Link to="/experience" style={styles.navLink}>experience</Link>
            <Link to="/research" style={styles.navLink}>research interests</Link>
            <Link to="/contact" style={styles.navLink}>contact</Link>
          </nav>
        </div>
      </header>

      <main style={styles.main}>{children}</main>
    </div>
  );
}