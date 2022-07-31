import React from 'react'
import styled from 'styled-components'
import { useForm, ValidationError } from '@formspree/react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Bg } from './articles'
import { SectionText } from '../components/Section'
import { Link } from 'gatsby'
import { BtnPrimary } from '../components/Buttons'

const Links = styled(Link)`
  color: ${(props) => props.theme.accentDark};
  text-decoration: underline;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  max-width: 450px;

  input,
  textarea {
    font-family: Roboto, sans-serif;
    font-size: 1.2rem;
    border-radius: 8px;
    padding: 10px 10px;
    border: 1px solid #ccc;
  }
  *::placeholder {
    font-size: 1.2rem;
    color: #777;
    font-style: italic;
  }
`

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mpznapjo')
  if (state.succeeded) {
    return (
      <Layout>
        <Bg>
          <SectionText heading={'Success!'}>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
              Thanks for contacting Midway Driving Schools. We will get back to
              you as soon as possible.
              <br />
              While you're waiting take a peak at our{' '}
              <Links to="/#faq">Frequently Asked questions</Links>
            </p>
          </SectionText>
        </Bg>
      </Layout>
    )
  }
  return (
    <Layout>
      <SEO title={'Contact Midway Driving Schools'} />
      <Bg>
        <SectionText heading={'Contact MDS'}>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            Have a question? We've got answers.
            <br />
            Leave a message by filling out the contact form below.
            <br />
            <br />
            If you haven't taken a peak yet, see our{' '}
            <Links to="/#faq">FAQs</Links>.
          </p>
          <form onSubmit={handleSubmit}>
            <ValidationError
              style={{
                color: 'red',
                fontSize: '1.2rem',
                marginBottom: '1rem',
                padding: '10px 15px',
                color: '#b50c0c',
                borderRadius: '10px',
                background: 'rgba(255,0,0,.05)',
                // border: '1px solid #b50c0c',
                display: 'inline-block'
              }}
              errors={state.errors}
            />
            <Label>
              <input
                id="name"
                type="name"
                name="name"
                required
                placeholder="Name"
              />
            </Label>
            <Label>
              <input
                id="phone"
                type="phone"
                name="phone"
                required
                placeholder="Phone"
              />
            </Label>
            <Label>
              <input id="email" type="email" placeholder="Email" />
            </Label>
            <ValidationError
              prefix="Email"
              name="email"
              field="email"
              errors={state.errors}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <Label>
              <textarea
                rows="4"
                id="message"
                name="message"
                required
                placeholder="Hi! I have a question about..."
              />
            </Label>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <BtnPrimary type="submit" disabled={state.submitting}>
              Submit
            </BtnPrimary>
            <br />
          </form>
        </SectionText>
      </Bg>
    </Layout>
  )
}
