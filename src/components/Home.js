import React from "react";
import Anime from "animejs";
import Tree from "../images/pixelTree.png";
import './Home.scss';

const Home = () => {
    let treeAnime = {};
    treeAnime.opacityIn = [0, 1];
    treeAnime.scaleIn = [0.2, 1];
    treeAnime.delay = 500;

    let nameAnime = {};
    nameAnime.opacityIn = [0, 1];
    nameAnime.scaleIn = [0.2, 1];
    nameAnime.delay = 500;

    let titleAnime = {};
    titleAnime.opacityIn = [0, 1];
    titleAnime.scaleIn = [0.2, 1];
    titleAnime.delay = 500;

    // basic animation in place - update to zoom in from left and right later.

    const animationRef = React.useRef(null);

    React.useEffect(() => {
        animationRef.current = Anime.timeline({ loop: false })
            .add({
                targets: '.nameAnime .name',
                opacity: nameAnime.opacityIn,
                scale: nameAnime.scaleIn,
                delay: nameAnime.delay
            }).add({
                targets: '.titleAnime .title',
                opacity: titleAnime.opacityIn,
                scale: titleAnime.scaleIn,
                delay: titleAnime.delay
            }).add({
                targets: '.treeAnime .tree',
                opacity: nameAnime.opacityIn,
                scale: nameAnime.scaleIn,
                delay: nameAnime.delay
            })
    });

    return (
        <div>
            <div className="homeContainer">
                <div className="homeBody">
                    <h1 className="nameAnime">
                        <span className="name">Jason Weibel</span>
                    </h1>
                </div>
                <div className="homeBody">
                    <h3 className="titleAnime">
                        <span className="title">Full Stack Web Developer</span>
                    </h3>
                </div>
            </div>

            <div className="treeContainer">
                <img src={Tree} alt="baren tree" style={{position: 'relative', zIndex: -1}}></img>
            </div>
        
        </div>
    );
};

export default Home;