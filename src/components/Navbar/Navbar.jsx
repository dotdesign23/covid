import styles from "./Navbar.module.css"

function Navbar() {
    return (
        <div className={styles.container}>
        <nav className={styles.navbar}>
            <div>
            <h1 className={styles.navbar__brand}>Covid ID</h1>
            </div>
            <div>
                <div className={styles.navbar__list}>
                    <a href="/" className={styles.navbar__item}>Global</a>
                    <a href="/indonesia" className={styles.navbar__item}>Indonesia</a>
                    <a href="/provinsi" className={styles.navbar__item}>Provinsi</a>
                    <a href="/about" className={styles.navbar__item}>About</a>
                </div>
            </div>
        </nav>
    </div>
    );
}

export default Navbar;