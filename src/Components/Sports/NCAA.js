import React, { useState, useEffect } from 'react'
import UGameCard from '../Cards/UpcomingGameCard'
import Ticon from '../../Assets/Ticon.png'
import axios from "axios";

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

const NCAA = () => {


    const [gameInfo, setGameInfo] = useState([]);
    const [viewAll, setViewAll] = useState(false);


    //USE THIS TO GET THE GAMES INFO, WHO IS PLAYING AND WHAT TIME THEY ARE PLAYING

    useEffect(() => {
        const getInfo = () => {
            axios
                .get('https://demo0337722.mockable.io/NCAA')
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

                return (gameInfo.ncaa.map(el => <UGameCard gameInfo={el} />))
            } else {

                return (gameInfo.ncaa.slice(0, 3).map(el => <UGameCard gameInfo={el} />));
            }
        } else {

            return <div>loading</div>
        }
    }

    return (

        <Container>
            <Card>
                {toggle()}
            </Card>
            <button onClick={() => setViewAll(!viewAll)}>View {expand()} Games</button>
        </Container>

    )

}



export default NCAA;

