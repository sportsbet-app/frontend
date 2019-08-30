import styled from 'styled-components'
import { colors } from '../../../Theme/Variables'

const CountSet = styled.div`
    text-align: center;
    font-size: 1.5rem;
    border: 1px solid #ededed;
    border-bottom: none;
    width: 40%;
    ${'' /* border-radius: 5px 5px 0 0; */}
    background: #fff;
`

const CountDisplay = styled.div`
    text-align: center;
    font-size: 1.5rem;
    border: 1px solid #ededed;
    width: 40%;
    ${'' /* border-radius: 5px; */}
    background: #fff;

`

const Selection = styled.div`
    ${'' /* border: 1px solid ${colors.lightGrey}; */}
    padding: .2rem;
    margin: ${props => props.last ? '2.5px 0 25px 0' : '2.5px 0'};
    background: ${colors.secondary};
    display: flex;
    color: whitesmoke;
    align-items: center;
    justify-content: center;
    ${'' /* border-radius: 5px; */}
    width: 100%;
`

const Descriptor = styled.h3`
    color: ${colors.darkGrey};
    text-transform: uppercase;
`

const BetCount = styled.sup`
    font-size: 10px;
    color: ${props => props.hover && !props.active ? colors.secondary : colors.primary};
`

export {
    CountDisplay,
    CountSet,
    Selection,
    Descriptor,
    BetCount
}
