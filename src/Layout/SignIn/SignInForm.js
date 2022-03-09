import { useState } from 'react'
import { CheckAuth } from '../../Data/Database'
import { Formik, Field, Form } from 'formik'
import { Button } from '../Common/Static'

export default function SignInForm(props) {
  const [nameError, setNameError] = useState(false)
  const [serverError, setServerError] = useState(false)

  return (
    <Formik
      initialValues={{
        name: '',
        password: '',
      }}
      onSubmit={(values) => {
        CheckAuth(values.name, values.password)
          .then((data) => {
            if (data.status === 203) {
              setNameError(true)
            } else {
              props.setName(values.name)
              props.setAuth(data.headers['x-amzn-remapped-authorization'])
              props.setResponse(data.data.response)
              props.setEmail(data.data.email)
            }
          })
          .catch(() => {
            setServerError(true)
          })
      }}
    >
      {({ values }) => (
        <Form>
          {nameError ? (
            <p>
              "{values.name}" does not match list of invites, Please try again
            </p>
          ) : null}
          {serverError ? (
            <p>Server may be down!! Please try again later.</p>
          ) : null}
          <Field type='text' name='name' className='name' placeholder='name' />
            <Field
              type='password'
              name='password'
              className='password'
              placeholder='password'
            />
          <Button type='submit' text='Join' className='submitButton' />
        </Form>
      )}
    </Formik>
  )
}
