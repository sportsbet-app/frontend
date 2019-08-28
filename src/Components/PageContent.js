import React from 'react'
import PropBets from './PropBets/PropBets'
import BetSlip from './BetSlip/BetSlip'
import styled from 'styled-components'
import { colors, buttonSize } from '../Theme/Variables'
import './PageContent.css';


const PageContentContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  background: #fff;
  padding: 3rem 1rem;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Sidebar = styled.div`
  background: #fff;
  padding: 3rem 1rem;
  display:flex;
  border: 2px solid magenta;
  margin: 0 .5rem;
`
const Content = styled.div`
  background: lightGrey;
  padding: 3rem 1rem;
  display:flex;
  flex-grow: 2;
  max-width: 1200px;
`

const BetBuilder = styled.div`
  background: #fff;
  padding: 3rem 1rem;
  display:flex;
  justify-content: center;
`



const PageContent = (props) => {

  return (

    <PageContentContainer>
      <Content>
        <h2>This is where the main page content will live.</h2>
      </Content>
      <BetBuilder>
        <PropBets />
      </BetBuilder>
    </PageContentContainer>

  )
}

export default PageContent