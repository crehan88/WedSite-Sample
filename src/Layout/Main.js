import React from 'react'
import Wedding from './Main/Wedding'
import { PAGES } from '../Constants'
import RSVP from './Main/RSVP'
import Travel from './Main/Travel'

function Main(props) {
  return (
    <div className='main'>
      {props.screen === PAGES.RSVP ? (
        <RSVP
          name={props.name}
          email={props.email}
          setEmail={props.setEmail}
          auth={props.auth}
          setResponse={props.setResponse}
          response={props.response}
        />
      ) : props.screen === PAGES.WEDDING ? (
        <Wedding />
      ) : props.screen === PAGES.TRAVEL ? (
        <Travel />
      ) : null}
    </div>
  )
}

export default Main
