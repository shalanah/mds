import styled from 'styled-components'

export const BtnPrimary = styled.button`
  white-space: no-wrap;
  color: #fff;
  transition: .2s;
  background-color: ${props => props.theme.accentDark};
  padding: 9px 20px 9px 20px;
  box-shadow: none;
  border-radius: 5px;
  outline: none;
  border: none;
  font-size: 1.125rem;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  :hover {
    color: #fff;
    background-color: ${props => props.theme.accentDarker};
    box-shadow: 0px 1px 5px rgba(0,0,0,.3);
  }
  :hover:after {
    display: none;
  }
`

export const BtnPrimary2 = styled(BtnPrimary)`
  padding: 12px 20px 12px 20px;
  border-radius: 0;
`
