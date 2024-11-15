import style from "@/styles/index.module.css";
import HomeNavBar from "@/components/HomeNavBar/HomeNavbar";
import Link from 'next/link';
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="cont">
      <HomeNavBar />
      <div className="main">
        <div className={style.home}>
          <main className={style.homeMain}>
            <section className={style.homeTextSection}>
              <h1>Organiza</h1>
              <ul>
                <li><span>•</span> Simplifique seu planejamento financeiro com uma plataforma que ajuda você a gerenciar receitas, despesas e investimentos.</li>
                <li><span>•</span> Defina metas, acompanhe seu progresso e tenha controle sobre suas finanças em um só lugar.</li>
                <li><span>•</span> Prepare-se para alcançar uma vida financeira mais equilibrada e organizada.</li>
              </ul>
              <h2 className={style.start}><Link href="/auth/register">Comece agora e transforme sua relação com o dinheiro!</Link></h2>
            </section>

            <section className={style.homeImageSection}>
              <img src="https://res.cloudinary.com/dcbd1dnvk/image/upload/v1730422334/homeImage_vfzlgm.png" alt="homeImage" />
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
