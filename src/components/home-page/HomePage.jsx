import React, { useState, useEffect, useRef } from 'react';

import HomeHeader from "./HomeHeader.jsx";
import HomeCarousel from "./HomeCarousel.jsx";
import EventsList from "./EventsList.jsx";
import HomeFooter from './HomeFooter.jsx';

const HomePage = () => {
    const columnSizes = 'col-sm-12 col-md-9 col-lg-7 col-xl-6 p-3';
    const headerRef = useRef(null);
    const [carouselHeight, setCarouselHeight] = useState('100vh');

    useEffect(() => {
        const calculateHeight = () => {
            const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
            const viewportHeight = window.innerHeight;
            const calculatedHeight = viewportHeight - headerHeight;
            setCarouselHeight(`${calculatedHeight}px`);
        };

        calculateHeight();

        window.addEventListener('resize', calculateHeight);

        return () => window.removeEventListener('resize', calculateHeight);
    }, []);

    return (
        <>
            <div ref={headerRef}>
                <HomeHeader commonClassName={columnSizes}/>
            </div>
            <HomeCarousel videoHeight={carouselHeight}/>

            <EventsList commonClassName={columnSizes}/>

            <HomeFooter commonClassName={columnSizes}/>
        </>
    );
};

export default HomePage;