import './App.css';
import {useRef, useEffect, useState} from 'react';
import Hello from './Hello.png';
import Programmer from './Programmer.png';
import Creator from './Creator.png';
import Thinker from './Thinker.png';

const images = [Hello, Programmer, Creator, Thinker];
const text = ["I am a...", "Programmer", "Creator", "Problem-Solver"]
const classes = ["Image image1", "Image image2", "Image image3", "Image image4"]

function Row() {
    const ref1 = useRef();
    const [isIntersecting, setIntersecting] = useState();
    useEffect(() => {
    const observer = new IntersectionObserver(entries => {
        const entry = entries[0];
        setIntersecting(entry.isIntersecting);
    });
    observer.observe(ref1.current);
    }, [isIntersecting]);

    useEffect(() => {
    if (isIntersecting) {
        ref1.current.querySelectorAll("div").forEach(el => {
        el.classList.add("reveal");
        });
    } else {
        ref1.current.querySelectorAll("div").forEach(el => {
        el.classList.remove("reveal");
        });
    }
    }, [isIntersecting]);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
            }
        }, 3000)
        
        return () => clearInterval(intervalId);
    }, [currentIndex])

    return (
        <div className="Row" ref={ref1}>
            <div className="App-header">
                <p>Hello,</p>
                <p>I'm Kelly Zhou!</p>
            </div>
            <div className="Header-container" >
                <div className="Dot reveal">
                    <p>{text[currentIndex]}</p>
                    <img className={classes[currentIndex]} src={images[currentIndex]} alt={images[currentIndex]}></img>
                </div>
                
            </div>
        </div>
    )
}

export default Row;