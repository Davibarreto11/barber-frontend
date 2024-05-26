import styled from 'styled-components'

export const Container = styled.button`
  background: transparent;
  border: 3px solid #38ada9;
  height: 56px;
  border-radius: 40px;
  padding: 0 16px;
  color: #38ada9;
  width: 100%;
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 700;
  margin-top: 16px;
  transition: .3s;


  &:hover{
    transition: .8s;
    background: #38ada9;
    color: #f5f6fa;
  }
  &:focus {
  outline: none;
}
`
