import { FormEvent, useState } from 'react'

import { FormVagaas, ButtonPesquisar, CampoInput } from './FormVagasmodule'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormVagaas onSubmit={aoEnviarForm}>
      <CampoInput
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <ButtonPesquisar>Pesquisar</ButtonPesquisar>
    </FormVagaas>
  )
}
export default FormVagas
