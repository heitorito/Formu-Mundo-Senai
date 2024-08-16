import * as C from "@chakra-ui/react"

const FormEndereco = () => {
    return(
        <C.VStack spacing={5}>
             <h1>Endereços</h1>
            <C.Input type="text" placeholder="Insira o Cep"/>
            <C.Input type="text" placeholder="Insira o Bairro"/>
            <C.Select type="text" placeholder="Insira a UF">
                <option>Alagoas</option>
                <option>Sergipe</option>
                <option>Piauí</option>
                <option>Tocantins</option>
                <option>Pernambuco</option>
                <option>Rio Grande Do Norte</option>
                <option>Rio Grande Do Sul</option>
                <option>Paraíba</option>
                <option>Paraná</option>
                <option>Goiás</option>
                <option>São Paulo</option>
                <option>Rio De Janeiro</option>
                <option>Bahia</option>
                <option>Santa Catarina</option>
                <option>Rondônia</option>
                <option>Roraima</option>
                <option>Acre</option>
                <option>Pará</option>
                <option>Amazonas</option>
                <option>Minas Gerais</option>
                <option>Mato Grosso</option>
                <option>Maranhão</option>
                <option>Mato Grosso do Sul</option>
                <option>Espírito Santo</option>
                <option>Amapá</option>
                <option>Ceará</option>
            </C.Select>
        

        </C.VStack>
    )
}

export default FormEndereco