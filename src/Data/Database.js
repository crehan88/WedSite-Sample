import axios from 'axios'
import { API, apiKey } from '../Constants'

export function CheckAuth(name, password) {
  return axios({
    headers: {
      'x-api-key': apiKey,
    },
    method: 'POST',
    baseURL: API + 'signin',
    data: {
      name: name,
      password: password,
    },
  })
}

export function Rsvp(rsvp, auth) {
  return axios({
    method: 'POST',
    baseURL: API + 'rsvp',
    headers: {
      authorization: auth,
      'x-api-key': apiKey,
    },
    data: rsvp,
  })
}

export function GetList(auth) {
  return axios({
    method: 'GET',
    baseURL: API + 'getinvites',
    headers: {
      authorization: auth,
      'x-api-key': apiKey,
    },
  })
}

export function AddInvite(invite, auth) {
  return axios({
    method: 'POST',
    baseURL: API + 'addinvite',
    headers: {
      authorization: auth,
      'x-api-key': apiKey,
    },
    data: {
      name: invite,
    },
  })
}

export function RemovePerson(name, auth) {
  return axios({
    method: 'POST',
    baseURL: API + 'removeinvite',
    headers: {
      authorization: auth,
      'x-api-key': apiKey,
    },
    data: name,
  })
}

export function EditInvite(newName, oldName, auth) {
  return axios({
    method: 'POST',
    baseURL: API + 'editinvite',
    headers: {
      authorization: auth,
      'x-api-key': apiKey,
    },
    data: JSON.stringify({
      oldName: oldName,
      newName: newName,
    }),
  })
}

