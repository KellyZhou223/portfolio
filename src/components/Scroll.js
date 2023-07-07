import './App.css';
import {useRef, useEffect, useState} from 'react';

function Scroll() {
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
        ref1.current.querySelectorAll("span, p, img").forEach(el => {
        el.classList.add("reveal");
        });
    } else {
        ref1.current.querySelectorAll("span, p, img").forEach(el => {
        el.classList.remove("reveal");
        });
    }
    }, [isIntersecting]);

    return (
        <div class="Scroll-container">
            <div class="Background first" ref={ref1}>
                <p class="reveal">I am a...</p>
                <span class="Dot reveal">
                    <img class="image1 reveal" src="Headshot.png" alt="Char"></img>
                </span>
            </div>
            <div class="Spacer first"></div>
            <div class="Background second">
                <p>Programmer</p>
                <span class="Dot">
                    <img class="image2" src="Headshot.png" alt="Eevee"></img>
                </span>
            </div>
            <div class="Spacer second"></div>
            <div class="Background third">
                <p>Creator</p>
                <span class="Dot">
                    <img class="image3" src="Headshot.png" alt="Pika"></img>
                </span>
            </div>
        </div>
    )
}

export default Scroll;