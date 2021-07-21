import navstyles from "../styles/Navbar.module.css";
import styles from "../styles/Admin.module.css";

function Admin(){
    return (
        <>
            <nav className={navstyles.navbar}>
                <div className={navstyles.nav_left}>
                    <h1 className ={navstyles.nav_left_title}>ITU</h1>
                </div>
            </nav>
            <main className={styles.container}>
                <form className={styles.adminform}> 
                    <input type="text" placeholder="Nome do produto"/>
                    <input type="text" placeholder="Preço"/>
                    <input type="text" placeholder="Ícone do jogo"/>
                    <input type="text" placeholder="Quantidade de Produtos"/>
                    <div className={styles.buttonsContainer}>
                        <button className={styles.secondary_button}>Voltar</button>
                        <button className={styles.primary_button}>Adicionar</button>
                    </div>
                </form>
            </main>
        </>
    )
}

export default Admin;