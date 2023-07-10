import './App.css';
import Nav from './Nav.js';
import Row from './Row.js';
import About from './About.js'

function Header() {
    return (
        <div className="Header">
            <Nav />
            <Row />
            <About />
        </div> 
        
    )
}

export default Header;