'use client'
import React from "react";
import Breadcrumb2 from "@/components/Breadcrumb2/Breadcrumb2";
import Servicos from "@/components/Servicos/Servicos";
import TransitionEffect2 from "@/components/TransitionEffect/TransitionEffect2";

export default function Page(){
    return(
        <div className='w-screen flex flex-col'>
            <TransitionEffect2/>

            <Breadcrumb2 props='Servicos'/>
            <Servicos/>
        </div>
    )
}