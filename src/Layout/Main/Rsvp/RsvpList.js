import React, { useState } from 'react'
import RsvpListItem from './RsvpListItem'

export default function RsvpList(props) {
  const [search, setSearch] = useState('')

  const list = props.list.map((person) => (
    <RsvpListItem
      person={person}
      key={person.name}
      setSelected={props.setSelected}
      toggleList={props.toggleList}
    />
  ))

  function handleChange(event) {
    let name = event.target.value.toLowerCase().replace(/\s/g, '')
    setSearch(name)
    let reg = new RegExp(`${name}\\w*`, 'g')
    props.filterList(reg)
  }

  return (
    <>
      <input
        className='search'
        type='text'
        valus={search}
        onChange={(event) => handleChange(event)}
        disabled={false}
        placeholder='Search'
      />

      <ul className='rsvpList'>{list}</ul>
    </>
  )
}
