import {
    comandaItensStyle,
    comandaStyle,
    comandaTextStyle,
    containerStyle,
    listStyle,
    tableCellStyle, tableRowStyle,
    tableStyle
} from "@/utils/styles/comandasBodyStyle";
import { Flex, Text } from "@chakra-ui/react";
import { SimpleGrid } from '@chakra-ui/react'
import { Table } from "@chakra-ui/react"

const items = [
    { id: 1, nome: "Pastel", qtde: 1, unitario: "R$ 4,50" ,total: "R$ 4,50" },
    { id: 2, nome: "Refrigerante", qtde: 2, unitario: "R$ 5,50" ,total: "R$ 11,00" }
]
export default function ComandasBody(){
    const isHeader = (index : number) => {
        return index == 0 ?  "Comandas" : "Comanda " + index;
    }
    return (
    <>
        <Flex style={containerStyle}>
            <Flex style={listStyle}>
                <SimpleGrid minChildWidth={'90%'}  gap={2}>
                    {[...Array(18)].map((_, index) => (
                        <Flex key={index} style={comandaStyle}>
                            <Text style={comandaTextStyle}>{isHeader(index)}</Text>
                        </Flex>
                    ))}
                </SimpleGrid>
            </Flex>
            <Flex style={comandaItensStyle}>
                <Table.ScrollArea style={{ height: "180px", width: "100%", overflowY: "auto", overflowX: "hidden"}}>
                    <Table.Root style={tableStyle}>
                        <Table.Header>
                            <Table.Row style={tableRowStyle}>
                                <Table.ColumnHeader style={tableCellStyle}>Item</Table.ColumnHeader>
                                <Table.ColumnHeader style={tableCellStyle}>Quantidade</Table.ColumnHeader>
                                <Table.ColumnHeader style={tableCellStyle}>Unitário</Table.ColumnHeader>
                                <Table.ColumnHeader style={{ ...tableCellStyle }}>Total</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {items.map((item) => (
                                <Table.Row style={tableRowStyle} key={item.id}>
                                    <Table.Cell style={tableCellStyle}>{item.nome}</Table.Cell>
                                    <Table.Cell style={tableCellStyle}>{item.qtde}</Table.Cell>
                                    <Table.Cell style={tableCellStyle}>{item.unitario}</Table.Cell>
                                    <Table.Cell style={{ ...tableCellStyle}}>{item.total}</Table.Cell>
                                </Table.Row>
                            ))}
                            {/* Linha de total */}
                            <Table.Row style={tableRowStyle}>
                                <Table.Cell style={tableCellStyle}>Total:</Table.Cell>
                                <Table.Cell style={tableCellStyle}>3</Table.Cell>
                                <Table.Cell style={tableCellStyle}>R$ 15,50</Table.Cell>
                                <Table.Cell style={{ ...tableCellStyle}}>R$ 15,50</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>
                </Table.ScrollArea>
            </Flex>
        </Flex>
    </>
    )
}