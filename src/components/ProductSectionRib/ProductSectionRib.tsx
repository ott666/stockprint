'use client'
import React from "react"
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ProductTab from '@/components/ProductTab/ProductTab'
import ProductDetails from "../ProductDetails/ProductDetails"
import LiProductDetails from "../ProductLi/ProductLi"
import ProductTabRib from "../ProductTabRib/ProductTabRib"
const ProductSectionRib =(props:any) =>{
   
    return(
    <div className="flex flex-col w-screen g-3">
        <div className="flex justify-between pt-5">
            <div className="flex max-w-[49%]">
            
                <div className="bg-cover">
                    <img src={`/${props.lista.pseudo}/${props.lista.pseudo}1.png`}/>
                </div>
            
            </div>
            <div className="flex justify-center w-[49%] pb-[30px]">
            <ProductTabRib produto={props.lista}/>

            </div>
        </div>
    </div>
    )
}
export default ProductSectionRib