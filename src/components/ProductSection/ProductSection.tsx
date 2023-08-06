'use client'
import React from "react"
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const ProductSection =(props:any) =>{
    const fotosProduto = [
        
            [`/${props.lista.pseudo}/${props.lista.pseudo}1.png`],
            [`/${props.lista.pseudo}/${props.lista.pseudo}2.png`],
            [`/${props.lista.pseudo}/${props.lista.pseudo}3.png`],
            [`/${props.lista.pseudo}/${props.lista.pseudo}4.png`],
            [`/${props.lista.pseudo}/${props.lista.pseudo}5.png`]
        
    ]
    
    console.log(props.lista.pseudo)    
    return(
        <div className="flex">
           <Carousel>
           {fotosProduto.map((produto)=>(
            <div key={props.lista.pseudo} className="bg-cover">
                <img src={`${produto}`} alt={`${produto}`}/>
            </div>
           ))}
           </Carousel>
        </div>
    )
}
export default ProductSection