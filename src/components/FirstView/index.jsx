import styles from "src/components/FirstView/FirstView.module.css";

export const FirstView = (props) => {
  return (
    <div className={styles.fv}>
      <div className={styles.img}>
        <div className={styles.inner}>
          {props.id === "Index" ? (
            <>
              <p className={styles.text}>
                デザインで人を笑顔にする社会
                <br />
                DIGSMILE INC.
              </p>
              <h2 className={styles.title}>
                Design
                <br />
                for
                <br />
                smile.
              </h2>
            </>
          ) : props.id === "About" ? (
            <>
              <h2 className={styles.title}>About US</h2>
              <p className={styles.text}>DIGSMILEについて</p>
            </>
          ) : props.id === "Contact" ? (
            <>
              <h2 className={styles.title}>Contact</h2>
              <p className={styles.text}>お問い合わせ</p>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};
