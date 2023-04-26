import styles from "./Hero.module.css";
import hero_img from "../../assets/img/hero_img.svg";

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        {/* Left */}
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid ID</h2>
          <p className={styles.hero__sub_title}>
            Monitoring Perkembangan Covid
          </p>
          <p className={styles.hero__description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
            nostrum voluptate corrupti magni velit vel laborum recusandae cum.
            Expedita fugit ducimus tempore! Assumenda veritatis eaque quod ipsa
            exercitationem labore cumque.
          </p>
          <a href="#!">
            <button className={styles.hero__button}>
              <span>Vaccine </span>
            </button>
          </a>
        </div>

        {/* Right */}
        <div className={styles.hero__right}>
          <img className={styles.hero__image} src={hero_img} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
