"use client";

import Image from 'next/image'
import { SectionHero } from '@/components/SectionHero/SectionHero'
import TransitionEffect from '@/components/TransitionEffect/TransitionEffect2'
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import TransitionEffect2 from '@/components/TransitionEffect/TransitionEffect2';
import { OurProducts } from '@/components/OurProducts/OurProducts';

export default function Home() {
  return (
    <>
    <head>
      <title>Pagina do ott</title>
    </head>
    <TransitionEffect2/>
    
    
    <SectionHero/>
    <OurProducts/>

    </>

    )
}
