import { comandaItensStyle, comandaStyle, comandaTextStyle, containerStyle, listStyle } from "@/utils/styles/comandasBodyStyle";
import { Box, Flex, Text } from "@chakra-ui/react";
import { SimpleGrid } from '@chakra-ui/react'

export default function ComandasBody(){
    const isHeader = (index : integer) => {
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
            <Flex style={comandaItensStyle}></Flex>
        </Flex>
    </>
    )
}