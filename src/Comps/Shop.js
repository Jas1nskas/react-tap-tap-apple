import React from 'react';

const Shop = ({changeState,upgrade}) => {
    return (
        <div className="App column j-center a-center d-flex">


            <div>
                <div className="button mb-50" onClick={()=> changeState(2)}>Go Back</div>

                <div className="button" onClick={()=> upgrade(1)}>Click 2x (Price 200)</div>
                <div className="button" onClick={()=> upgrade(2)}>Click 5x (Price 600)</div>
                <div className="button" onClick={()=> upgrade(3)}>Click 10x (Price 1000)</div>
                <div className="button" onClick={()=> upgrade(4)}>Change cookie (Price 400)</div>
                <div className="button" onClick={()=> upgrade(5)}>Change background (Price 300)</div>
                <div className="button" onClick={()=> upgrade(6)}>Cookie spin (Price 600)</div>
            </div>





        </div>
    );
};

export default Shop;