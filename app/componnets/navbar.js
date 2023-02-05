import Link from "next/link";
import styles from "../styles/navbar.module.css";
export default function navbar() {
  return (
    <div className={styles.entire_navbar}>
      <div className={styles.navbar_container}>
        <div className={styles.nav_link_logo}>
          <div className={styles.logo}>KONPOL</div>
          <ul className={styles.nav_links}>
            <li>
              <Link href="/home" className="bg-red-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
