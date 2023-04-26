import styles from "./Globals.module.css";
import Global from "../Global";

function Globals(props) {
  const { globals } = props;
  return (
    <div className={styles.container}>
      <div className={styles.globals}>
        <h2 className={styles.globals__title}>Indonesia</h2>
        <p className={styles.globals__sub_title}>
          Data Covid Berdasarkan Indonesia
        </p>

        {/* Show Data */}
        <div className={styles.globals__main}>
          {/* {console.log(globals)} */}
          {/* {globals.map((global) => (
            <Global key={global} global={global} />
          ))} */}
          <Global />
        </div>
      </div>
    </div>
  );
}

export default Globals;
