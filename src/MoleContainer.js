import {useState} from "react";
import EmptySlot from "./EmptySlot";
import Mole from "./Mole";

function MoleContainer(props) {
    let [displayMole, setDisplayMole] = useState(false)

    const moleBopped = () => {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }

    let mole = displayMole ? 
        <Mole setScore={props.setScore}
        toggle={setDisplayMole}
        moleBopped={moleBopped} /> :
        <EmptySlot toggle={setDisplayMole} />
    
    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {mole}
        </div>
    )
}

export default MoleContainer