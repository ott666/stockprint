import React from "react";
import { Container } from "../Container/Container";
import { CardMainItem } from "../CardMainItem/CardMainItem";
import ImgCard1 from '@/assets/img/ink1000.png'
import ImgCard2 from '@/assets/img/ribbon.png'
import ImgCard3 from '@/assets/img/kit.png'
import ImgCard4 from '@/assets/img/imp_etqt.png'
import BgCard1 from '@/assets/img/fundo1.png'
import BgCard2 from '@/assets/img/fundo2.png'
import BgCard3 from '@/assets/img/fundo3.png'
import BgCard4 from '@/assets/img/fundo4.png'


export function OurProducts(){
    return(
        <Container>
            <div className="flex flex-col w-[100%] h-[100%]">
                <h1 className="text-center font-sans tracking-tighter font-semibold  text-5xl mt-[50px]">Nossos produtos</h1>
                <div className="flex flex-wrap justify-between w-[100%] mt-5 pt-[50px]">
                    
                    <CardMainItem url={BgCard1} text='Impressoras de cartao' url2={ImgCard1} alt='HID FARGO INK1000'/>
                    <CardMainItem url={BgCard2} text='Ribbons' url2={ImgCard2} alt='Ribbons 084051'/>
                    <CardMainItem url={BgCard3} text='Kits de limpeza' url2={ImgCard3} alt='Kit 086177'/>
                    <CardMainItem url={BgCard4} text='Impressoras de Etiqueta' url2={ImgCard4} alt='Zebra ZD220'/>
                </div>
            </div>
            
        </Container>
    )
}