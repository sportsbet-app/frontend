import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChartLine } from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select'

import { statOptions, playerOptions, statTypeOption } from '../../../Assets/DummyData'
import { StyledButton, Descriptor, Flex, CountDisplay, CountSet } from '../styledComponents'
import DecimalToFraction from '../../../Utils/DecimalToFraction'

const Stats = props => {

    const [count, setCount] = useState(0)
    const [selectedOption, setSelectedOption] = useState(null)
    const [statType, setStatType] = useState(statTypeOption[0])
    const [playerSelectedOption, setPlayerSelectedOption] = useState(null)
    const [prop, setProp] = useState('AT_LEAST')

    const clearOptions = _ => {
        setCount(0)
        setSelectedOption(null)
        setPlayerSelectedOption(null)
    }
    const displayBetSlip = () => {
        const container = document.getElementById('wrap')
        if (container.className.length !== 0) {
            container.classList.toggle('wrapper')
        }

    }

    const stat = <FontAwesomeIcon icon={faChartLine} />
    const player = <FontAwesomeIcon icon={faUser} />

    return (

        <>

            <Flex>
                <Select
                    className='ninety'
                    value={playerSelectedOption}
                    onChange={(sel) => setPlayerSelectedOption(sel)}
                    options={props.players}
                    isSearchable={true}
                    placeholder={player}

                />
            </Flex>

            <Descriptor>Will Have</Descriptor>

            <Flex>
                <StyledButton
                    third small primary first
                    active={prop === 'AT_LEAST'}
                    onClick={() => setProp('AT_LEAST')}
                >AT LEAST</StyledButton>
                <StyledButton
                    third small primary middle
                    active={prop === 'OVER'}
                    onClick={() => setProp('OVER')}
                >OVER</StyledButton>
                <StyledButton
                    third small primary last
                    active={prop === 'UNDER'}
                    onClick={() => setProp('UNDER')}
                >UNDER</StyledButton>
            </Flex>

            <Flex spaceAJ>
                <CountSet>
                    <p>{count}</p>
                    <StyledButton
                        onClick={() => count > 0 ? setCount(count - 1) : setCount(0)}
                        half small middle>-</StyledButton>
                    <StyledButton
                        onClick={() => setCount(count + 1)}
                        half small middle>+</StyledButton>
                </CountSet>

                <CountDisplay>
                    <p>{
                        statType.value === 'american' ?
                            count * 200 : statType.value === 'decimal' ?
                                count * 2 :
                                `${DecimalToFraction(count).display}`
                    }</p>
                    <Select
                        value={statType}
                        onChange={(sel) => setStatType(sel)}
                        options={statTypeOption}
                        isSearchable={true}
                        required={true}
                    />
                </CountDisplay>
            </Flex>

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

            <Flex spaceAJ>
                <StyledButton primary active={!count && !selectedOption && !playerSelectedOption} onClick={clearOptions}>Clear</StyledButton>
                <StyledButton
                    primary active={!selectedOption || !playerSelectedOption || !count}
                    disabled={!selectedOption || !playerSelectedOption}
                    onClick={() => {
                        props.setBetSlip({
                            count, selectedOption, playerSelectedOption, prop,
                            playerCount: 1
                        })
                        clearOptions()
                        displayBetSlip()
                    }
                    }>Send To Betslip</StyledButton>
            </Flex>

        </>

    )

}

export default Stats
