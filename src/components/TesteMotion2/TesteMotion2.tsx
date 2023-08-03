import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { Container } from '../Container/Container'

const TesteMotion = () => {

  const boxVariants ={
    hidden:{
      opacity:0
    },
    notHidden:{
      opacity:1
    }
  }

  return (
    <Container>
      <div className='h-screen w-full'>
        <motion.div className='w-[200px] h-[200px] bg-slate-500' 
          variants={boxVariants}
          initial='hidden'
          animate='notHidden'
          
          transition={{
            duration:2
          }}
          
          >
            ADOSKADOAS teste         
        </motion.div>
      </div>
    </Container>
  )
}

export default TesteMotion