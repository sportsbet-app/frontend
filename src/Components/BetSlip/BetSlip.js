import React from 'react'

//import the styling
import { PropBetsContainer, PropBetsHeader, StyledButton, Flex } from '../PropBets/styledComponents'
import styled from 'styled-components'

//import components
import BetList from './BetList'
import QrCode from './QrCode'

//import actions and state
import { connect } from 'react-redux'
import { deleteBet } from '../../Actions'

//functional component using props passed from global state/redux
const BetSlip = (props) => {

  return (
    <Flex column>
      <BetList bet={props.confirmedBets} delete={props.deleteBet} />
      //ternary for if you have made bets or not, if not ask to make a bet
      {props.confirmedBets.length === 0 ? <p> Please Place Bet </p> : <QrCode bet={props.confirmedBets} />}
    </Flex>
  )
}

//grab the state from the connect
const mapStateToProps = state => ({ ...state })

//export the file while also importing the delete function
export default connect(mapStateToProps, { deleteBet })(BetSlip)
