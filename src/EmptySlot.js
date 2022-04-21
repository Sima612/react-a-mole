import {useEffect} from "react";
import molehill from './molehill.png'

function EmptySlot(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30%'}}
            src={molehill}
            onClick={props.moleBopped} />
        </div>
    )
}

export default EmptySlot