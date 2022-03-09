import React from 'react'
import { useState } from 'react'
import { Button } from '../../Common/Static'

export default function RsvpIndividual(props) {
  const [editForm, setEditForm] = useState(false)
  const [newName, setNewName] = useState(props.selected.name)

  function handleChange(event) {
    setNewName(event.target.value)
    event.preventDefault()
  }

  function editInvite(oldName, newName) {
    props.editPerson(oldName, newName)
  }

  return (
    <>
      <div className='individual'>
        {editForm ? (
          <>
            <div className='infoDisplay'>
              <input
                name='name'
                type='text'
                value={newName}
                onChange={(event) => handleChange(event)}
                disabled={false}
              />
              <input name='email' type='text' value={props.selected.email} disabled={true} />
              <input
                name='response'
                type='text'
                value={props.selected.response}
                disabled={true}
              />
              <input
                name='visited'
                type='text'
                value={props.selected.visited}
                disabled={true}
              />
            </div>
            <Button
              text='Save'
              clickAction={() => editInvite(props.selected.name, newName)}
              className='editInvite'
            />
            <Button
              text='Back to List'
              clickAction={() => props.toggleList()}
              className='backButton'
            />
            <Button
              text='Back'
              clickAction={() => setEditForm(false)}
              className='removeInvite'
            />
          </>
        ) : (
          <>
            <div className='infoDisplay'>
              <input name='name' type='text' value={props.selected.name} disabled={true} />
              <input name='email' type='text' value={props.selected.email} disabled={true} />
              <input
                name='response'
                type='text'
                value={props.selected.response}
                disabled={true}
              />
              <input
                name='visited'
                type='text'
                value={props.selected.visited}
                disabled={true}
              />
            </div>
            <Button
              text='Edit Invite'
              clickAction={() => setEditForm(true)}
              className='editInvite'
            />
            <Button
              text='Back to List'
              clickAction={() => props.toggleList()}
              className='backButton'
            />
            <Button
              text='Remove Invite'
              clickAction={() => props.removePerson(props.selected.name)}
              className='removeInvite'
            />
          </>
        )}
      </div>
    </>
  )
}
