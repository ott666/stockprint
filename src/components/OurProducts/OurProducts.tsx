import React from "react";
import { Container } from "../Container/Container";
import { CardMainItem } from "../CardMainItem/CardMainItem";
import ImgCard1 from '@/assets/img/ink1000.png'
import ImgCard2 from '@/assets/img/ribbon.png'
import ImgCard3 from '@/assets/img/kit.png'
import ImgCard4 from '@/assets/img/imp_etqt.png'


export function OurProducts(){
    return(
        <Container>
            <div className="flex flex-wrap justify-between w-[100%] pt-[50px]">
            <CardMainItem url='img_bg_card1' text='Impressoras de cartao' url2={ImgCard1} alt='HID FARGO INK1000'/>
            <CardMainItem url='img_bg_card2' text='Impressoras de cartao' url2={ImgCard2} alt='Ribbons 084051'/>
            <CardMainItem url='img_bg_card3' text='Impressoras de cartao' url2={ImgCard3} alt='Kit 086177'/>
            <CardMainItem url='img_bg_card4' text='Impressoras de cartao' url2={ImgCard4} alt='Zebra ZD220'/>
            </div>
     
        </Container>
    )
}