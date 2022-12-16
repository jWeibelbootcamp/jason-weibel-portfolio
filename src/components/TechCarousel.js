import React from "react";
import { Carousel } from "react-carousel3";

// forced icon size
const style = {
    width: 150,
    height: 175,
};

const TechCarousel = () => (
    <div className="carouselContainer"
        style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
        <Carousel height={200} width={600} xOrigin={340} xRadius={300} yOrigin={80} yRadius={50} autoPlay={true}>
            <div key={1} style={style}>
                <img src="/images/tech-logos/javascript.png" alt="javascript" />
            </div>
            <div key={2} style={style}>
                <img src="/images/tech-logos/react.png" alt="react" />
            </div>
            <div key={3} style={style}>
                <img src="/images/tech-logos/express.jpg" alt="express" />
            </div>
            <div key={4} style={style}>
                <img src="/images/tech-logos/node.svg" alt="node" />
            </div>
            <div key={5} style={style}>
                <img src="/images/tech-logos/mysql.png" alt="mysql" />
            </div>
            <div key={6} style={style}>
                <img src="/images/tech-logos/mongodb.svg" alt="mongodb" />
            </div>
        </Carousel>
    </div>
);

export default TechCarousel;