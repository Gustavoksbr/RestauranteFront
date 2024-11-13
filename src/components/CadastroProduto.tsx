import {
    containerStyle,
    operadoresProduto,
    searchInput,
    descricaoProduto,
    maisInfosProduto,
    precoProduto,
    categoriaProduto,
    inputStyle
} from "@/utils/styles/cadastroProdutoStyle";
import { Flex, Text, Input } from "@chakra-ui/react";
import { AddIcon, SearchIcon, EditIcon, DeleteIcon, CheckIcon } from '@chakra-ui/icons';

export default function CadastroProduto(){
    
    return (
    <>
        <Flex style={containerStyle}>
            <Flex style={operadoresProduto}>
                <AddIcon />
                <EditIcon />
                <CheckIcon />
                <DeleteIcon />
                <Input style={searchInput} />
                <SearchIcon />
            </Flex>
            <Flex style={descricaoProduto}>
                <Text fontWeight="bold" width="100%">Descrição</Text>
                <Input style={inputStyle} />
            </Flex>
            <Flex style={maisInfosProduto}>
                <Flex style={precoProduto}>
                    <Text fontWeight="bold" width="100%">Preço</Text>
                    <Input style={inputStyle} />
                </Flex>
                <Flex style={categoriaProduto}>
                    <Text fontWeight="bold" width="100%">Categoria</Text>
                    <Input style={inputStyle} />
                </Flex>
            </Flex>
        </Flex>
    </>
    )
}