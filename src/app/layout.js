import Head from 'next/head';
import Menu from "./Componentes/Menu";
import Footer from "./Componentes/Footer";

export const metadata = {
  title: "Meu Shop.com",
  description: "Loja",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <header>
        <Menu />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}