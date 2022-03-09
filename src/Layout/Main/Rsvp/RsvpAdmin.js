import React, { useEffect, useState } from 'react'
import RsvpIndividual from './RsvpIndividual'
import RsvpList from './RsvpList'
import RsvpAdd from './RsvpAdd'
import { GetList, RemovePerson, EditInvite } from '../../../Data/Database'
import { Button } from '../../Common/Static'

export default function RsvpAdmin(props) {
  const [individual, setIndividual] = useState(false)
  const [selected, setSelected] = useState({})
  const [list, setList] = useState([])
  const [openForm, setOpenForm] = useState(false)
  const [removeError, setRemoveError] = useState('')
  const [serverError, setServerError] = useState(false)
  const [display, setDisplay] = useState([])

  function toggleList() {
    setIndividual(!individual)
  }
  function toggleForm() {
    setOpenForm(!openForm)
  }

  function copyEmails() {
    let emailListSting = ''
    list.forEach((person) => {
      emailListSting = emailListSting + ' ' + person.email
    })
    navigator.clipboard.writeText(emailListSting)
  }

  function removePerson(person) {
    RemovePerson(person, props.auth)
      .then((data) => {
        if (data.statusCode === 203) {
          setRemoveError(person.name)
        } else {
          setIndividual(false)
          let newList = list.filter(
            (listPerson) => listPerson.name !== data.data
          )
          setList(newList)
          setDisplay(newList)
        }
      })
      .catch(() => {
        setServerError(true)
      })
  }
  function addPerson(person) {
    list.push(person)
    setDisplay(list)
    setList(list)
  }

  function editPerson(oldName, newName) {
    EditInvite(newName, oldName, props.auth)
      .then(() => {
        let newList = list.map((invite) => {
          if (invite.name === oldName) {
            invite.name = newName
            return invite
          }
          return invite
        })
        setList(newList)
        setDisplay(newList)
        setIndividual(false)
      })
      .catch(() => {
        setServerError(true)
      })
  }

  function filterList(regex) {
    let newList = list.filter((person) =>
      person.name.toLowerCase().replace(/\s/g, '').match(regex)
    )
    if (newList.length) {
      setDisplay(newList)
    }
  }

  useEffect(() => {
    GetList(props.auth)
      .then((data) => {
        setList(JSON.parse(data.data))
        setDisplay(JSON.parse(data.data))
      })
      .catch((err) => {
        console.log('Error :', err)
      })
  }, [props.auth])

  return (
    <>
      <h2>{openForm ? 'Add Rsvp' : individual ? 'Rsvp' : 'Rsvp List'}</h2>
      <div className='rsvpadmin'>
        {removeError !== '' ? <p>{removeError} does not exist</p> : null}
        {serverError ? <p>There is a server error</p> : null}
        {openForm ? (
          <RsvpAdd
            auth={props.auth}
            toggleForm={toggleForm}
            addPerson={addPerson}
          />
        ) : individual ? (
          <RsvpIndividual
            auth={props.auth}
            toggleList={toggleList}
            selected={selected}
            removePerson={removePerson}
            editPerson={editPerson}
          />
        ) : (
          <RsvpList
            setSelected={setSelected}
            list={display}
            toggleList={toggleList}
            filterList={filterList}
          />
        )}
        {openForm || individual ? null : (
          <>
            <Button
              text='Add Invite'
              clickAction={toggleForm}
              className='addInviteButton'
            />
            <Button
              text='Copy Emails'
              clickAction={copyEmails}
              className='copyEmails'
            />
          </>
        )}
      </div>
    </>
  )
}
