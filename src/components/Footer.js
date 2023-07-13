import './App.css';
import {useRef, useEffect, useState} from 'react';
import emailjs from '@emailjs/browser';

function Footer() {
    const ref = useRef();
    const [isIntersecting, setIntersecting] = useState();
    useEffect(() => {
    const observer = new IntersectionObserver(entries => {
        const entry = entries[0];
        setIntersecting(entry.isIntersecting);
    });
    observer.observe(ref.current);
    }, [isIntersecting]);

    useEffect(() => {
    if (isIntersecting) {
        ref.current.querySelectorAll("form, h1").forEach(el => {
        el.classList.add("reveal");
        });
    } else {
        ref.current.querySelectorAll("form, h1").forEach(el => {
        el.classList.remove("reveal");
        });
    }
    }, [isIntersecting]);

    const form = useRef();
    const sendEmail = e => {
    e.preventDefault();
    emailjs.sendForm('service_xdforqo', 'template_es426uy', form.current, 'SRfBUFTvlGSuTD8YL').then(result => {
        console.log(result.text);
        form.current.reset();
    }, error => {
        console.log(error.text);
    });
    };

    return (
        <div className="Footer">
            <div className="Contact" id="Contact" ref={ref}>
                <h1 className="">Contact</h1>
                <form id="contact" onSubmit={sendEmail} ref={form}>
                    <label>Name* </label>
                    <input type="text" name="user_name" placeholder="Your name" required></input><br></br>
                    <label>Email* </label>
                    <input type="email" name="user_email" placeholder="Your email" required></input><br></br>
                    <label>Message* </label>
                    <textarea name="message" placeholder="Hey Kelly, let's connect!" required></textarea><br></br>
                    <input type="submit" value="Send"></input>
                </form>
            </div>
            <div className="Footer">
                <div className="Footer-spacer"></div>
                <div className="Footer-links">
                    <div>
                        <ul><a href="#Home">Home</a></ul>
                        <ul><a href="#About">About</a></ul>
                        <ul><a href="#Projects">Projects</a></ul>
                        <ul><a href="#Contact">Contact</a></ul>
                    </div>
                    <div>
                        <ul><a href="https://www.linkedin.com/in/kellyzhou223/">Linkedin</a></ul>
                        <ul><a href="https://github.com/KellyZhou223">Github</a></ul>
                        <ul><a href="mailto: kellyzhou223@gmail.com">Email</a></ul>
                    </div>
                </div>
                <p>©2023 Kelly Zhou</p>
            </div>
        </div>
    )
}

export default Footer;