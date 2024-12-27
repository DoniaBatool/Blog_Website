import React from 'react'
import Image from 'next/image'
import bannerImg from "@/assets/banner.png"
import { Button } from './ui/button'
import Link from 'next/link'
const Banner = () => {
  return (
    <section className="dark:bg-slate-800 dark:text-white bg-gray-100 py-8">
     <div className='max-w-7xl mx-auto grid grid-cols-1 
     md:grid-cols-2 items-center gap-8 px-4 sm:px-6 lg:px-8 py-5'>
     <div className='w-full'>
      <Image
      src={bannerImg}
      alt="picture of author"
      placeholder="blur"
      className="w-full h-auto object-cover rounded-md"/>

     </div>
     <div className='flex flex-col space-y-4'>
        <h4 className="text-sm font-medium text-gray-500">Technology</h4>
        <h2 className='txt-3xl font-bold '>
        OpenAI&apos;s Explosive Growth Is Shaping the Future, But Costing a Fortune
        </h2>
        <p>
        OpenAI's rapid expansion has positioned the company at the forefront of AI innovation, 
        revolutionizing industries from healthcare to entertainment. 
        With cutting-edge technologies like GPT and DALL·E, OpenAI is reshaping 
        how we interact with artificial intelligence.However, the costs 
        associated with this growth are staggering.
        <br/><br/>
        Despite the significant financial drain, OpenAI&apos;s trajectory is largely positive, as its 
        technologies gain widespread adoption and investment. Still, the company&apos;s 
        ability to sustain this growth without sacrificing long-term profitability is under scrutiny. 
        The burning question is whether OpenAI can balance its ambitious innovations with the need for 
        financial stability. </p>
        <Link href="/blogs"><Button variant ="default" className='w-full'>Explore Blogs</Button></Link>
     </div>
     </div>
    </section>
      
  )
}

export default Banner
