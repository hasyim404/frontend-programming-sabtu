import styles from "./AddCovidForm.module.css";
import form_img from "../../assets/img/form_img.svg";

function AddCovidForm() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {/* Left */}
        <div className={styles.form__left}>
          <img className={styles.form__image} src={form_img} alt="" />
        </div>

        {/* Right */}
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Form Covid</h2>

          {/* Form */}
          <form className={styles.form__areas} action="">
            <label htmlFor="provinsi">Provinsi</label>
            <input type="text" />

            <label htmlFor="status">Status</label>
            <input type="text" />

            <label htmlFor="provinsi">Provinsi</label>
            <input type="text" />

            <button className={styles.form__button} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCovidForm;
