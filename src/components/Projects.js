import './App.css'
import Modal from 'react-modal';
import {useState, useEffect} from 'react';

function Projects() {
    Modal.setAppElement(document.getElementById('id'));
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpen2, setIsOpen2] = useState(false);
    const [modalIsOpen3, setIsOpen3] = useState(false);
    const [modalIsOpen4, setIsOpen4] = useState(false);
    const [modalIsOpen5, setIsOpen5] = useState(false);
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
    function openModal5() {
        setIsOpen5(true);
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
    function closeModal5() {
        setIsOpen5(false);
        
    }

    useEffect(() => {
    if (modalIsOpen || modalIsOpen2 || modalIsOpen3 || modalIsOpen4 || modalIsOpen5) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
    });

    const modalStyle = {
    overlay: {
        background: "none",
    }
    };

    return (
        <div className="Projects" id = "id">
            <div className="Project-spacer"></div>
            <div id="Projects" className="Project-header">
                <h1>Projects</h1>
                <button onClick={openModal5} className="Resume">Resume</button>
                <Modal 
                    className="Project-modal resume"
                    isOpen={modalIsOpen5}
                    onRequestClose={closeModal5}
                    style={modalStyle}
                    contentLabel="Project Modal">
                    <iframe src="https://drive.google.com/file/d/132OKNHdpP5wys-xXqOh-fCwkeAwmxVbV/preview" title="Resume" allow="autoplay"></iframe>
                        <button onClick={closeModal5}>X</button>
                </Modal>
            </div>
            <div className="Project-container first">
                <div className="Project">
                    <h1 className="Project-name">Functional Metrics Farm</h1>
                    <div className="Project-content">
                        <p>Internship project with PNC Financial Services</p>
                        <p>May - Aug 2023</p>
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
                            <p>Business analysts examine key performance indicators (KPIs) as a quantifiable measure of how the business is 
                                performing over time. This often involves analyzing metrics so the business can gauge whether or not they are 
                                on track and devise strategies to reach their long-term goals. Metrics can be divided into various categories, 
                                including functional metrics, operational metrics, and performance metrics. These different metrics are combined 
                                in a way that allows the business to achieve meaningful insights about how they are currently performing.
                            </p>
                            <p>My Role:</p>
                            <p>Over the course of 10 weeks, I worked on implementing a system that continuously monitors for functional
                                metrics regarding PNC's transactional processing procedures. As a data engineer, I orchestrate data pipelines to continuously
                                persist metrics data to a centralized database, based on queries submitted by a business analyst. 
                                Whenever a new metric is added to the database, the analyst receives an alert informing them about where they can 
                                view the data. By having the metrics persist to a centralized database, the data could then be consumed in a variety of ways,
                                which include viewing the data from a user interface or other platforms like Tableau. Ultimately, analysts would be able to view metrics
                                data in a more streamlined way, allowing them to discover insights more easily and effectively. 
                            </p>
                            <p>Tech Stack:</p>
                            <ul>
                                <li>Apache Spark</li>
                                <li>Python</li>
                                <li>SQL &amp; HiveQL</li>
                                <li>Apache Hadoop</li>
                            </ul>
                            <button onClick={closeModal}>X</button>
                        </Modal>
                    </div>
                </div>
                <div className="Project">
                    <h1 className="Project-name">Project Heimdall</h1>
                    <div className="Project-content">
                        <p>Year-long project with Riot Games (MDP Program)</p>
                        <p>Jan 2023 - Present</p>
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
                            <h1>Project Heimdall</h1>
                            <button onClick={closeModal2}>X</button>
                            <p>Motivation:</p>
                            <p>As an enterprise like Riot Games continues to grow at a rapid pace, there are increased complexities to the technology
                                and procedures run by the company. These complexities raise more concerns about the susceptibility of internal systems to 
                                external attackers. Information security engineers constantly have to monitor the environment to make sure technical policies
                                are not being violated at any given time. But with the quantity and complexity of policies, it becomes more difficult to 
                                manually monitor every rule. Project Heimdall aims to automate this process of continously monitoring for business policies
                                to ultimately make this process easier for information security engineers.  
                            </p>
                            <p>My Role:</p>
                            <p>As a software engineer, I worked on designing and implementing an extensible security tool that information security
                                engineers could use to view, add, and/or remove business policies, as well as be able to receive alerts whenever
                                a flag is raised due to some unexpected event. 
                            </p>
                            <p>Tech Stack:</p>
                            <ul>
                                <li>Python</li>
                                <li>React.js & TypeScript</li>
                                <li>PostgreSQL</li>
                                <li>AWS (Lambda, S3, RDS)</li>
                            </ul>
                        </Modal>
                    </div>
                </div>
            </div>
            <div className="Project-container second">
                <div className="Project">
                    <h1 className="Project-name">CARLA Driving Simulator</h1>
                    <div className="Project-content">
                        <p>University of Michigan Project Team</p>
                        <p>Jan - Dec 2022</p>
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
                            <h1>CARLA Driving Simulator</h1>
                            <h2>Project Team under the Multidisciplinary Design Program <a href="https://mdp.engin.umich.edu/">(MDP)</a></h2>
                            <button onClick={closeModal3}>X</button>
                            <p>Motivation:</p>
                            <p>Driving simulators are used to assess the safety and usability of motor vehicles. However, driving simulators
                                can be expensive to purchase, too complex to use, or take too long to program. The goal of this project is to 
                                create an easy-to-use, cost-effective driving simulator platform to support human factors research on driver
                                workload, driver distraction, as well as interfaces for partially automated vehicles.
                            </p>
                            <p>My Role:</p>
                            <p>As the student leader of this project team, I oversee operations and project management, ensuring the organization
                                and productivity of the team. Each week, I coordinate the team's standup meetings to assess the team's progress relative
                                to our long-term goals. I also created a project management spreadsheet to help our three subteams keep track of their 
                                tasks and be able to designate subtasks to different members. Additionally, I manage communications with the
                                Multidisciplinary Design Program to prepare for project fairs, design expos, and open labs. I also communicate with 
                                our research faculty mentor weekly to discuss further ways of improving the structure and productivity of our team. 
                            </p>
                            <p>Tools:</p>
                            <ul>
                                <li>CARLA Simulator</li>
                                <li>Python</li>
                                <li>Roadrunner</li>
                                <li>Unreal Engine</li>
                            </ul>
                        </Modal>
                    </div>
                </div>
                <div className="Project">
                    <h1 className="Project-name">Sentiment Analysis</h1>
                    <div className="Project-content">
                        <p>Introduction to Machine Learning</p>
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
                            <h1>Sentiment Analysis</h1>
                            <p>Motivation:</p>
                            <p>The goal of this project was to be able to create a supervised learning model that can accurately classify a 
                                set of Reddit comments based on the emotional tone of the comment. 
                            </p>
                            <p>Skills learned:</p>
                            <ul>
                                <li>Linear Kernel and Quadratic Kernel Support Vector Machines</li>
                                <li>k-fold Cross Validation</li>
                                <li>Asymmetric Cost Functions</li>
                                <li>Feature Engineering</li>
                            </ul>
                            <button onClick={closeModal4}>X</button>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Projects;