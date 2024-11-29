'use client'

import { Button, Card, Flex, Text } from "@chakra-ui/react"
import Select, { SingleValue } from 'react-select';
import { GetProdutos } from "@/service/produtos"
import { GetProdutosResponse } from "@/service/utils/apiResponses"
import { useEffect, useState } from "react"
import { Input } from "@chakra-ui/react"


export default function ModalSelecionarItens() {

    const [produtos, setProdutos] = useState<GetProdutosResponse[]>()
    const [collection, setCollection] = useState<{label: string, value: string}[]>()
    const [selectedOption, setSelectedOption] = useState<string | null | undefined>(null)
    const [quantidade, setQuantidade] = useState()
    const [valorUnitario, setValorUnitario] = useState()

    async function FetchProdutos() {
        const produtos = await GetProdutos()
        setProdutos(produtos)
    }

    useEffect(() => {
        FetchProdutos()
    },[])

    useEffect(() => {
        if (produtos) {
            const options = produtos.map((produto) => (
                {label: produto.nome, value: produto.nome}
            )) 
            setCollection(options)
        }
        else {
            setCollection([{label: '', value: ''}])
        }
        
    },[produtos])

    return (
        
        <Card.Root style={{
            zIndex: 9999,
            width: '30%',
            backgroundColor: '#d9d9d9',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: "translate(-50%, -50%)",
            boxShadow: '0px 0px 6px 6px rgba(0, 0, 0, 0.3)'
        }}>
            <Card.Body>
                <Flex style={{
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%',
                    padding: 5
                }}>
                    <Flex 
                        justify={"center"}
                        align={"center"}
                        height={'10%'}
                        borderBottomColor={'#a3a3a3'}
                        borderBottomWidth={3}
                        marginBottom={4}
                    >
                        <Text fontSize={'1.2rem'}>Selecionar Produto</Text>
                    </Flex>

                    <Select
                        styles={{}}
                        options={collection}
                        onChange={(value: SingleValue<{ label: string; value: string }>) => setSelectedOption(value?.value)}
                    /> 
                    
                    <Flex
                        direction={"row"}
                        justifyContent={"space-evenly"}
                        width={'100%'}
                        marginTop={4}
                    >
                        <Flex
                            direction={"column"}
                            width={'48%'}
                        >
                            <Text>Quantidade</Text>
                            <Input width={'100%'} variant="subtle" />
                        </Flex>
                        <Flex
                            direction={"column"}
                            width={'48%'}
                        >
                            <Text>Valor Unitário</Text>
                            <Input width={'100%'} variant="subtle" />
                        </Flex>
                    </Flex>
                    <Flex
                        width={'100%'}
                        direction={'column'}
                        alignItems={"center"}
                        marginTop={4}
                    >
                        <Text marginLeft={3} alignSelf={'start'}>Valor Total</Text>
                        <Input width={'96%'} variant={'subtle'}/>
                    </Flex>
                    <Button 
                        bgColor={'#2a2a2a'}
                        width={'96%'}
                        alignSelf={"center"}
                        marginTop={4}
                        marginBottom={2}
                    >
                        Adicionar
                    </Button>
                </Flex>
            </Card.Body>
        </Card.Root>
    )
}