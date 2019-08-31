import React from 'react'

import styled from 'styled-components'
import { colors, buttonSize } from '../Theme/Variables'

const FooterContainer = styled.div`
    width: 100%;
    padding: .5rem;
    text-align: center;
    background: #1A1A1A;
    color: white;

`

const Footer = props => {

    return (
        <FooterContainer>
            <p>Bet Slip Home | Instructions | House Rules | SportsBook Home</p>
            <p>RIVERS CASINO PITTSBURGH</p>
            <p>777 Casino Dr. Pittsburgh, PA 15212</p>
            <p>Gambling Problem? Call 1-800-Gambler</p>
            <p>©2019 Rivers Casino. All rights reserved.</p>
        </FooterContainer>
    )
}

export default Footer
