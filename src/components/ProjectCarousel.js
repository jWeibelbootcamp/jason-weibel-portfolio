import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel = () => {
    return (
        <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={120} totalSlides={6} >
            <Slider>
                <Slide index={0}>Slide 1</Slide>
                <Slide index={1}>Slide 2</Slide>
                <Slide index={2}>Slide 3</Slide>
                <Slide index={3}>Slide 4</Slide>
                <Slide index={4}>Slide 5</Slide>
                <Slide index={5}>Slide 6</Slide>
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
    );
};

export default Carousel;