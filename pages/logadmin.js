import navstyles from "../styles/Navbar.module.css";
import styles from "../styles/Admin.module.css";

function LogAdmin() {
    return (
        <>
            <nav className={navstyles.navbar}>
                <div className={navstyles.nav_left}>
                    <h1 className ={navstyles.nav_left_title}>ITU</h1>
                </div>
            </nav>
            <main className={styles.container}>
                <form className={styles.adminform}>
                    <input type="text" placeholder="Digite o usuario"/>
                    <input type="password" placeholder="Digite sua senha"/>
                    <div className={styles.buttonsContainer}>
                        <button className={styles.secondary_button}>Voltar</button>
                        <button className={styles.primary_button}>Logar</button> 
                    </div>
                </form>
            </main>
        </>
    )
}

export default LogAdmin;