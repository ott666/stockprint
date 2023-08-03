import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { Container } from '../Container/Container'

const TesteMotion = () => {
  const [isAnimating, setIsAnimating] = useState(false)

  

  return (
    <Container>
      <div className='h-screen w-full'>
        <motion.div className='w-[200px] h-[200px] bg-slate-500' 
          animate={{
            x: isAnimating? 1000:0,
            opacity: isAnimating? 1:0,
            
          }}
          initial={{
            opacity:0.5,
            x:0
          }}
          transition={{
            type:'spring',
            stiffness:60,
            damping:50
          }}
          onClick={() => setIsAnimating(!isAnimating)}>
            ADOSKADOAS teste         
        </motion.div>
      </div>
    </Container>
  )
}

export default TesteMotion