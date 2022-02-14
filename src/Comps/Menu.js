import React from 'react';

const Menu = ({changeState}) => {
    return (
        <div className="App j-center a-center d-flex">

            <div className="button" onClick={() => changeState(2)}>Start Game</div>

        </div>
    );
};

export default Menu;