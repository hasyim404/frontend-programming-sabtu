import styles from "./Provinces.module.css";
import { Title, Sub_Title } from "../Hero";

function Table() {
  return (
    <div className={styles.provinces__table}>
      <table>
        <thead>
          <tr>
            <th className={styles.provinces__no}>No</th>
            <th>Provinsi</th>
            <th>Positif</th>
            <th>Sembuh</th>
            <th>Dirawat</th>
            <th>Meninggal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Aceh</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Bandung</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Depok</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Jakarta</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Medan</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Provinces() {
  return (
    <div className={styles.container}>
      <div className={styles.provinces}>
        <Title title="Provinsi" />
        <Sub_Title sub_title="Data Covid Berdasarkan Provinsi" />

        {/* Table */}
        <Table />
      </div>
    </div>
  );
}

export default Provinces;
