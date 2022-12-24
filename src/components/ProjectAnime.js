import React from "react";
import anime from "animejs";
import './ProjectAnime.scss';

const ProjectAnime = () => {
    // const projectDiv = document.createElement('div');
    // const divSquare = document.createElement();
    // const grid = [17, 17];
    // const col = grid[0];
    // const row = grid[1];
    // const numberOfElements = col * row;
    
    // for (let i = 0; i < numberOfElements; i++) {
    //   animeDiv.appendChild(document.createElement('div'));
    // };
    
    // projectDiv.appendChild(fragment);
    
    // const staggersAnimation = anime.timeline({
    //     targets: '.stagger-visualizer div',
    //     easing: 'easeInOutSine',
    //     delay: anime.stagger(50),
    //     loop: true,
    //     autoplay: false
    //   })
    //   .add({
    //     translateX: [
    //       {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'x'}) },
    //       {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'x'}) }
    //     ],
    //     translateY: [
    //       {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'y'}) },
    //       {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'y'}) }
    //     ],
    //     duration: 1000,
    //     scale: .5,
    //     delay: anime.stagger(100, {grid: grid, from: 'center'})
    //   }).add({
    //     translateX: () => anime.random(-10, 10),
    //     translateY: () => anime.random(-10, 10),
    //     delay: anime.stagger(8, {from: 'last'})
    //   })
    //   .add({
    //     translateX: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'x'}),
    //     translateY: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'y'}),
    //     rotate: 0,
    //     scaleX: 2.5,
    //     scaleY: .25,
    //     delay: anime.stagger(4, {from: 'center'})
    //   })
    //   .add({
    //     rotate: anime.stagger([90, 0], {grid: grid, from: 'center'}),
    //     delay: anime.stagger(50, {grid: grid, from: 'center'})
    //   })
    //   .add({
    //     translateX: 0,
    //     translateY: 0,
    //     scale: .5,
    //     scaleX: 1,
    //     rotate: 180,
    //     duration: 1000,
    //     delay: anime.stagger(100, {grid: grid, from: 'center'})
    //   })
    //   .add({
    //     scaleY: 1,
    //     scale: 1,
    //     delay: anime.stagger(20, {grid: grid, from: 'center'})
    //   })

    //   staggersAnimation.play();

    // const randomValues = () => {
    //     anime({
    //         targets: animeBoxes,
    //         translateX: function () {
    //             return anime.random(0, 270);
    //         },
    //         easing: 'easeInOutQuad',
    //         duration: 750,
    //         complete: randomValues
    //     });
    // };
    // randomValues();

    const animeBoxes = document.querySelectorAll('.animeBox');

    anime({
        targets: animeBoxes,
        scale: [
            { value: .1, easing: 'easeOutSine', duration: 3000 },
            { value: 1, easing: 'linear', duration: 3000 }
        ],
        delay: anime.stagger(200, { grid: [14, 12], from: 'center' }),  //delays each square activation
        loop: true,
    })

    return (
        <div className="animeContainer">
            <div className="animeRow">
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
            <div className="animeRow">
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
            <div className="animeRow">
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
            <div className="animeRow">
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
            <div className="animeRow">
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
            <div className="animeRow">
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
            <div className="animeRow">
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
            <div className="animeRow">
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
            <div className="animeRow">
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
            <div className="animeRow">
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
            <div className="animeRow">
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
            <div className="animeRow">
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

        </div>
    );
};

export default ProjectAnime;