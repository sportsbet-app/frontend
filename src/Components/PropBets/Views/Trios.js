import React, { useState } from 'react'
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt, faUser, faChartLine } from '@fortawesome/free-solid-svg-icons'

import { statTypeOption, playerOptions, statOptions } from '../../../Assets/DummyData'
import { Descriptor, Flex, StyledButton, CountDisplay } from '../styledComponents'

const Trios = props => {
    const [count, setCount] = useState(0)
    const [statType, setStatType] = useState(statTypeOption[0])
    const [selectedOption, setSelectedOption] = useState(null)
    const [playerOneSelection, setPlayerOneSelection] = useState(null)
    const [playerTwoSelection, setPlayerTwoSelection] = useState(null)
    const [playerThreeSelection, setPlayerThreeSelection] = useState(null)

    const clearOptions = _ => {
        setCount(0)
        setSelectedOption(null)
        setPlayerOneSelection(null)
        setPlayerTwoSelection(null)
        setPlayerThreeSelection(null)
    }
    const displayBetSlip = () => {
        const container = document.getElementById('wrap')
        if (container.className.length !== 0) {
            container.classList.toggle('wrapper')
        }

    }

    const rotate = <FontAwesomeIcon icon={faSyncAlt} />
    const player = <FontAwesomeIcon icon={faUser} />
    const stat = <FontAwesomeIcon icon={faChartLine} />

    return (

        <>

            <Flex column>

                <Select
                    className='ninety third'
                    value={playerOneSelection}
                    onChange={(sel) => setPlayerOneSelection(sel)}
                    options={playerOptions}
                    isSearchable={true}
                    placeholder={player}

                />

                <i onClick={() => {
                    setPlayerOneSelection(playerTwoSelection)
                    setPlayerTwoSelection(playerOneSelection)
                }}>{rotate}</i>

                <Select
                    className='ninety third'
                    value={playerTwoSelection}
                    onChange={(sel) => setPlayerTwoSelection(sel)}
                    options={playerOptions}
                    isSearchable={true}
                    placeholder={player}

                />

                <i onClick={() => {
                    setPlayerTwoSelection(playerThreeSelection)
                    setPlayerThreeSelection(playerTwoSelection)
                }}>{rotate}</i>

                <Select
                    className='ninety third'
                    value={playerThreeSelection}
                    onChange={(sel) => setPlayerThreeSelection(sel)}
                    options={playerOptions}
                    isSearchable={true}
                    placeholder={player}

                />

            </Flex>

            <Descriptor>In order of most</Descriptor>

            <Flex>

                <Select
                    className='ninety'
                    value={selectedOption}
                    onChange={(sel) => setSelectedOption(sel)}
                    options={statOptions}
                    isSearchable={true}
                    placeholder={stat}

                />

            </Flex>

            <CountDisplay>
                <p>{count}</p>
                <Select
                    value={statType}
                    onChange={(sel) => setStatType(sel)}
                    options={statTypeOption}
                    isSearchable={true}

                />
            </CountDisplay>

            <Flex spaceAJ>
                <StyledButton
                    primary active={!selectedOption && !playerOneSelection && !playerTwoSelection && !playerThreeSelection}
                    onClick={clearOptions}>Clear</StyledButton>
                <StyledButton
                    primary active={!selectedOption || !playerOneSelection || !playerTwoSelection || !playerThreeSelection}
                    disabled={!selectedOption || !playerOneSelection || !playerTwoSelection || !playerThreeSelection}
                    onClick={() => {
                        props.setBetSlip({
                            count, selectedOption, playerOneSelection, playerTwoSelection, playerThreeSelection,
                            playerCount: 3
                        })
                        clearOptions()
                        displayBetSlip()
                    }}>Send To Betslip</StyledButton>
            </Flex>

        </>

    )

}
export default Trios
