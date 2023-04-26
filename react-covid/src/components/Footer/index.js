import Navbar from "../Navbar";
import styles from "../Navbar/Navbar.module.css";
// import styles from "../Navbar";

function Footer() {
  return (
    <>
      <Navbar
        only_footer={styles.navbar__for_foot}
        by="Develope by hasyim404"
      ></Navbar>
    </>
  );
}

export default Footer;
