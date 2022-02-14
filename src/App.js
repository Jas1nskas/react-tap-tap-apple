import Menu from "./Comps/Menu";
import Game from "./Comps/Game";
import Shop from "./Comps/Shop";

import './App.css';
import {useState} from "react";


function App() {

    const [getGameState, setGameState] = useState(1)
    const [getPoints, setPoints] = useState(1500)
    const [getClickPoints,setClickPoints] = useState(1)
    const [getCookieIMG,setCookieIMG] = useState("https://www.mobilieji.com/img/m/1.jpg")
    const [getBG,setBG]= useState("white")
    const [getSpinCookie,setCookieSpin]= useState(false)


    function updatePoints() {
        setPoints(getPoints + getClickPoints)
    }

    function buyUpdates(num) {

        if (num === 1){
            if(getPoints >= 200){
                setPoints ( getPoints -200)
                setClickPoints(2)
                setGameState (2)
            }
        }
        if (num === 2){
            if(getPoints >= 500){
                setPoints (getPoints -500)
                setClickPoints(5)
                setGameState (2)
            }
        }

        if (num === 3){
            if(getPoints >= 1000){
                setPoints ( getPoints -1000)
                setClickPoints(10)
                setGameState (2)
            }
        }

        if (num === 4){
            if(getPoints >= 400){
                setPoints ( getPoints -400)
                setCookieIMG ("https://pngshare.com/wp-content/uploads/2021/06/Fake-Apple-Logo-4.png")
                setGameState (2)
            }
        }
        if (num === 5){
            if(getPoints >= 300){
                setPoints ( getPoints -300)
                setBG ("red")
                setGameState (2)
            }
        }

        if (num === 6){
            if(getPoints >= 600){
                setPoints ( getPoints -600)
                setCookieSpin (true)
                setGameState (2)
            }
        }


    }


    return (
        <div className="App" style={{backgroundColor: getBG}}>

            {getGameState === 1 && <Menu changeState={setGameState}/>}
            {getGameState === 2 && <Game changeState={setGameState} spin={getSpinCookie} cookie={getCookieIMG} points={getPoints} addPoints={updatePoints}/>}
            {getGameState === 3 && <Shop changeState={setGameState} upgrade={buyUpdates}/>}


        </div>
    );
}

export default App;
