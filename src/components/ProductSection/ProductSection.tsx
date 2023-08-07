'use client'
import React from "react"
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ProductTab from '@/components/ProductTab/ProductTab'
import ProductDetails from "../ProductDetails/ProductDetails"
import LiProductDetails from "../ProductLi/ProductLi"
const ProductSection =(props:any) =>{
    const fotosProduto = [
        
            [`/${props.lista.pseudo}/${props.lista.pseudo}1.png`],
            [`/${props.lista.pseudo}/${props.lista.pseudo}2.png`],
            [`/${props.lista.pseudo}/${props.lista.pseudo}3.png`],
            [`/${props.lista.pseudo}/${props.lista.pseudo}4.png`],
            [`/${props.lista.pseudo}/${props.lista.pseudo}5.png`]
        
    ]
    
    return(
    <div className="flex flex-col w-screen">
        <div className="flex justify-between pt-5">
            <div className="flex max-w-[50%]">
            
            <Carousel>
            {fotosProduto.map((produto)=>(
                <div key={props.lista.pseudo} className="bg-cover">
                    <img src={`${produto}`} alt={`${produto}`}/>
                </div>
            ))}
            </Carousel>
            </div>
            <div className="flex justify-center w-[50%]">
            <ProductTab produto={props.lista}/>

            </div>
        </div>
        <LiProductDetails produto={props}/>
    </div>
    )
}
export default ProductSection