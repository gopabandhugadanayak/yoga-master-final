import React from 'react';
import { useTitle } from '../../hooks/useTitle';
import Map from './Map/Map';
import PopularClasses from './PopularClasses/PopularClasses';
import Popularsalon from './PopularTeacher/Popularsalon';
import HeroContainer from './Hero/HeroContainer';
import Gallary from './Gallary/Gallary';

const Home = () => {
    useTitle('Home | TrimTrack - Unleashed Your Inner beauty');
    return (
        <section>
            <HeroContainer />
            <div className="max-w-screen-xl mx-auto">
            <Gallary/>
                <PopularClasses />
                
                <Popularsalon />
            </div>
            <Map />
        </section>
    );
};

export default Home;