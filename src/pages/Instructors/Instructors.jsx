import React from 'react';
import { useTitle } from '../../hooks/useTitle';
import Showsalons from './All/Showsalons';

const salons = () => {
    useTitle('Salons | TrimTrack - Unleashed Your Inner Self');
    return (
        <section>
            <Showsalons />
        </section>
    );
};

export default salons;