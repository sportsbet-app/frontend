import React, { useState, useEffect } from 'react'
import UGameCard from '../Cards/UpcomingGameCard'
import Ticon from '../../Assets/Ticon.png'
import axios from "axios";
import Loader from 'react-loader-spinner'

import styled from 'styled-components'
import { colors, buttonSize } from '../../Theme/Variables'
import { set } from 'es-cookie';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Card = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

const Button = styled.button`
    background: ${props => props.primary ? `${colors.primary}` : `${colors.primary}`};
    padding: ${props =>
        props.small ? `${buttonSize.small}` : `${buttonSize.medium}`
    }
`

const NFL = props => {


    const [gameInfo, setGameInfo] = useState([]);
    const [viewAll, setViewAll] = useState(false);


    //USE THIS TO GET THE GAMES INFO, WHO IS PLAYING AND WHAT TIME THEY ARE PLAYING

    useEffect(() => {
        const getInfo = () => {
            axios
                .get('http://demo0337722.mockable.io/NFL')
                .then(response => {
                    setGameInfo(response.data);

                })
                .catch(error => {
                    console.error('Server Error', error);
                });
        }

        getInfo();

    }, []);



    // const gameInfo = {nfl: [{imageone: Ticon, imagetwo: Ticon, date:"NOV 2", time: "7:25 PST"}, {imageone: Ticon, imagetwo: Ticon, date:"NOV 2", time: "7:25 PST"}, {imageone: Ticon, imagetwo: Ticon, date:"NOV 2", time: "7:25 PST"}],
    //                   mlb: [], nba: [], ncaa: [], cfl: []};
    const expand = () => {
        if (viewAll) {
            return "Less"
        } else {
            return "ALL"
        }
    }

    const toggle = () => {
        if (gameInfo.length !== 0) {
            if (viewAll) {

                return (gameInfo.nfl.map(el => <UGameCard gameInfo={el} />))
            } else {

                return (gameInfo.nfl.slice(0, 3).map(el => <UGameCard gameInfo={el} />));
            }
        } else {

            return (
                <Loader
                    type="ThreeDots"
                    color={colors.primary}
                    height={80}
                    width={80}
                />
            )
        }
    }

    return (

        <Container>
            <Card>
                {toggle()}
            </Card>
            <Button primary onClick={() => setViewAll(!viewAll)}>View {expand()} Games</Button>
        </Container>

    )

}
export default NFL;
