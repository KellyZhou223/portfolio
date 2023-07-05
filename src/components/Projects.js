import './App.css'
import Modal from 'react-modal';
import {useState, useEffect} from 'react'

function Projects() {
    Modal.setAppElement(document.body);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpen2, setIsOpen2] = useState(false);
    const [modalIsOpen3, setIsOpen3] = useState(false);
    const [modalIsOpen4, setIsOpen4] = useState(false);
    function openModal() {
    setIsOpen(true);
    }
    function openModal2() {
    setIsOpen2(true);
    }
    function openModal3() {
    setIsOpen3(true);
    }
    function openModal4() {
    setIsOpen4(true);
    }
    function closeModal() {
    setIsOpen(false);
    }
    function closeModal2() {
    setIsOpen2(false);
    }
    function closeModal3() {
    setIsOpen3(false);
    }
    function closeModal4() {
    setIsOpen4(false);
    }

    useEffect(() => {
    if (modalIsOpen || modalIsOpen2 || modalIsOpen3 || modalIsOpen4) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
    });

    const modalStyle = {
    overlay: {
        background: "#F6e5D0"
    }
    };

    return (
        <div className="Projects">
            <div className="Project-spacer"></div>
            <h1 id="Projects">Projects</h1>
            <div className="Project-container first">
                <div className="Project">
                    <h1 className="Project-name">Metrics Farm</h1>
                    <div className="Project-content">
                        <p>Internship project at PNC Financial Services</p>
                        <p>May-Aug 2023</p>
                        <button onClick={openModal}>Details
                            <span className="border border-top"></span>
                            <span className="border border-right"></span>
                            <span className="border border-bottom"></span>
                            <span className="border border-left"></span>
                        </button>
                        <Modal 
                        className="Project-modal"
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={modalStyle}
                        contentLabel="Project Modal">
                            <h1>Metrics Farm</h1>
                            <p>Motivation:</p>
                            <p>Business analysts examine key performance indicators (KPIs) as a quantifiable measure of how the business is performing over time. This often involves analyzing 
                                metrics so the business can gauge whether or not they are on track and devise strategies to reach their long-term goals. Metrics can be divided into various categories, 
                                including functional metrics, operational metrics, and performance metrics. These different metrics are combined in a way that allows the business to achieve 
                                meaningful insights about how they are currently performing.
                            </p>
                            <p>My Role:</p>
                            <p>Over the course of 10 weeks, I worked on a project to implement a system that continuously monitors for functional metrics on PNC's transactional processing procedures. 
                                As a data engineer, I created a tool that takes in a query from a business analyst and populates the database with the metric(s) of interest at a recurring frequency 
                                determined by the analyst. Whenever the metric is added to the database, the analyst receives an alert informing them about where they can view the data. The analyst 
                                could filter the data in different ways, including when the metric was registered or whether there are any anomalies. Then, the analyst would be able to derive insights 
                                regarding trends over time.
                            </p>
                            <p>Tech Stack:
                                <ul>Apache Spark</ul>
                                <ul>Python</ul>
                                <ul>SQL &amp; HiveQL</ul>
                                <ul>Apache Hadoop</ul>
                            </p>
                            <button onClick={closeModal}>X</button>
                        </Modal>
                    </div>
                </div>
                <div className="Project">
                    <h1 className="Project-name">project 2</h1>
                    <div className="Project-content">
                        <p>description 2</p>
                        <button onClick={openModal2}>Details
                            <span className="border border-top"></span>
                            <span className="border border-right"></span>
                            <span className="border border-bottom"></span>
                            <span className="border border-left"></span>
                        </button>
                        <Modal className="Project-modal"
                        isOpen={modalIsOpen2}
                        onRequestClose={closeModal2}
                        style={modalStyle}
                        contentLabel="Project Modal">
                            <h1>Metrics Farm</h1>
                            <button onClick={closeModal2}>X</button>
                        </Modal>
                    </div>
                </div>
            </div>
            <div className="Project-container second">
                <div className="Project">
                    <h1 className="Project-name">project 3</h1>
                    <div className="Project-content">
                        <p>description 3</p>
                        <button onClick={openModal3}>Details<span className="border border-top"></span>
                            <span className="border border-right"></span>
                            <span className="border border-bottom"></span>
                            <span className="border border-left"></span>
                        </button>
                        <Modal className="Project-modal"
                        isOpen={modalIsOpen3}
                        onRequestClose={closeModal3}
                        style={modalStyle}
                        contentLabel="Project Modal">
                            <h1>Metrics Farm</h1>
                            <button onClick={closeModal3}>X</button>
                        </Modal>
                    </div>
                </div>
                <div className="Project">
                    <h1 className="Project-name">project 4</h1>
                    <div className="Project-content">
                        <p>description 4</p>
                        <button onClick={openModal4}>Details
                            <span className="border border-top"></span>
                            <span className="border border-right"></span>
                            <span className="border border-bottom"></span>
                            <span className="border border-left"></span>
                        </button>
                        <Modal className="Project-modal"
                        isOpen={modalIsOpen4}
                        onRequestClose={closeModal4}
                        style={modalStyle}
                        contentLabel="Project Modal">
                            <h1>Metrics Farm</h1>
                            <button onClick={closeModal4}>X</button>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;