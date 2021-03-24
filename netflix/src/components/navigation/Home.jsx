import React from 'react';

const Home = () => {
    return (
        <div className="Container">
            <section className="header Home-main">
                <div className="title">
                    <h4>Home</h4>
                </div>
                <div className="desc">
                    <p>Some description of home...</p>
                </div>
            </section>
            <section id="movies">
                <ul className="items">
                    <li>
                        <div className="bg-img" style={{backgroundImage: `url("img/cover.jpg")`}}></div>
                        <a href="#">
                            <div className="content">
                                <h2>Orange is the new black</h2>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Home;