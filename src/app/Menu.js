import Styles from "./menu.module.css";
import Image from "next/image";

export default function Menu() {
    return (
        <header>
            <nav className={Styles.cabecalho}>
                <div className={Styles.logo}>
                    <Image
                        width={140}
                        height={100}
                        src="https://www.pngall.com/wp-content/uploads/13/Louis-Vuitton-Logo.png"
                        alt="Louis Vuitton Logo"
                    />
                </div>
                <div>
                    <h1>LOUIS VUITTON SHOP</h1>  
                </div>
                <div>
                    <button className={Styles.botao}>Adicionar Produtos</button>
                    <Image
                        width={40}
                        height={40}
                        src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-shopping-cart-line-icon-vector-png-image_5058494.jpg"
                        alt="Ícone do Carrinho de Compras"
                    />
                </div>
            </nav>
        </header>
    )
}