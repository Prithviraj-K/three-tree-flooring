import React from 'react';
import Header from '../Header/Header';
import HeaderLinks from '../Header/HeaderLinks';

const logoBlack = require ('../../assets/img/logo-black-large.png');

const Docs = () => {
    return (
        <div>
            <Header
                rightLinks={<HeaderLinks />}
                fixed
                color="white"
                logoC={logoBlack}
            />
            
        </div>
    );
}

export default Docs;