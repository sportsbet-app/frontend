import React from 'react'
import Bet from './Bet'

//export betList function with props passed down from Bet Slip 
export default function BetList(props) {
    return (
        <div>
            {props.bet && props.bet.map((bet, index) => <Bet
                bet={bet}
                key={index}
                id={index}
                delete={props.delete}
            />)}
        </div>
    )
}
