import React from 'react';

const formatText=(text:string)=>text.split(' ').map(word=>{
		let className='text-primary-2'
		if(word[0]==='*'&&word[word.length-1]==="*")
			word=word.slice(1,word.length-1)
		else
			className=''
		return (<span className={`${className}`}>{word} </span>)
	})

const FancyHeader = ({text=''}) => {
    return (
        <h1 className='text-2xl py-5 font-semibold'>{formatText(text)}</h1>
    );
};

export default FancyHeader;