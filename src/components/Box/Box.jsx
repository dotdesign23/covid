import styles from "./Box.module.css";
import image from "../../assets/box.png"
function Box() {
    return(
        <div className={styles.container}>
            <section className={styles.box}>
                <div className={styles.box__left}>
                    <h2 className={styles.box__title}>Covid ID</h2>
                    <h4 className={styles.box__genre}>Monitoring Perkembangan Covid</h4>
                    <p className={styles.box__description}>Monitoring perkembangan COVID-19 telah menjadi sangat penting dalam upaya mengendalikan penyebaran virus corona. Berbagai aplikasi dan sistem telah dikembangkan untuk memantau perkembangan kasus COVID-19, termasuk aplikasi berbasis Android yang memungkinkan visualisasi data sebaran COVID-19 dan panduan pencegahan virus COVID-19.</p>
                    <button className={styles.box__button}>Vaccine</button>
                </div>
                <div className={styles.box__right}>
                    <img className={styles.box__image} 
                    src={image} alt="placeholder" />
                </div>
            </section>
        </div>
    );
}

export default Box;