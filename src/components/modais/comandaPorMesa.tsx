'use client'

import { DeleteComanda, GetComandasPorMesa, PostComanda } from "@/service/comandas"
import { getItensByComandaId } from "@/service/itens"
import { GetComandaPorMesaResponse, GetItensByComandaIdResponse } from "@/service/utils/apiResponses"
import { 
    modalComandaPorMesaStyle,
    modalComandaPorMesaBodyStyle,
    modalComandaPorMesaHeaderStyle,
    headerTextContainer,
    headerTextStyle,
    closeButtonStyle,
    modalComadnaPorMesaContainerStyle,
    comandaListStyle,
    comandaBoxStyle,
    itensListStyle,
    internalListStyle,
    newComandaButton,
    listItemContainer,
    apagarComandaButton,
    itensListLabels,
    itensListLabelsContainer,
    itensListItemsContainer,
    itensListItem,
    modalRightSection,
    ButtonsContainer,
} from "@/utils/styles/modalComandaPorMesaStyle"
import { Button, Card, Flex, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { FaTrashCan } from "react-icons/fa6";
import ModalSelecionarItens from "./selecionarItens"


interface ComandaPorMesaProps {
    mesaId: number | null,
    setIsModalVisible: (arg: boolean) => void,
    setMesaId: (arg: number | null) => void,
}

export default function ComandaPorMesa({mesaId, setIsModalVisible, setMesaId}: ComandaPorMesaProps) {

    const [comandas, setComandas] = useState<GetComandaPorMesaResponse[]>()
    const [itens, setItens] = useState<GetItensByComandaIdResponse[]>()
    const [isModalProdutosVisible, setIsModalProdutosVisible] = useState(false)

    async function fetchComandas() {
        const comandas = await GetComandasPorMesa(mesaId)
        setComandas(comandas)
    }

    async function fetchItensByComanda(comandaId: number) {
        const itens = await getItensByComandaId(comandaId)
        setItens(itens)
    }

    async function CreateComanda() {
        PostComanda(mesaId)
        fetchComandas()
    }

    async function HandleDeleteComanda(comandaId: number) {
        DeleteComanda(comandaId)
        fetchComandas()
    }

    useEffect(() => {
        fetchComandas()
    },[])

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
                                    <Flex key={index} style={listItemContainer}>
                                        <Button  style={comandaBoxStyle} onClick={() => fetchItensByComanda(comanda.id)}>
                                            <Text fontSize={'1.2rem'}>{`Comanda ${comanda.id}`}</Text>
                                        </Button>
                                        <Button onClick={() => HandleDeleteComanda(comanda.id)} style={apagarComandaButton}>
                                            <FaTrashCan/>
                                        </Button>
                                    </Flex>
                                    
                                ))}

                            </Flex>
                            <Button style={newComandaButton} onClick={() => CreateComanda()}>
                                <Text fontWeight={500} fontSize={'1.1rem'}>Nova Comanda</Text>
                            </Button>
                            
                        </Flex>
                        <Flex style={modalRightSection}>
                            <Flex style={itensListStyle}>
                                <Flex style={itensListLabelsContainer}>
                                    <Flex
                                        justifyContent={"start"}
                                        width={'40%'}
                                    ><Text style={itensListLabels}>Descrição do produto</Text></Flex>
                                    <Flex
                                        marginRight={2}
                                        justifyContent={"center"}
                                        width={'18%'}
                                    ><Text style={itensListLabels}>Quantidade</Text></Flex>
                                    <Flex
                                        marginRight={2}
                                        justifyContent={"center"}
                                    ><Text style={itensListLabels}>Valor Unitário</Text></Flex>
                                    <Flex
                                        justifyContent={"center"}
                                    ><Text style={itensListLabels}>Valor Total</Text></Flex>
                                </Flex>
                                {itens?.map((item, index) => (
                                    <Flex key={index} style={itensListItemsContainer}>
                                        <Flex
                                            justifyContent={"start"}
                                            width={'40%'}
                                        ><Text style={itensListItem}>{item.nomeProduto}</Text></Flex>
                                        <Flex
                                            marginRight={2}
                                            justifyContent={"center"}
                                            width={'18%'}
                                        ><Text style={itensListItem}>{item.quantidade}</Text></Flex>
                                        <Flex
                                            marginRight={2}
                                            justifyContent={"center"}
                                        ><Text style={itensListItem}>{item.precoUnitario}</Text></Flex>
                                        <Flex
                                            justifyContent={"center"}
                                        ><Text style={itensListItem}>{item.precoTotal}</Text></Flex>
                                    </Flex>
                                ))}
                            </Flex>
                            <Flex style={ButtonsContainer}>
                                <Button width={'30%'} onClick={() => setIsModalProdutosVisible(true)}>
                                    Novo Item
                                </Button>
                                <Button width={'30%'}>
                                    Pagar Comanda
                                </Button>
                        </Flex>
                        </Flex>
                        
                    </Flex>
                    
                </Flex>
            </Card.Body>
        </Card.Root>
        {isModalProdutosVisible &&
            <ModalSelecionarItens/>
        }
        
        </>
    )
}