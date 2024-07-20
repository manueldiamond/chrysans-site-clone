'use client'
import React,{useState,useEffect, useRef} from 'react'
import { motion, useMotionValue, animate, MotionValue } from 'framer-motion';

const controlButtonsStyle=`prev select-none p-0 opacity-10 hover:opacity-100 absolute btn !transition-all`

const getMotionValue=(val:MotionValue<string>)=>(
    Number(val.get().slice(0,val.get().length-1))
)

const useDrag=(x:MotionValue,currentIndex:number,setToIndex:any,nextIndex:number,prevIndex:number,finite?:boolean,count?:number)=>{
    const [initialDragPos,setInitialDragPos] = useState(0)
    const [dragging,setDragging] = useState(false)
    const [initialX,setInitialX] = useState(0)
    
    const startDrag=(e:any)=>{
        setInitialDragPos(e.clientX)
        setInitialX(getMotionValue(x))
        setDragging(true)
    }

    const drag=(e:MouseEvent)=>{
        x.set(`${(e.clientX-initialDragPos)/window.innerWidth*100/(finite?count!:1)+(initialX)}%`)
    }

    const endDrag=(e:MouseEvent)=>{

        setDragging(false)
        
        const draggedNumber=getMotionValue(x)
        const draggedProgress=(draggedNumber-initialX)/(100/(finite?count!:1))
        const draggedDir=draggedProgress>.5?1:draggedProgress<-.5?-1:0
        
        const destinationIndex = draggedDir<0?nextIndex:prevIndex
        
        console.log(currentIndex,destinationIndex)

        if(draggedDir===0||currentIndex===destinationIndex)
            animate(x,initialX+'%');
        else
            setToIndex(destinationIndex)
    }

    useEffect(()=>{
        const cleanup=()=>{
            window.removeEventListener('mousemove',drag)
            window.removeEventListener('mouseup',endDrag)
        }

        if(dragging){
            window.addEventListener('mousemove',drag)
            window.addEventListener('mouseup',endDrag)
        }else{
            cleanup()
        }

        return cleanup
    },[dragging])
    return {initialDragPos,setInitialDragPos,startDrag,dragging}
}


const useInterval=(intervalFunction:Function,timeout:number)=>{
    const funcRef=useRef(intervalFunction)
    // update Ref
    useEffect(()=>{
        funcRef.current=intervalFunction

    },[intervalFunction])
    // automatic slider
    useEffect(()=>{

        const intervalReference=setInterval(()=>{
            funcRef.current()
        },timeout)
        return ()=>clearInterval(intervalReference)
    },[])
}
export default function Carousel({finite=false,children,slideDuration=3000,slideWidth=100}:{finite?:boolean,children:React.ReactNode,slideDuration?:number,slideWidth?:number}){
    
    const [hovering,setHovering] = useState(false) 

    const x = useMotionValue((finite?0:(-100))+'%')
	const [currentIndex, setCurrentIndex] = useState(0);
    const [direction,setDirection] = useState(1)
    const count=React.Children.count(children)

    const prevIndex=(currentIndex>0)?currentIndex-1:count-1
    const nextIndex=(currentIndex+1)%count

    const setToIndex=(index:number)=>{
        setDirection(Math.sign(index-currentIndex))
        setCurrentIndex(index)
    }


    const {
        startDrag:ondragstart,
        dragging
    } = useDrag( x, currentIndex, setToIndex,nextIndex,currentIndex,finite,count)


    const prevSlide = () => {
        if(x.isAnimating()) return
        setDirection(-1)
        setCurrentIndex(nextIndex);
    };


    const nextSlide = () => {
        if(x.isAnimating()) return
        setDirection(1)
        setCurrentIndex(prevIndex=>(prevIndex+1)%count);
    };

    const autoSlide=()=>{
        if(x.isAnimating() || dragging || hovering)
            return
        nextSlide()
    }

    useInterval(autoSlide,slideDuration)

    useEffect(()=>{

        if(x.isAnimating()||dragging)
            return
        if(!finite){
            const currentX = getMotionValue(x)
            x.set(`${currentX+direction*(slideWidth??100)}%)`);
            console.log(currentX)
        }

        animate(x,finite?(-100*currentIndex/count)+'%':'-100%',{duration:.4})

    },[currentIndex])

    const childrenArray=React.Children.toArray(children)
    

    return (
        <div 
            className="carousel centered !justify-start relative  overflow-hidden w-full "
            onMouseEnter={()=>setHovering(true)}            
            onMouseLeave={()=>setHovering(false)}            
            onMouseDown={ondragstart}
        >
                <motion.div 
                    
                    style={{x,}}
                    className={`flex `}   
                >
                    {finite?React.Children.map(children,(child,index)=>(
                         <div key={index} className=' no-select wrapper w-full min-w-max'
                         >
                            {child}
                        </div>
                    )):(<>
                        <div className=' no-select wrapper w-full min-w-full'>
                            {childrenArray[prevIndex]}
                        </div>
                        <div className='no-select wrapper w-full min-w-full'>
                            {childrenArray[currentIndex]}
                        </div>
                        <div className='no-select wrapper w-full min-w-full'>
                            {childrenArray[nextIndex]}
                        </div>
                    </>
                    )}
                </motion.div>
            	
            <div className='controls centered text-white'>
                <button className={`${controlButtonsStyle} left-0`} onClick={prevSlide}>&#10094;</button>
                <button className={`${controlButtonsStyle}  right-0`} onClick={nextSlide}>&#10095;</button>
                <div className='dots z-20 flex absolute bottom-3 left-1/2 -translate-x-1/2 gap-4'>
                    {Array(count).fill(0).map((_,index)=>(
                        <button onClick={()=>setToIndex(index)} key={index} className={`${index===currentIndex?'bg-white':'hover:bg-white'} border-solid border-2  border-white size-3 rounded-full aspect-square transition-colors shadow-lg`}/>
                    ))}
                </div>
            </div>
        </div>
    );
}