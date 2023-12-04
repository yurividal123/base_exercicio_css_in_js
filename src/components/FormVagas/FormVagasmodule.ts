import styled, { css } from 'styled-components'

export const FormVagaas = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: #f9f5e7;
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const ButtonPesquisar = styled.button`
  background-color: #a7727d;
  border: 1px solid #a7727d;
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: #f9f5e7;
  margin-left: 8px;
  cursor: pointer;
`

export const CampoInput = styled.input`
  padding: 0 16px;
  outline-color: #a7727d;
`
