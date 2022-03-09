import React from 'react'
import { Button } from '../../Common/Static'

export default function RsvpClosed(props) {
  return (
    <>
      <h2>RSVP</h2>
      <div className='formClosed'>
        <p className='note'>Thank you for responding.</p>
        <Button
          text='Change RSVP'
          clickAction={() => props.toggleForm()}
          className='changeButton'
        />
      </div>
    </>
  )
}
