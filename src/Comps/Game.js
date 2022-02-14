import React from 'react';

const Game = ({points, changeState,cookie,addPoints,spin}) => {
    return (
        <div className="App j-center a-center d-flex">

            <div>
                <img className={spin && "spin"} src={cookie} onClick={addPoints} alt=""/>
                <h1>Points: {points} </h1>
                <div className="button" onClick={() => changeState(3)}>Go to Shop</div>
            </div>


        </div>
    );
};

export default Game;