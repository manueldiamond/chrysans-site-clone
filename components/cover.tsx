"use client"
import { motion } from 'framer-motion';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import React from 'react';
import FancyHeader from './FancyHeader';

type coverProps={
	children?:React.ReactNode,
	img:Partial<ImageProps>,
	className?:string
	content?:{
		heading:string
		paragraph:string
		CTA:{onClick?:()=>any,text:string,link?:string}
	}
}


 
const Cover = ({children,img,className,content,}:coverProps) => {
    return (
        <section className={`relative overflow-hidden flex centered ${className} w-full h-[600px] max-h-[80vh]`}>
        	<motion.div
        		initial={{scale:1}}
        		variants={{
        			animate:{scale:1.3}
        		}}
        		whileInView='animate'
        		transition={{ease:'linear',duration:15}}
        		className=' absolute w-full h-full left-0 top-0 flex'
        	>
            	<Image {...({
            		width:1500,
            		height:600,
            		alt:'',
            		src:'/vercel.svg',
            		...img
            	})} className=' object-cover w-full h-full pointer-events-none' />
            </motion.div>
            {content&&
            <motion.div
            	initial={{scale:.7,opacity:0}}
            	variants={{
            		animate:{scale:1,opacity:1}
            	}}
            	transition={{delay:.2, duration:1.5, type:'tween'}}
            	whileInView={'animate'}

            	className='cover-content flex flex-col gap-5 container centered text-white z-10'
            >
            	<FancyHeader text={content.heading}/>
            	<p className='text-center'>{content.paragraph}</p>
            	{content.CTA.onClick?
            		(
            			<button className='btn btn-primary' onClick={content.CTA.onClick}>{content.CTA.text}</button>
            		):(
            		<Link className='btn btn-primary' href={content.CTA.link??'#'}>{content.CTA.text}</Link>
            		)
            	}
            </motion.div>}

            {children}
            
        </section>
    );
};

export default Cover;