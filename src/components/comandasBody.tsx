import { comandaItensStyle, comandaStyle, comandaTextStyle, containerStyle, listStyle } from "@/utils/styles/comandasBodyStyle";
import { Box, Flex, Text } from "@chakra-ui/react";
import { SimpleGrid } from '@chakra-ui/react'

export default function ComandasBody(){
    return (
    <> 
        <Flex style={containerStyle}>
            <Flex style={listStyle}>
                <SimpleGrid minChildWidth={'30%'} gap={2}>
                    {[...Array(18)].map((_, index) => (
                        <Flex key={index} style={comandaStyle}>
                            <Text style={comandaTextStyle}>{index + 1}</Text>
                        </Flex>
                    ))}
                </SimpleGrid>
            </Flex>
            <Flex style={comandaItensStyle}>

            </Flex>
        </Flex>
    </>
    )
}