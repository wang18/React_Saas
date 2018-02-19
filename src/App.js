import React, {Component} from 'react';
import './App.css';
import img from './img/cafe.jpg';

class App extends Component {
    state = {
        showMap: false
    };

    onClickHandler = e => {
        const {showMap} = this.state;
        this.setState({
            showMap: !showMap
        })
    }

    render() {
        return (
            <div className="wrapper">

                <header>
                    <h1 className="brand">brightside studios inc.</h1>

                    <nav>
                        <ul>
                            <li><a href="#">Why Us?</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Get In Touch</a></li>
                        </ul>
                    </nav>

                </header>

                <section className="feature">
                    <img src={img} alt="pouring a latte"/>
                    
                </section>

                <section className="basic-info">
                    <article className="about">
                        <h4>Brightside, your <em>one-stop coffee shop brand experts</em></h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            <a href="#">Book your roadmapping session today &rarr;</a>
                        </p>
                    </article>

                    <aside className="call-to-action">
                        <h3>The 7 things coffee shop owners need to know before hiring a web designer to build your website.</h3>
                        <button type="button" name="button">Send me the checklist</button>
                    </aside>
                </section>

                <section className="widgets">
                    <h3>What makes your coffee shop stand out</h3>
                    <article className="widget">
                        <h4>Heading</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </article>
                    <article className="widget">
                        <h4>Heading</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </article>
                    <article className="widget">
                        <h4>Heading</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </article>
                </section>

                <footer>
                    &copy;2016 <a href="http://brightsidestudios.ca/">Brightside Studios Inc.</a>
                    <a href="http://codecollege.ca/p/learn-sass/">The SASS Course</a> by Brad Hussey
                </footer>

            </div>
        );
    }
}

export default App;
