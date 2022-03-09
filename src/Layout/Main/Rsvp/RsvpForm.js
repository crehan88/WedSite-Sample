import React, { useState } from 'react'
import { Rsvp } from '../../../Data/Database'
import { Formik, Field, Form } from 'formik'
import { Button } from '../../Common/Static'

export default function RSVPform(props) {
  const [serverError, setServerError] = useState(false)

  return ( 
    <>
      <h2>RSVP</h2>
      <Formik
        enableReinitialize={true}
        initialValues={{
          email: props.email,
          response: props.response,
        }}
        validate={(values) => {
          const errors = {}
          if (!values.email && values.response === 'yes') {
            errors.email = 'Email Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) &&
            values.email !== ''
          ) {
            errors.email = 'Invalid email address'
          }
          return errors
        }}
        onSubmit={(values) => {
          Rsvp(
            {
              name: props.name,
              email: values.email,
              response: values.response,
            },
            props.auth
          )
            .then((data) => {
              props.setResponse(values.response)
              props.setEmail(values.email)
              props.toggleForm()
            })
            .catch((err) => {
              console.log(err)
              setServerError(true)
            })
        }}
      >
        {({ errors, isSubmitting }) => (
          <Form>
            {serverError ? (
              <p>Server may be down!! Please try again later.</p>
            ) : null}
            {errors.email ? <p>{errors.email}</p> : null}
            <Field
              type='email'
              name='email'
              className='email'
              placeholder='email'
            />
            <label className='question'>Will you be attending?</label>
            <Field className='response' as='select' name='response'>
              <option value='maybe'>Maybe</option>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </Field>
            <Button type='submit' text='RSVP' disabled={isSubmitting} className="submitButton"/>
          </Form>
        )}
      </Formik>
    </>
  )
}
