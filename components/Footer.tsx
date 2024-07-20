import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react'
const footerData = [
    {
        heading: 'Our Cutting-Edge Services',
        list: [
            { text: 'Tile Installation', href: '#' },
            { text: 'Exterior And Interior Painting', href: '#' },
            { text: 'P.O.P Ceilings', href: '#' },
            { text: 'Lighting Installation', href: '#' },
            { text: 'Curtains & Window Blinds', href: '#' },
            { text: 'Space Partition', href: '#' }
        ]
    },
    {
        heading: 'How Can We Help?',
        list: [
            { text: 'Book For Consultation', href: '#' },
            { text: 'Track Your Order', href: '#' },
            { text: 'FAQs', href: '#' },
            { text: 'Our Suppliers', href: '#' },
            { text: 'Careers', href: '#' }
        ]
    }
];
const supportInfo = [
    {icon:(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
    ), text:'(+233) 546480338', href:'tel:+233546480338'},
    
    {icon:( 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
    ) , text:'info@chrysansdecor.com',href: 'mailto:info@chrysansdecor.com'},
    {icon:(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
    ), text:'GW-0078-3872 Pokuase, Accra.'}
]
const socials=[
    {icon:'/fb-icon.png', link:'https://facebook.com'},
    {icon:'/tw-icon.svg', link:'https://twitter.com'},
    {icon:'/ig-icon.png', link:'https://instagram.com'},
]

const footerBlockHeadingStyle='font-semibold leading-[22px] text-lg'

const FooterBlock=({className, children,heading,}:{className?:string,heading:string,children?:ReactNode})=>(
    <div className={'flex-1 '+className}>
        <h6 className={` pb-6 ${footerBlockHeadingStyle}`}>{heading}</h6>
        <div className='flex flex-col gap-2'>
            {children}
        </div>
    </div>
)

const Footer = () => {
  return (
    <footer>
        <div className='text-white bg-secondary'>
            <div className='flex justify-between container py-[50px]  lg:pb-[90px] flex-wrap gap-6'>
            
            {footerData.map((footerBlock,i)=>(
                <FooterBlock className={i===0?'hidden lg:block':''} heading={footerBlock.heading}>
                     {footerBlock.list.map(item=>(
                        <Link key={item.text} href={item.href}>{item.text}</Link>
                    ))}    
                </FooterBlock>
            ))}

            <FooterBlock heading='Contact Support?'>
                {supportInfo.map(info=>(
                    <Link key={info.text} href={info.href??'#'} className='flex gap-3 items-center'>
                        {info.icon}
                        <span>{info.text}</span>
                    </Link>
                ))}
                <h6 className={`pt-5 ${footerBlockHeadingStyle}`}>Follow Us</h6>
                <div className='flex gap-2'>
                    {socials.map(item=>(
                        <Link href={item.link} className='btn-primary centered w-10 h-10 !p-0'>
                            <Image 
                                className='h-5 w-5 object-contain' 
                                alt='social-logo' 
                                src={item.icon} 
                                width={20} 
                                height={20}
                            />
                        </Link>
                    ))}
                </div>
            </FooterBlock>
            <FooterBlock className='max-w-[500px] ' heading='Get Amazing Discounts'>
                <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                <form className='flex flex-wrap lg:flex-col gap-2'>
                    <input className='input-text flex-1 min-w-max' type='email' placeholder='Your email address'/>
                    <button type='submit' className='w-max btn-primary uppercase'>
                     Sign up
                    </button>
                </form>
            </FooterBlock>
            </div>
        </div>
        <div className='container copywrights text-[#777] py-4 center'>
            <p>© Copyright 2021-2024 Chrysansdecor - All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer