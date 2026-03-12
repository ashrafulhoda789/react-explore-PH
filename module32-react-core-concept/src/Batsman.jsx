import { useState } from "react"

export default function Batsman(){

    const [score, setScore] = useState(0);

    const [sixes, setSixes] = useState(0);

    const handleSingle = () =>{
        const updatedRuns = score + 1;
        setScore(updatedRuns);
    }

    const handleFour = () =>{
        const updateFour = score + 4;
        setScore(updateFour);
    }

    const handleSix = () =>{
        const updateSix = score + 6;
        const countSix = sixes + 1;
        setSixes(countSix);
        setScore(updateSix);
    }
    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <p><small>Six: {sixes}</small></p>
            {
                score > 50 && <p>You hit Half Century</p>
            }
            <h1>Score: {score}</h1>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}