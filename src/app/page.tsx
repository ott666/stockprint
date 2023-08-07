"use client";
import { SectionHero } from '@/components/SectionHero/SectionHero'
import TransitionEffect2 from '@/components/TransitionEffect/TransitionEffect2';
import { OurProducts } from '@/components/OurProducts/OurProducts';
import Cta from '@/components/Cta/Cta';
import Servicos from '@/components/Servicos/Servicos';
import Footer from '@/components/Footer/Footer';
import ProdutoPage from '@/components/ProdutoPage/ProdutoPage';
import WhatsappButton from '@/components/WhatsappButton/WhatsappButton';

export default function Home() {
  return (
    <>
    <head>
      <title>Pagina do ott</title>
    </head>
    <TransitionEffect2 />
    <SectionHero/>
    <OurProducts />
    <ProdutoPage/>

    <Cta />
    <Servicos />


  
    </>

    )
}
