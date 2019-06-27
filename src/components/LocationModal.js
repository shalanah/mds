import React from 'react'
import styled from 'styled-components'

const Modal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: #fff;
  padding: 60px;
  z-index: 1;
  width: 80%;
  border-radius: 10px;
  max-width: 1000px;
  @media only screen and (max-width: 800px) {
    padding: 1rem;
    border-radius: 0;
    height: 100%;
    width: 100%;
    max-width: inherit;
    overflow: auto;
    left: 0px;
    top: 0px;
    transform: translate3d(0, 0, 0) !important;
  }
  h2 {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
    color: #000;
  }
  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: #000;
  }
  h4 {
    color: #000;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  h5 {
    color: #000;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  a {
    color: ${props => props.theme.accentDark};
  }
  table {
    border-collapse: collapse;
    font-weight: 400;
    width: 100%;
    margin-bottom: 1rem;
    font-size: 0.9rem !important;
  }
  table.price {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  table.price td {
    vertical-align: top;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 10px 7px;
  }
  table.price tr:nth-of-type(even) {
    background-color: #f7f7f7;
  }
  table.hours {
    /* font-size: .9rem; */
  }
  table.hours td {
    padding: 4px 0px;
  }
  table.hours td:nth-of-type(even) {
    text-align: right;
  }
  .note {
    line-height: 1.3;
  }
`
const Col = styled.div`
  width: 58%;
  margin-right: 7%;
  float: left;
  @media only screen and (max-width: 800px) {
    display: block;
    width: 100%;
  }
`
const Col2 = styled.div`
  width: 35%;
  float: left;
  @media only screen and (max-width: 800px) {
    margin-top: 0.5rem;
    display: block;
    width: 100%;
  }
`

const Close = styled.div`
  cursor: pointer;
  position: absolute;
  width: 30px;
  height: 30px;
  top: -40px;
  right: 0;
  color: #fff;
  @media only screen and (max-width: 800px) {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 10px;
    right: 10px;
    pointer-events: all;
    z-index: 1000;
    cursor: pointer;
    color: #222;
  }
  :before,
  :after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    top: 50%;
    transform-origin: center;
  }
  :before {
    transform: rotate(-45deg);
  }
  :after {
    transform: rotate(45deg);
  }
`

const rates = {
  main: [
    { elem: '2 Hour Lessons', price: '$175.00' },
    { elem: '6 Hour Behind the Wheel Package', price: '$510.00' },
    { elem: '7½ Hour Package including Road Test', price: '$575.00' },
    {
      elem: (
        <div>
          <div style={{ marginBottom: '.5rem' }}>
            3&#189; Hour Road Test Appointment*
          </div>
          <div className="note">
            <strong>*</strong> Students must take at least one lesson before
            scheduling a Road Test appointment.
          </div>
        </div>
      ),
      price: '$265.00'
    }
  ],
  outter: [
    { elem: '2 Hour Lessons', price: '$185.00' },
    { elem: '6 Hour Behind the Wheel Package', price: '$540.00' },
    { elem: '7½ Hour Package including Road Test', price: '$605.00' },
    {
      elem: (
        <div>
          <div style={{ marginBottom: '.5rem' }}>
            3&#189; Hour Road Test Appointment*
          </div>
          <div className="note">
            <strong>*</strong> Students must take at least one lesson before
            scheduling a Road Test appointment.
          </div>
        </div>
      ),
      price: '$275.00'
    }
  ]
}

const LocationModal = ({ type, name, onClose }) => {
  if (!type || !name) return null
  return (
    <Modal>
      <Close onClick={onClose} />
      <div style={{ position: 'relative' }}>
        <div>
          <h2>{name}</h2>
          <Col>
            <h3>Rates</h3>
            <table className="price">
              <tbody>
                {rates[type].map(({ elem, price }, i) => {
                  return (
                    <tr key={i}>
                      <td>{elem}</td>
                      <td>{price}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </Col>
          <Col2>
            <h3>Hours</h3>
            <h4>Behind the Wheel Lessons</h4>
            <table className="hours">
              <tbody>
                <tr>
                  <td>Monday-Thursday</td>
                  <td>7am–8pm</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>7am–5pm</td>
                </tr>
              </tbody>
            </table>
            <h4>Office hours</h4>
            <h5>
              <a href="tel:612-623-4142">Call (612) 623-4142</a>
            </h5>
            <table className="hours">
              <tbody>
                <tr>
                  <td>Monday-Thursday</td>
                  <td>9:30am–5:00pm</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>9:30am–5:00pm</td>
                </tr>
                <tr>
                  <td>Saturday, Sunday</td>
                  <td>Closed</td>
                </tr>
              </tbody>
            </table>
          </Col2>
        </div>
      </div>
    </Modal>
  )
}

export default LocationModal
