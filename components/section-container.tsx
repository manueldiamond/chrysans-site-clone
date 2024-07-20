import React from 'react';
import FancyHeader from './FancyHeader';

const SectionContainer = ({children,id,heading,paragraph}:{paragraph?:string,heading:string,id:string,children:React.ReactNode}) => {
    return (
        <section id={id} className=' '>
            <div className='container py-8 flex-col gap-1 centered'>
            	<FancyHeader text={heading}/>
            	<p className='text-center'>{paragraph}</p>
                {children}
            </div>
        </section>
    );
};

export default SectionContainer;