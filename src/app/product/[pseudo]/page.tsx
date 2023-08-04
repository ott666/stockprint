import React from "react"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import Produtoo from '@/data/products.json'

export default function Page({params}){

  console.log(params)
  console.log(Produtoo, 'aquiiiiiii')
  return (
    <>
    <Breadcrumb title={params.pseudo}/>
    <div className="h-screen">oi</div>
    </>
  
  )
}