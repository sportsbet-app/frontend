import React from 'react'
import { PropBetsContainer, PropBetsHeader, StyledButton, Flex } from '../PropBets/styledComponents'
import BetList from './BetList'
import QrCode from './QrCode'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { deleteBet } from '../../Actions'

const betSlip = (props) => {

    return (
        <PropBetsContainer>

            <PropBetsHeader>BetSlip</PropBetsHeader>
            <BetList bet={props.confirmedBets} delete={props.deleteBet} />
            {props.confirmedBets.length === 0 ? <p> Please Place Bet </p> : <QrCode bet={props.confirmedBets} />}
        </PropBetsContainer>

    )
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, { deleteBet })(betSlip)
