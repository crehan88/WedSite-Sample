import React from 'react'
import { Button } from '../../Common/Static'

export default function RsvpListItem(props) {
  function pickPerson(person) {
    props.setSelected(person)
    props.toggleList()
  }
  return (
    <li>
      {props.person.response === 'yes' ? (
        <Button
          text={props.person.name}
          clickAction={() => pickPerson(props.person)}
          className='listItemYes'
        />
      ) : props.person.response === 'no' ? (
        <Button
          text={props.person.name}
          clickAction={() => pickPerson(props.person)}
          className='listItemNo'
        />
      ) : props.person.visited !== "" ? (
        <Button
          text={props.person.name}
          clickAction={() => pickPerson(props.person)}
          className='listItemVisited'
        />
      ) : (
        <Button
          text={props.person.name}
          clickAction={() => pickPerson(props.person)}
          className='listItemMaybe'
        />
      )}
    </li>
  )
}
