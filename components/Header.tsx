"use client"
import Image from 'next/image'
import React,{useState,useEffect} from 'react'
import Link from 'next/link';
import { useScroll,motion, useMotionValueEvent,useVelocity, AnimatePresence } from 'framer-motion';

const links = [
    { text: 'Home', href: '#' },
    { text: 'Our Cutting-Edge Services', href: '#' },
    { text: 'Ideas', href: '#' },
    { text: 'About Us', href: '#' },
    { text: 'FAQs', href: '#' }
];

const secondaryLinks= [
    { text: 'Brand Partners', href: '#' },
    { text: 'Paints', href: '#' },
    { text: 'Tiles', href: '#' },
    { text: 'Lighting Features', href: '#' },
    { text: 'POP Ceilings', href: '#' },
    { text: 'Curtains And Blinds', href: '#' },
    { text: 'Space Partition', href: '#' },
];

const iconStyle = 'hover-scale !transition-all hover:opacity-80'

const Header = () => {

    const {scrollY,scrollYProgress} = useScroll()
    const [scroll, setScrollData] = useState({amt:0,direction:0,progress:0})
    console.log(scroll)
    
    const showNav=scroll.progress<=0.25 || scroll.dir<0  || scroll.progress>=.98
    const showBottomNav=scroll.progress<=0.02 || scroll.amt<=10

    const [sideMenuOpen,setSideMenuOpen] = useState(false) 

    useMotionValueEvent(scrollY, "change", (latest) => {
      setScrollData({
        amt:latest,
        direction:Math.sign(scrollY.getVelocity()),
        progress:scrollYProgress.get()
      })
    })

  return (
    <div className='relative z-50'>
    
        <div className='fixed top-0 left-0 w-full '>
            <AnimatePresence>
                {(showNav) && 
                <motion.nav 
                    initial={{y:-100}}
                    animate={{y:0}}
                    exit={{y:-100}}
                    transition={{type:'tween', ease:'easeOut'}}
                    className=''
                >   
                    <motion.div 
                        initial={{height:60}}
                        animate={{height:showBottomNav?60:69}}
                        transition={{delay:.1}}
                        className={`${!showBottomNav&&'border-b-2 border-[rgba(244,244,244,1)] border-b-solid '} bg-white relative z-20 items-center flex`}
                    >
                        <div className='flex justify-between items-center container h-[60px] '>
                            <Image src={'/logo-chysansa.png'} width={200} height={38.2} alt='chrysans decor logo'/>
                            
                            <ul className='hidden lg:flex gap-5 items-center h-10'>
                                {links.map((link)=>
                                    <li key={link.text}>
                                        <Link className='hover:text-primary  transition-colors' href={link.href}>{link.text}</Link>
                                    </li>
                                )}
                            </ul>
                            <div className='icon-group flex gap-4 h-10 items-center'>
                                <button className={`${iconStyle}`}>
                                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </button>
                                <Link href={'#'} className={`${iconStyle}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </Link>
                                <Link className={`${iconStyle} relative`}href={'#'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                    <span className='absolute rounded-full bg-primary-2 aspect-square text-white text-[9px]  w-4 center font-normal top-[-5px] right-[-5px]' >0</span>
                                </Link>
                                <button className={`${iconStyle} lg:hidden`} onClick={()=>setSideMenuOpen(true)} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </motion.div>

                        {showBottomNav&&
                            <motion.div 
                                initial={{y:-20}}
                                animate={{y:0}}
                                transition={{duration:.1}}
                                className='sub-nav relative z-10 bg-[rgba(244,244,244,1)] h-[50px] hidden lg:block'>
                            <div className='flex container h-full items-center justify-between '>
                                <ol className='flex gap-5'>
                                    {secondaryLinks.map(link=>(
                                        <li key={link.text}>
                                            <Link className='hover-underline-primary' href={link.href}>{link.text}</Link>
                                        </li>
                                    ))}
                                </ol>
                                <button className='CTA hover-underline-primary h-[40px] center'>Book For Consultation</button>
                            </div>
                            </motion.div>
                        }
                   
                </motion.nav>}
            </AnimatePresence>
            {/*SideMenu*/}
            <AnimatePresence >
                {sideMenuOpen&&<div className='fixed top-0 left-0 z-50'>
                <motion.div
                    initial={{x:'-100%'}}
                    animate={{x:'0%'}}
                    exit={{x:'-100%'}}
                    transition={{ease:'easeInOut' }}
                    className='lg:hidden fixed left-0 top-0 z-40 bg-white h-screen min-w-[300px] flex flex-col'
                >
                    <div className='flex justify-end py-5 px-5 border-b border-solid'>
                        <button onClick={()=>setSideMenuOpen(false)} className='flex gap-3 btn hover:text-primary !transition-all '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            Close
                        </button>
                    </div>
                    <ul className='flex flex-col flex-1 overflow-auto pb-[45%]'>
                        {links.map((link)=>
                            <li key={link.text} className='last:border-b'>
                                <Link className='py-3 px-5 border-solid
                                border-t

                                hover:text-primary transition-colors block' href={link.href}>{link.text}</Link>
                            </li>
                        )}
                        {links.map((link)=>
                            <li key={link.text} className='last:border-b'>
                                <Link className='py-3 px-5 border-solid
                                border-t

                                hover:text-primary transition-colors block' href={link.href}>{link.text}</Link>
                            </li>
                        )}
                        
                    {links.map((link)=>
                            <li key={link.text} className='last:border-b'>
                                <Link className='py-3 px-5 border-solid
                                border-t

                                hover:text-primary transition-colors block' href={link.href}>{link.text}</Link>
                            </li>
                        )}
                        {links.map((link)=>
                            <li key={link.text} className='last:border-b'>
                                <Link className='py-3 px-5 border-solid
                                border-t

                                hover:text-primary transition-colors block' href={link.href}>{link.text}</Link>
                            </li>
                        )}
                        {links.map((link)=>
                            <li key={link.text} className='last:border-b'>
                                <Link className='py-3 px-5 border-solid
                                border-t

                                hover:text-primary transition-colors block' href={link.href}>{link.text}</Link>
                            </li>
                        )}
                        {links.map((link)=>
                            <li key={link.text} className='last:border-b'>
                                <Link className='py-3 px-5 border-solid
                                border-t

                                hover:text-primary transition-colors block' href={link.href}>{link.text}</Link>
                            </li>
                        )}
                                                
                    </ul>
                </motion.div>
                <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    className='absolute left-0 top-0 w-screen z-10 h-screen scroll-none overflow-hidden  bg-black/60'
                />
            </div>}
            </AnimatePresence>
        </div>

    </div>
  )
}

export default Header