import { useState } from 'react'
import { AddInvite } from '../../../Data/Database'
import { Formik, Field, Form } from 'formik'
import { Button } from '../../Common/Static'

export default function RsvpAdd(props) {
  const [nameError, setNameError] = useState(false)
  const [serverError, setServerError] = useState(false)

  return (
    <>
      <Formik
        initialValues={{
          name: '',
        }}
        onSubmit={(values) => {
          AddInvite(values.name, props.auth)
            .then((data) => {
              if (data.status === 203) {
                setNameError(true)
              } else {
                props.addPerson(data.data)
                props.toggleForm()
              }
            })
            .catch((err) => {
              console.log(err)
              setServerError(true)
            })
        }}
      >
        {({ values }) => (
          <Form>
            {nameError ? <p>"{values.name}" already on list</p> : null}
            {serverError ? (
              <p>Server may be down!! Please try again later.</p>
            ) : null}
            <Field
              type='text'
              name='name'
              className='name'
              placeholder='name'
            />
            <Button type='submit' text='Add' className='submitButton' />
            <Button
              text='Back'
              clickAction={props.toggleForm}
              className='backButton'
            />
          </Form>
        )}
      </Formik>
    </>
  )
}
