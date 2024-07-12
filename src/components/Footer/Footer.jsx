import styles from "../Footer/Footer.module.css";

function Footer(){
    return(
        <div className={styles.container}>
        <nav className={styles.footer}>
          <div>
            <h1 className={styles.footer__brand}>COVID ID</h1>
            <h4 className={styles.footer__brand}>Developed Bymuyamuy</h4>
            
          </div>
          <div>
            <ul className={styles.footer__list}>
              <a href="/" className={styles.footer__item}>Global</a>
              <a href="/indonesia" className={styles.footer__item}>Indonesia</a>
              <a href="/provinsi" className={styles.footer__item}>Provinsi</a>
              <a href="/about" className={styles.footer__item}>About</a>
            </ul>
          </div>
        </nav>
      </div>
    )
}

export default Footer;