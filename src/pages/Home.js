import React from "react";
import anime from "animejs";
import Tree from "../images/cherryTree.png";
// import namePaths from "../components/name-paths.svg";
import './Home.scss';

const Home = () => {
    let nameAnime = {};
    nameAnime.opacityIn = [0, 1];
    nameAnime.scaleIn = [0.9, 1];
    nameAnime.delay = 500;

    let titleAnime = {};
    titleAnime.opacityIn = [0, 1];
    titleAnime.scaleIn = [0.9, 1];
    titleAnime.delay = 500;

    const animationRef = React.useRef(null);

    React.useEffect(() => {
        animationRef.current = anime.timeline({ loop: false })
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
                <img src={Tree} alt="cherry tree" style={{position: 'relative', zIndex: -1}}></img>
            </div>
        
        </div>
    );
};

export default Home;