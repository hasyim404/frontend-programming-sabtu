import styles from "./AddCovidForm.module.css";
import form_img from "../../assets/img/form_img.svg";

function Label(props) {
  const { LFor, LName } = props;

  return (
    <>
      <label htmlFor={LFor}>{LName}</label>
    </>
  );
}

function Select(props) {
  return (
    <>
      <select className={styles.form__select} name="" id="">
        <option value={""}>s</option>
        <option value={""}>4</option>
      </select>
    </>
  );
}

function BtnForm() {
  return (
    <button className={styles.form__button} type="submit">
      Submit
    </button>
  );
}

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
            {/* <label htmlFor="provinsi">Provinsi</label> */}
            <Label LFor="provinsi" LName="Provinsi" />
            <Select />

            <Label LFor="status" LName="Status" />
            <Select />

            <Label LFor="jumlah" LName="Jumlah" />
            <input type="number" />

            <BtnForm />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCovidForm;
