import { Input, SimpleGrid } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';

export default function StockAverage() {
  return (
    <section className='site-section'>
      <SimpleGrid spacingY='10px' columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <Box>
          <FormControl mb={5}>
            <FormLabel>First Transcation Qty</FormLabel>
            <Input type='text' />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>
          <FormControl mb={5}>
            <FormLabel>First Transcation Price</FormLabel>
            <Input type='text' />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>
        </Box>
        <Box>
          <FormControl mb={5}>
            <FormLabel>Second Transcation Qty</FormLabel>
            <Input type='text' />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>
          <FormControl mb={5}>
            <FormLabel>Second Transcation Price</FormLabel>
            <Input type='text' />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>
        </Box>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <Box>
          <ButtonGroup gap='4'>
            <Button colorScheme='teal'>Calculate Average</Button>
            <Button>Clear Inputs</Button>
          </ButtonGroup>
          {/* <Button colorScheme='teal' size='md'>
            Calculate Average
          </Button> */}
        </Box>
      </SimpleGrid>
    </section>
  );
}
