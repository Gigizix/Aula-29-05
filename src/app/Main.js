import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./main.module.css";

export default function Home() {
  const [listaProduct, setListaProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setListaProduct(data);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };
    getProducts();
  }, []);

  const orderAz = () => {
    let newList = [...listaProduct].sort((a, b) => a.title.localeCompare(b.title));
    setListaProduct(newList);
  };

  const orderZa = () => {
    let newList = [...listaProduct].sort((a, b) => b.title.localeCompare(a.title));
    setListaProduct(newList);
  };

  return (
    <>
      <div>
        <button onClick={orderAz}>A-Z</button>
        <button onClick={orderZa}>Z-A</button>
      </div>
      <main className={styles.main}>
        {listaProduct.map((produto) => (
          <div className={styles.card} key={produto.id}>
            <h3>{produto.title}</h3>
            <p>Categoria: {produto.category}</p>
            <h4>Valor {produto.price}</h4>
            <p>Descrição: {produto.description}</p>
            <p>Estoque: {produto.rating.count}</p>
            <Image width={100} height={100} src={produto.image} alt={produto.title} />
          </div>
        ))}
      </main>
    </>
  );
}