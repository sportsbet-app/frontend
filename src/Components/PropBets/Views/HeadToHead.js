import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChartLine, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select'

import { statOptions, playerOptions, statTypeOption } from '../../../Assets/DummyData'
import { StyledButton, Descriptor, Flex, CountDisplay } from '../styledComponents'

const HeadToHead = props => {
    const [count, setCount] = useState(0)
    const [statType, setStatType] = useState(statTypeOption[0])
    const [selectedOption, setSelectedOption] = useState(null)
    const [playerOneSelection, setPlayerOneSelection] = useState(null)
    const [playerTwoSelection, setPlayerTwoSelection] = useState(null)


    const clearOptions = _ => {
        setCount(0)
        setSelectedOption(null)
        setPlayerOneSelection(null)
        setPlayerTwoSelection(null)
    }

    const rotate = <FontAwesomeIcon icon={faSyncAlt} />
    const player = <FontAwesomeIcon icon={faUser} />
    const stat = <FontAwesomeIcon icon={faChartLine} />

    return (

        <>

            <Flex column>

                <Select
                    className='ninety'
                    placeholder={player}
                    value={playerOneSelection}
                    onChange={(sel) => setPlayerOneSelection(sel)}
                    options={props.players}
                    isSearchable={true}
                    theme={theme => ({
                        ...theme,
                        borderRadius: 0,
                    })}

                />

                <Flex >
                    <i style={{ marginRight: '2rem' }} onClick={() => {
                        setPlayerOneSelection(playerTwoSelection)
                        setPlayerTwoSelection(playerOneSelection)

                    }}>{rotate}</i>
                    <Descriptor>Will have more than</Descriptor>
                </Flex>

                <Select
                    className='ninety'
                    placeholder={player}
                    value={playerTwoSelection}
                    onChange={(sel) => setPlayerTwoSelection(sel)}
                    options={props.players}
                    isSearchable={true}
                    theme={theme => ({
                        ...theme,
                        borderRadius: 0,
                    })}

                />

            </Flex>

            <Flex>

                <Select
                    className='ninety'
                    placeholder={stat}
                    value={selectedOption}
                    onChange={(sel) => setSelectedOption(sel)}
                    options={statOptions}
                    isSearchable={true}
                    theme={theme => ({
                        ...theme,
                        borderRadius: 0,
                    })}

                />

            </Flex>

            <CountDisplay>
                <p>{count}</p>
                <Select
                    value={statType}
                    onChange={(sel) => setStatType(sel)}
                    options={statTypeOption}
                    isSearchable={true}
                    theme={theme => ({
                        ...theme,
                        borderRadius: 0,

                    })}

                />
            </CountDisplay>

            <Flex spaceAJ>
                <StyledButton
                    primary active={!selectedOption && !playerOneSelection && !playerTwoSelection}
                    onClick={clearOptions}>Clear</StyledButton>
                <StyledButton
                    primary active={!selectedOption || !playerOneSelection || !playerTwoSelection}
                    disabled={!selectedOption || !playerOneSelection || !playerTwoSelection}
                    onClick={() => {
                        props.setBetSlip({
                            count, selectedOption, playerOneSelection, playerTwoSelection,
                            playerCount: 2
                        })
                        clearOptions()
                    }}>Send To Betslip</StyledButton>
            </Flex>

        </>

    )

}
export default HeadToHead
