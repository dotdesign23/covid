import iconConfirmed from "../../assets/icon-confirmed.png"
import iconRecovered from "../../assets/icon-recovered.png"
import iconDeath from "../../assets/icon-death.png"
import styles from "./DataBox.module.css"

const Databox = ({ title, subtitle, data }) => {
	return (
		<div className={styles.databox}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      {data ? (
        <div className={styles.box__container}>
          {data.map(({ name, numbers }) => (
            <div className={styles.box} key={name}>
              <h4 className={styles.box__title}>{name}</h4>
              <div className={styles.list}>
                <div className={styles.list__wrap}>
                  <h5 className={styles.list__title}>Confirmed</h5>
                  <h6 className={`${styles.list__display} ${styles.text__primary}`}>
                    {numbers.confirmed?.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}
                  </h6>
                </div>
                <div className={styles.list__img}>
                  <img src={iconConfirmed} alt="Confirmed" />
                </div>
              </div>
              <div className={styles.list}>
                <div className={styles.list__wrap}>
                  <h5 className={styles.list__title}>Recovered</h5>
                  <h6 className={`${styles.list__display} ${styles.text__secondary}`}>
                    {numbers.recovered?.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}
                  </h6>
                </div>
                <div className={styles.list__img}>
                  <img src={iconRecovered} alt="Recovered" />
                </div>
              </div>
              <div className={styles.list}>
                <div className={styles.list__wrap}>
                  <h5 className={styles.list__title}>Confirmed</h5>
                  <h6 className={`${styles.list__display} ${styles.text__tertiary}`}>
                    {numbers.death?.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}
                  </h6>
                </div>
                <div className={styles.list__img}>
                  <img src={iconDeath} alt="Death" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
	)
}

export default Databox