import './App.css';
import {useRef, useState, useEffect} from 'react'
import Headshot from "./Headshot.png"
import Linkedin from "./Linkedin.jpg"
import Github from "./Github.png"
import Mail from "./Mail.jpg"

function About() {
    const ref = useRef();
    const ref2 = useRef();
    const [isIntersecting, setIntersecting] = useState();
    const [isIntersecting2, setIntersecting2] = useState();

    useEffect(() => {
    const observer = new IntersectionObserver(entries => {
        const entry = entries[0];
        setIntersecting(entry.isIntersecting);
    });
    observer.observe(ref.current);
    }, [isIntersecting]);

    useEffect(() => {
    if (isIntersecting) {
        ref.current.querySelectorAll("h1, p, img").forEach(el => {
        el.classList.add("reveal");
        });
    } else {
        ref.current.querySelectorAll("h1, p, img").forEach(el => {
        el.classList.remove("reveal");
        });
    }
    }, [isIntersecting]);

    useEffect(() => {
    const observer = new IntersectionObserver(entries => {
        const entry = entries[0];
        setIntersecting2(entry.isIntersecting);
    });
    observer.observe(ref2.current);
    }, [isIntersecting2]);

    useEffect(() => {
    if (isIntersecting2) {
        ref2.current.classList.add("reveal");
    } else {
        ref2.current.classList.remove("reveal");
    }
    }, [isIntersecting2]);

    return (
        <div className="About-wrapper">
            <div className="About" id="About" ref={ref}>
                <div>
                    <img className="Profile" src={Headshot} alt="Profile" width="200" height="200"></img>
                </div>
                <div className="Intro-header">
                    <h1 className="">About</h1>
                    <p className="">Hey! I'm Kelly, a computer science student at the University of Michigan who enjoys problem solving and creative expression, 
                    whether it is through dancing to hip-hop choreographies, creating digital art, or designing software applications. Throughout the years, 
                    I have been honing my skills in frontend and backend development, data analytics, as well as project and team management. I hope to use 
                    my experience and passions to develop full-stack solutions that will make an impact on the people around me. Check out some of my past 
                    projects below!
                    </p>
                </div>
            </div>
            <div className="Links" ref={ref2}>
                <a href="https://www.linkedin.com/in/kellyzhou223/">
                    <img src={Linkedin} alt="Linkedin"></img>
                </a>
                <a href="https://github.com/KellyZhou223">
                    <img src={Github} alt="Github"></img>
                </a>
                <a href="mailto: kellyzhou223@gmail.com">
                    <img src={Mail} alt="Linkedin"></img>
                </a>
            </div>
        </div>
    )
}

export default About;