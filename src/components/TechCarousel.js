import React from "react";
import { Carousel } from "react-carousel3";
import './TechCarousel.scss';
import JSLogo from '../images/tech-logos/jslogo.svg';
import HTMLLogo from '../images/tech-logos/htmllogo.svg';
import CSSLogo from '../images/tech-logos/csslogo.svg';
import ExpressLogo from '../images/tech-logos/expresslogo.png';
import NodeLogo from '../images/tech-logos/nodelogo.svg';
import MongoLogo from '../images/tech-logos/mongodblogo.svg';
import MySQLLogo from '../images/tech-logos/mysqllogo.png';
import ReactLogo from '../images/tech-logos/reactlogo.png';

const TechCarousel = () => (
    <div className="carouselContainer"
        style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
        <Carousel height={200} width={600} xOrigin={300} xRadius={300} yOrigin={80} yRadius={50} autoPlay={true} >
            <div key={1}>
                <img className='techImage' src={JSLogo} alt="Javascript logo" />
            </div>
            <div key={2}>
                <img className='techImage' src={HTMLLogo} alt="HTML logo" />
            </div>
            <div key={3}>
                <img className='techImage' src={CSSLogo} alt="CSS logo" />
            </div>
            <div key={4}>
                <img className='techImage' src={ExpressLogo} alt="Express logo" />
            </div>
            <div key={5}>
                <img className='techImage' src={NodeLogo} alt="NodeJS logo" />
            </div>
            <div key={6}>
                <img className='techImage' src={MongoLogo} alt="MongoDB logo" />
            </div>
            <div key={7}>
                <img className='techImage' src={MySQLLogo} alt="MySQL logo" />
            </div>
            <div key={8}>
                <img className='techImage' src={ReactLogo} alt="react logo" />
            </div>
        </Carousel>
    </div>
);

export default TechCarousel;