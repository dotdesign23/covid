import styles from "./Covido.module.css";

function Covido({ title, subtitle, data }) {
  return (
    <div className={styles.container}>
      <div className={styles.global__section}>
        <div className={styles.title4__}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className={styles.cards}>
          {data.map((dataItem) => (
            <div className={styles.card__} key={dataItem.status}>
              <h2>{dataItem.status}</h2>
              <p className={dataItem.status === "confirmed"? styles.card__C : dataItem.status === "recovered"? styles.card__R : dataItem.status === "death"? styles.card__D : "" }>{dataItem.total?.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Covido;