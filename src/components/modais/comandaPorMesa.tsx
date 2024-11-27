'use client'

import { GetComandasPorMesa } from "@/service/comandas"
import { GetComandaPorMesaResponse } from "@/service/utils/apiResponses"
import { modalComandaPorMesaStyle, modalComandaPorMesaBodyStyle, modalComandaPorMesaHeaderStyle, headerTextContainer, headerTextStyle, closeButtonStyle, modalComadnaPorMesaContainerStyle, comandaListStyle, comandaBoxStyle, itensListStyle, internalListStyle, newComandaButton } from "@/utils/styles/modalComandaPorMesaStyle"
import { Button, Card, Flex, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"


interface ComandaPorMesaProps {
    mesaId: number | null,
    setIsModalVisible: (arg: boolean) => void,
}

export default function ComandaPorMesa({mesaId, setIsModalVisible}: ComandaPorMesaProps) {

    const [comandas, setComandas] = useState<GetComandaPorMesaResponse[]>()

    async function fetchComandas() {
        const comandas = await GetComandasPorMesa(mesaId)
        setComandas(comandas)
    }

    useEffect(() => {
        fetchComandas()
    },[])

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
                        
                        <Button style={closeButtonStyle} onClick={() => setIsModalVisible(false)}>
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
                                    <Flex key={index} style={comandaBoxStyle}>
                                        <Text fontWeight={500} fontSize={'1.2rem'}>{comanda.id}</Text>
                                    </Flex> 
                                ))}

                            </Flex>
                            <Button style={newComandaButton}>
                                Nova Comanda
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