import React from 'react'
import { PropBetsContainer, PropBetsHeader, StyledButton, Flex } from '../PropBets/styledComponents'
import BetList from './BetList'
import QrCode from './QrCode'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { deleteBet } from '../../Actions'

const betSlip = (props) => {

    return (
        <Flex column>


            <BetList bet={props.confirmedBets} delete={props.deleteBet} />
            {props.confirmedBets.length === 0 ? <p> Please Place Bet </p> : <QrCode bet={props.confirmedBets} />}


        </Flex>

    )
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, { deleteBet })(betSlip)
