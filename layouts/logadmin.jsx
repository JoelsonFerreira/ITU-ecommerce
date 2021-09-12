import navstyles from "../styles/Navbar.module.css";
import styles from "../styles/Admin.module.css";
import { useContext, useState } from "react";
import { AdminContext } from "../contexts/AdminContext";
import Link from "next/link";

function LogAdmin() {
    const { auth } = useContext(AdminContext);

    const [ user, setUser ] = useState("");
    const [ password, setPassword ] = useState("");

    async function loginSubmit(e) {
        e.preventDefault();

        const response = await fetch("https://itu-server.herokuapp.com/admin/", { 
            method:"POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user,
                password
            })
        });

        const { is_auth, auth_token } = await response.json();

        if(is_auth) {
            auth(auth_token);
        } else {
            alert("Usuário ou senha inválido!");
        }
    }

    return (
        <>
            <nav className={navstyles.navbar}>
                <div className={navstyles.nav_left}>
                    <Link href="/">
                        <a>
                            <h1 className={styles.nav_left_title}>ITU</h1>
                        </a>
                    </Link>
                </div>
            </nav>
            <main className={styles.container}>
                <form className={styles.adminform} onSubmit={loginSubmit} >
                    <input 
                        type="text"
                        placeholder="Digite o usuario"
                        value={user} onChange={e => setUser(e.target.value)} 
                    />
                    <input 
                        type="password"
                        placeholder="Digite sua senha"
                        value={password} onChange={e => setPassword(e.target.value)} 
                    />
                    <div className={styles.buttonsContainer}>
                        <button className={styles.primary_button} type="submit">Logar</button> 
                    </div>
                </form>
            </main>
        </>
    )
}

export default LogAdmin;