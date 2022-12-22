import React from "react";
import Anime from "animejs";
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
            })
    });

    // const namePath = namePaths.querySelectorAll('.path');
    
    // const svgName = Anime({
    //     targets: namePath,
    //     loop: false,
    //     direction: 'alternate',
    //     strokeDashoffset: [Anime.setDashoffset, 0],
    //     easing: 'easeInOutSine',
    //     duration: 500,
    //     delay: (el, i) => { return i * 300 }
    //   });

    return (
        <div>
            <div className="homeContainer">
                <div className="homeBody">
                    <h1 className="nameAnime">
                        <span className="name">Jason Weibel</span>
                        {/* <span>{svgName}</span> */}
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