'use client'

import { GetComandasPorMesa, PostComanda } from "@/service/comandas"
import { GetComandaPorMesaResponse } from "@/service/utils/apiResponses"
import { modalComandaPorMesaStyle, modalComandaPorMesaBodyStyle, modalComandaPorMesaHeaderStyle, headerTextContainer, headerTextStyle, closeButtonStyle, modalComadnaPorMesaContainerStyle, comandaListStyle, comandaBoxStyle, itensListStyle, internalListStyle, newComandaButton } from "@/utils/styles/modalComandaPorMesaStyle"
import { Button, Card, Flex, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"


interface ComandaPorMesaProps {
    mesaId: number | null,
    setIsModalVisible: (arg: boolean) => void,
    setMesaId: (arg: number | null) => void,
}

export default function ComandaPorMesa({mesaId, setIsModalVisible, setMesaId}: ComandaPorMesaProps) {

    const [comandas, setComandas] = useState<GetComandaPorMesaResponse[]>()

    async function fetchComandas() {
        const comandas = await GetComandasPorMesa(mesaId)
        setComandas(comandas)
    }

    async function CreateComanda() {
        PostComanda(mesaId)
        fetchComandas()
    }

    useEffect(() => {
        fetchComandas()
    },[])

    useEffect(() => {
        fetchComandas()
    },[comandas])

    function handleFecharButton(): void {
        setIsModalVisible(false)
        setMesaId(null)
    }

    return (
        <>
        <Card.Root style={modalComandaPorMesaStyle}>
            <Card.Body>
                <Flex style={modalComandaPorMesaBodyStyle}>
                    {/*Cabeçalho*/}
                    <Flex  style={modalComandaPorMesaHeaderStyle}>
                        <Flex style={headerTextContainer}>
                            <Text  style={headerTextStyle}>
                                {`Comandas da mesa ${mesaId}`}
                            </Text>
                        </Flex>
                        
                        <Button style={closeButtonStyle} onClick={() => handleFecharButton()}>
                            <Text>Fechar</Text>
                        </Button>
                    </Flex>
                    {/*Corpo*/}
                    <Flex style={modalComadnaPorMesaContainerStyle}>
                        <Flex style={comandaListStyle}>
                            <Flex
                                style={internalListStyle}
                            >
                                {comandas?.map((comanda, index) => (
                                    <Button key={index} style={comandaBoxStyle}>
                                        <Text fontSize={'1.2rem'}>{`Comanda ${comanda.id}`}</Text>
                                    </Button> 
                                ))}

                            </Flex>
                            <Button style={newComandaButton} onClick={() => CreateComanda()}>
                                <Text fontWeight={500} fontSize={'1.1rem'}>Nova Comanda</Text>
                            </Button>
                            
                        </Flex>
                        <Flex style={itensListStyle}>
                                
                        </Flex>
                    </Flex>
                    
                </Flex>
            </Card.Body>
        </Card.Root>
        </>
    )
}