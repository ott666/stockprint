import React from "react"



export default function LiProductDetailsRib(props:any){
    console.log(props,'agoravai')
    const lista=[
        props.produto.descriptions.map((frase:any)=>(
            `${frase}`
        ))
    ]
    

    return(
    <ul className="list-disc font-sans pt-5 text-white">
   
    {lista.map((frase) =>(
        frase.map((frase2:string) =>(
            <li className="py-[3px] text-lg" key={frase2}>{frase2}</li>

        ))
    ))}

    </ul>

    )
}

