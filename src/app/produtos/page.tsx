'use client'

import { Container } from "@/components/Container/Container";
import ListaProdutos from "@/components/ListaProdutos/ListaProdutos";
import React from "react";
import GenerosProdutos from "@/components/GenerosProdutos/GenerosProdutos";
import { useState } from "react";
import Breadcrumb2 from "@/components/Breadcrumb2/Breadcrumb2";
import TransitionEffect2 from "@/components/TransitionEffect/TransitionEffect2";
export default function Page(){
    const [selectedGenre, setSelectedGenre] = useState("");
    return (
    <div className="w-screen flex flex-col">
        <TransitionEffect2/>
        <Breadcrumb2 props='Produtos'/>
        <Container>
        <div className="flex flex-col w-full justify-center items-center mt-[50px]">
          <div className="w-full flex justify-center">
              <GenerosProdutos
                selectedGenre={selectedGenre}
                onSelect={setSelectedGenre}
              />
            </div>
            
            
              <ListaProdutos selectedGenre={selectedGenre} />
        </div>
          
        </Container>

    </div>
        
    )
}