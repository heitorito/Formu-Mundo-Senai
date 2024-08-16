import * as C from "@chakra-ui/react"

const FormPessoal = () => {
    return(
        <C.VStack spacing={5}>
            <h1>Dados Pessoais</h1>
            <C.Input type="email" placeholder="Insira seu email"/>
            <C.Input type="text" placeholder="Insira seu nome"/>
            <C.Input type="text" placeholder="Insira seu CPF"/>
            <C.Input type="text" placeholder="Insira seu telefone"/>
    <C.RadioGroup>
      <C.Stack direction='row'>
        <C.Radio colorScheme="orange" value='m'>Masculino</C.Radio>
        <C.Radio colorScheme="orange" value='f'>Feminino</C.Radio>
      </C.Stack>
    </C.RadioGroup>
        </C.VStack>
    )
}

export default FormPessoal