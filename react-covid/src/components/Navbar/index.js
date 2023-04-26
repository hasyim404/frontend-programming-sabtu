import styles from "./Navbar.module.css";

function Navbar(props) {
  // for footer
  const { by } = props;
  const { only_footer } = props;

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__brand}>
          <h4>Covid ID</h4>
          <p className={`${only_footer}`}>
            <a href="https://github.com/hasyim404/mytask-frontend-sabtu">
              {by}
            </a>
          </p>
        </div>

        <div>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>Global</li>
            <li className={styles.navbar__item}>Indonesia</li>
            <li className={styles.navbar__item}>Provinsi</li>
            <li className={styles.navbar__item}>About</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
