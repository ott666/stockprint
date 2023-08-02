/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage:{
      'img_bg_hero':"url('../assets/img/bg-hero.png')",
      'img_bg_card1':"url('../assets/img/fundo1.png')",
      'img_bg_card2':"url('../assets/img/fundo2.png')",
      'img_bg_card3':"url('../assets/img/fundo3.png')",
      'img_bg_card4':"url('../assets/img/fundo4.png')"
    },
    extend: {
      colors:{
      'primary-blue':'#064FA0',
      'secondary-blue':'#617ABC',
      'primary-turq':'#56B8E6',
      'primary-white':'#FFFFFF',
      'primary-green':'#198754',
      'primary-text-dark':'#2B180D',
      'secondary-text-light':'#BACFE5'
      }     
    },
  },
  plugins: [],
}
