import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import axios from 'axios';

import NFL from "../../../Assets/urls"
import TeamContent from "./TeamContent";

const Container = styled.div`
    max-width: 100%;
`

const NFLTeam = () => {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        const getInfo = () => {
            axios
                .get('https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4391')
                .then(response => {
                    setTeams(response.data);

                })
                .catch(error => {
                    console.error('Server Error', error);
                });
        }

        getInfo();
        console.log(teams)
    }, []);

    const toggle = () => {
        if (teams.length !== 0) {
            return teams.teams.map(el => <TeamContent team={el} />)
        } else {
            return <div>loading</div>
        }
    }

    return (
        <Container>
            {toggle()}
        </Container>
    )

}

export default NFLTeam;