import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import '../App.css';
import Logo from '../img/EduTech.png';
import AIicon from '../img/brain.png';
import MLicon from '../img/deep-learning.png';
import CLicon from '../img/cloud-computing.png';

class Content extends Component {
    render() {
        return (
                <div>
                    <div className="opening">
                        <div className="main">
                        <img src={Logo}/>
                        <h1>Pelajari berbagai hal di EduTech </h1>
                        
                            <nav className="sidebar">
                                <Router>
                                    <Link to="/AI">
                                        Artificial Intelegence
                                        <img src={AIicon}/>
                                    </Link>
                                    <Link to="/ML">
                                        Machine Learning
                                        <img src={MLicon}/>
                                    </Link>
                                    <Link to="/CC">
                                        Cloud computing
                                        <img src={CLicon}/>
                                    </Link>
                                </Router>
                            </nav>
                        </div>    
                    </div>
                </div>
                )
            }
        }

export default Content;
