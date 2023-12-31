import React from "react"



export default function LiProductDetails(props:any){

    const lista=[
        props.produto.lista.frases.map((frase:any)=>(
            `${frase}`
        ))
    ]
    

    return(
    <ul className="list-disc font-sans pt-5">
   
    {lista.map((frase) =>(
        frase.map((frase2:string) =>(
            <li className="py-[3px] text-lg" key={frase2}>{frase2}</li>

        ))
    ))}

    </ul>

    )
}

