import React from 'react'
import Bet from './Bet'
import styled from 'styled-components'

// const List = styled.div`
// border: 1px solid red;
// `

//export betlist function with props passed down from Bet Slip 
export default function betList(props) {
    return (
        <div>
            {props.bet && props.bet.map((bet, index) => <Bet bet={bet} key={index} id={index} delete={props.delete} />)}
        </div>
    )
}
