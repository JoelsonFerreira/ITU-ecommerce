import navstyles from "../styles/Navbar.module.css";
import styles from "../styles/Admin.module.css";
import { useContext, useState } from "react";
import { AdminContext } from "../contexts/AdminContext";

function CreateProduct() {

    const { token } = useContext(AdminContext);

    const [ name, setName ]         = useState("");
    const [ price, setPrice ]       = useState("");
    const [ imageUrl, setImageUrl ] = useState("");
    const [ quant, setQuant ]       = useState("");

    async function loginSubmit(e) {
        e.preventDefault();

        const response = await fetch("https://itu-server.herokuapp.com/products/", { 
            method:"POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                auth_token: token, 
                products: {
                    title: name,
                    price: Number(price),
                    quant: Number(quant),
                    image_url: imageUrl
                }
            })
        });

        setName("");
        setPrice("");
        setImageUrl("");
        setQuant("");

        const status = response.status;

        if(status == 201) {
            alert("Produto adicionado com sucesso!");
        } else if(status == 401) {
            alert("Você não está autenticado!");
        }
    }


    return (
        <>
            <nav className={navstyles.navbar}>
                <div className={navstyles.nav_left}>
                    <h1 className ={navstyles.nav_left_title}>ITU</h1>
                </div>
            </nav>
            <main className={styles.container} >
                <form className={styles.adminform} onSubmit={loginSubmit}> 
                    <input value={name}     onChange={e => setName(e.target.value)}     type="text" placeholder="Nome do produto" />
                    <input value={price}    onChange={e => setPrice(e.target.value)}    type="text" placeholder="Preço"/>
                    <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} type="text" placeholder="Ícone do jogo"/>
                    <input value={quant}    onChange={e => setQuant(e.target.value)}    type="text" placeholder="Quantidade de Produtos"/>
                    <div className={styles.buttonsContainer}>
                        <button className={styles.secondary_button}>Voltar</button>
                        <button className={styles.primary_button} type="submit">Adicionar</button>
                    </div>
                </form>
            </main>
        </>
    )
}

export default CreateProduct;