import React from "react";
import Loader from 'react-loader-spinner'

import styled from 'styled-components'
import { colors, buttonSize } from '../../../Theme/Variables'

const Container = styled.div`
    max-width: 100%;
`

const LoaderContainer = styled.div`
    margin-top: 3rem;
    text-align: center;
`

const NFLPlayers = () => {

    return (
        <LoaderContainer>
            <Loader
                type="ThreeDots"
                color={colors.primary}
                height={80}
                width={80}
            />
        </LoaderContainer>
    )

}

export default NFLPlayers;