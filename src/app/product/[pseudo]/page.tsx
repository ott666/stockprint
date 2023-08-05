import React from "react"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import Produtos from '@/data/products.json'

export default function Page({params}:any){
  const produto = Produtos.find(({ pseudo }) =>  pseudo === params.pseudo)
  return (
    <>
    <div className="w-full flex flex-col">
    <Breadcrumb produto={produto}/>
    <div className="h-screen">oi</div>
    
    </div>
    </>
  
  )
}