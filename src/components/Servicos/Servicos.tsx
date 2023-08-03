import React from 'react'
import { Container } from '../Container/Container'
import CardServico from '../CardServico/CardServico'

const Servicos = () => {
  return (
    <Container>
        <div className='flex flex-col items-center w-full pt-[50px]'>
            <h1 className='text-[34px] font-bold font-sans pb-[30px]'>Nossos Serviços</h1>
            <div className='flex flex-wrap justify-between gap-2 w-full'>
            <CardServico title='lalala' text='bananinha bananinha bananinha'/>
            <CardServico title='lalala' text='bananinha bananinha bananinha'/>
            <CardServico title='lalala' text='bananinha bananinha bananinha'/>
            <CardServico title='lalala' text='bananinha bananinha bananinha'/>
            <CardServico title='lalala' text='bananinha bananinha bananinha'/>
            <CardServico title='lalala' text='bananinha bananinha bananinha'/>
            </div>

        </div>
    </Container>
    )
}

export default Servicos