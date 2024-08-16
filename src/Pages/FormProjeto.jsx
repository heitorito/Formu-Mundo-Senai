import * as C from "@chakra-ui/react"

const FormProjeto = () => {
    return(
        <C.VStack spacing={5}>
             <h1>Dados do Projeto</h1>
            <C.Input type="email" placeholder="Insira o Projeto"/>
            <C.Input type="text" placeholder="Insira Área de atuação"/>
            <C.Input type="text" placeholder="Coordenador/Professor"/>
            <C.Text>Escolha sua Escola:</C.Text>
            <C.Checkbox colorScheme ='orange'>CETCC</C.Checkbox>
            <C.Checkbox colorScheme ='orange'>CETAFEST</C.Checkbox>
            <C.Checkbox colorScheme ='orange'>CETICC</C.Checkbox>
            <C.Checkbox colorScheme ='orange'>CETAFAJU</C.Checkbox>
        </C.VStack>
    )
}

export default FormProjeto