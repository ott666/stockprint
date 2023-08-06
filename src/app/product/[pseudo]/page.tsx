import React from "react"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import Produtos from '@/data/products.json'
import { Container } from "@/components/Container/Container"
import ProductSection from "@/components/ProductSection/ProductSection"

export default function Page({params}:any){
  const produto = Produtos.find(({ pseudo }) =>  pseudo === params.pseudo)
  return (
    <>
    <Breadcrumb produto={produto}/>
    <Container>
      <ProductSection lista={produto} />
    </Container>
    </>
  
  )
}