import styles from "./Provinces.module.css";

function Provinces() {
  return (
    <div className={styles.container}>
      <div className={styles.provinces}>
        <h2 className={styles.provinces__title}>Provinsi</h2>
        <p className={styles.provinces__sub_title}>
          Data Covid Berdasarkan Provinsi
        </p>

        {/* Table */}
      </div>
    </div>
  );
}

export default Provinces;
