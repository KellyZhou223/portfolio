import './App.css';
import Nav from './Nav.js';
import Row from './Row.js';
import Scroll from './Scroll.js'
import About from './About.js'

function Header() {
    return (
        <div className="Header">
            <Nav />
            <Row />
            <Scroll />
            <About />
        </div> 
        
    )
}

export default Header;