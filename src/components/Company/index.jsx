import styles from "src/components/Company/Company.module.css";
import { Table } from "src/components/Table";

export const Company = () => {
  return (
    <section className={styles.company}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Company</h2>
        <Table />
        <div className={styles.map}>
          {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51897.385325629!2d139.6996617879943!3d35.6132632124338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a622d707eed%3A0x7d44bb1b33343845!2z5p2x5Lqs6YO95ZOB5bed5Yy6!5e0!3m2!1sja!2sjp!4v1615194066421!5m2!1sja!2sjp"
              width="1100"
              height="360"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe> */}
        </div>
      </div>
    </section>
  );
};
