import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Form as FinalForm, Field } from 'react-final-form'
import validator from 'validator'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  // Placeholder submission
  onSubmit = async (values) => {
    await this.sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }

  validate = (values) => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Email Required'
    } else if (!validator.isEmail(values.email.trim())) {
      errors.email = 'Invalid Email'
    }
    if (!values.message) {
      errors.message = 'Message Required'
    } else if (values.message.trim().length < 25) {
      errors.message = 'Must be at least 25 characters'
    }
    return errors
  }

  render() {
    return (
      <section>
        <Container className='d-flex flex-column justify-content-center align-items-center'>
          <h1 className='mb-5'>Contact Us</h1>
          <FinalForm
            onSubmit={this.onSubmit}
            validate={this.validate}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <Form onSubmit={handleSubmit} id='login-form' className='w-100'>
                <p>
                  Have questions or feedbacks, or need to get in touch with us?
                  Use the form below.
                </p>
                <Field name='email'>
                  {({ input, meta }) => (
                    <Form.Group>
                      <Form.Control
                        {...input}
                        type='email'
                        placeholder='Email'
                        className='custom-input'
                      />
                      <Form.Text className='small text-danger'>
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </Form.Text>
                    </Form.Group>
                  )}
                </Field>
                <Field name='message' component='textarea'>
                  {({ input, meta }) => (
                    <Form.Group>
                      <Form.Control
                        {...input}
                        as='textarea'
                        placeholder='Message'
                        className='custom-input'
                      />
                      <Form.Text className='small text-danger'>
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </Form.Text>
                    </Form.Group>
                  )}
                </Field>
                <Button
                  variant='primary'
                  className='mt-3'
                  type='submit'
                  block
                  disabled={submitting}
                >
                  SEND
                </Button>
              </Form>
            )}
          />
        </Container>
      </section>
    )
  }
}

export default Contact
