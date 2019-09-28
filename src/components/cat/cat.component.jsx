import React from 'react';
import catLogo from '../../assets/cat.svg';

const Cat = ({ mouse }) => {
    return (
        <img
            src={catLogo}
            style={{ position: 'absolute', left: mouse.x, top: mouse.y, height: 96, width: 96 }}
            alt="cat"
        />
    );
};

export default Cat;
