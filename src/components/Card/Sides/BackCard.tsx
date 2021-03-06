import { Box, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { CardContext } from "../../../contexts/CardContext";
import { TextButton } from "../../TextButton";

// https://www.w3schools.com/howto/howto_css_flip_card.asp

interface LadoProps {
  text: string;  
  isFront?: boolean; 
}

export default function BackCard( { text, isFront = true }: LadoProps){
  const { HandleTurnCard, HandleAddCardIndex } = useContext(CardContext)

  function handleChooseDificulty() {
    HandleAddCardIndex()
    HandleTurnCard()
  }

  return(
    <Box>
      <Stack
        bg='gray.300'
        w='500px'
        h='600px'
        borderRadius='20px'
        p='10'
        justify='space-between'
        align='center'
      >
        <Text
          textAlign='justify'
          lineHeight='200%'
          color='gray.800'
        >{text}</Text>
        <a color='black.500' onClick={handleChooseDificulty}>

          <Stack direction='row' spacing={5}>
            <TextButton color='green.600' text='Easy'/>
            <TextButton color='yellow.600' text='Medium'/>
            <TextButton color='red.700' text='Hard'/>
          </Stack>          
        </a>
      </Stack> 
      
    </Box>
  )


}