import styles from "./Global.module.css";

function Global(props) {
  const { global } = props;

  return (
    <div className={styles.global__main}>
      <div className={styles.global__box}>
        {/* {global.indonesia.indonesia} */}
        {/* {console.log(global.indonesia)} */}
        {/* {global.status} <span>{global.total}</span> */}
        <h5 className={styles.global__confirm}>
          Confirmed <span>5.990</span>
        </h5>
      </div>
      <div className={styles.global__box}>
        <h5 className={styles.global__recover}>
          Recovered <span>5.990</span>
        </h5>
      </div>
      <div className={styles.global__box}>
        <h5 className={styles.global__death}>
          Death <span>5.990</span>
        </h5>
      </div>
    </div>
  );
}

export default Global;
