import Script from "next/script";
import styles from "../styles/page.module.css";
export default function Countdown() {
  return (
    <div className={styles.countdown_container}>
      <div className={styles.days_section}>
        <h3 className="days">19</h3>
        <label htmlFor="">Days</label>
      </div>
      <div className={styles.hours_section}>
        <h3 className="hours">23</h3>
        <label htmlFor="">Hours</label>
      </div>
      <div className={styles.minutes_section}>
        <h3 className="minutes">59</h3>
        <label htmlFor="">Minutes</label>
      </div>
      <div className={styles.seconds_section}>
        <h3 className="seconds">59</h3>
        <label htmlFor="">Seconds</label>
      </div>
      <Script src="./scripts/countDown.js" id=""></Script>
    </div>
  );
}
