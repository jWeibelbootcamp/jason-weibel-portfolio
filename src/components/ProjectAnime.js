import React from "react";
import anime from "animejs";
import './ProjectAnime.scss';

const ProjectAnime = () => {
    const animeBoxes = document.querySelectorAll('.animeBox');
    
    anime({
        targets: animeBoxes,
        scale: [
            {value: .1, easing: 'linear', duration: 3000},
            {value: 1, easing: 'linear', duration: 3000}
        ],
        delay: anime.stagger(200, {grid: [14, 12], from: 'center'}),  //delays each square activation
        loop: true
    })
    
    return (
        <div className="animeContainer">
            {/* 1 */}
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            {/* 2 */}
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            {/* 3 */}
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            {/* 4 */}
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            {/* 5 */}
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            {/* 6 */}
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            {/* 7 */}
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            {/* 8 */}
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            {/* 9 */}
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            {/* 10 */}
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            {/* 11 */}
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            {/* 12 */}
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>
            <div className="animeBox"></div>

        </div>
    );
};

export default ProjectAnime;