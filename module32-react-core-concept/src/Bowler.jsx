import { useState } from "react"

export default function Bowler(){

    const bowlerStyle = {
        border: '2px solid gray',
        borderRadius: '20px',
        margin: '20px',
        padding: '20px',
        boxShadow: '2px 2px 4px white'
    }

    const [ball, setBall] = useState(0);
    const [over, setOver] = useState(0);

    const handleBall = () =>{
        const updateBall = ball + 1;
        
        if(updateBall > 6){
            const countOver = over + 1;
            setOver(countOver);
            setBall(1);
        }
        else{
            setBall(updateBall);
        }
    }
    return(
        <div style={bowlerStyle}>
            <h2>Ball: {ball}</h2> 
            <h3>Over: {over}</h3>
            {
                ball >= 6 && <p>Your over completed</p> 
            }
            <button onClick={handleBall}>Ball</button>
        </div>
    )
}