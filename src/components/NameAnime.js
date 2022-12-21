import React from "react";
import anime from "animejs";
import svgPath from './name-path.svg';
import './NameAnime.scss';

const NameAnime = () => {

    const svgText = anime({
        targets: svgPath,
        loop: true,  // eventually turn this off
        direction: 'alternate',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 700,
        delay: (el, i) => { return i * 500 }
      });

    return (
        
    );
};

export default NameAnime;