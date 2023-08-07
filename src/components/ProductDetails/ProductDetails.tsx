import React from "react";


export default function ProductDetails(props:any){
    return(
        <div className=" flex flex-col items-center text-white">
            <ul>
        {props.descriptionsProp.map((description:any)=>(
            <li key={description}><p>{description}</p> <br></br></li>
        ))}
            </ul>
        </div>

    )
}