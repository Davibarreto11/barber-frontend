import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
  background: transparent;
  border: 3px solid #38ada9;
  height: 56px;
  border-radius: 10px;
  padding: 0 16px;
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 700;
  color: #38ada9;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: .4s;


  &:hover{
    transition: .6s;
    background: #38ada9;
    color: #f5f6fa;
  }
`
