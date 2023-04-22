import { Heading, Input, SimpleGrid, Stack, StackDivider, Text } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';

interface IStockAverage {
  firstQty?: number;
  firstPrice?: number;
  secondQty?: number;
  secondPrice?: number;
  averagePrice?: number;
  totalAmount?: number;
  totalQty?: number;
  isResult?: boolean;
}

export default function StockAverage() {
  const toast = useToast();

  const [state, setState] = useState<IStockAverage>({
    firstQty: 0,
    firstPrice: 0,
    secondQty: 0,
    secondPrice: 0,
    averagePrice: 0,
    totalAmount: 0,
    totalQty: 0,
    isResult: false,
  });

  const handleCalculate = () => {
    if (state?.firstPrice && state?.firstQty && state?.secondPrice && state?.secondQty) {
      const firstTransTotalPrice = state?.firstPrice * state?.firstQty;
      const secondTransTotalPrice = state?.secondPrice * state?.secondQty;
      const totalQty = state?.firstQty + state?.secondQty;
      const totalAmount = firstTransTotalPrice + secondTransTotalPrice;

      const average = totalAmount / totalQty;

      setState({
        ...state,
        averagePrice: Number(average.toFixed(2)),
        totalQty: Number(totalQty.toFixed(2)),
        totalAmount: Number(totalAmount.toFixed(2)),
        isResult: true,
      });
    } else {
      toast({
        title: 'Error!!',
        description: 'Please input all fields',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const resetFields = () => {
    setState({
      firstQty: 0,
      firstPrice: 0,
      secondQty: 0,
      secondPrice: 0,
      averagePrice: 0,
      totalAmount: 0,
      totalQty: 0,
      isResult: false,
    });
  };

  return (
    <section className='site-section'>
      <SimpleGrid spacingY='10px' columns={{ base: 1, md: 3, lg: 3 }} spacing={10}>
        <Box>
          <h5>First Transaction</h5>
          <FormControl mb={5}>
            <FormLabel>Quantity</FormLabel>
            <Input
              type='number'
              value={state?.firstQty}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                setState({ ...state, firstQty: Number(e.target.value) })
              }
            />
          </FormControl>
          <FormControl mb={5}>
            <FormLabel>Price per share</FormLabel>
            <Input
              type='number'
              value={state?.firstPrice}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                setState({ ...state, firstPrice: Number(e.target.value) })
              }
            />
          </FormControl>
        </Box>
        <Box>
          <h5>Second Transaction</h5>
          <FormControl mb={5}>
            <FormLabel>Quantity</FormLabel>
            <Input
              type='number'
              value={state?.secondQty}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                setState({ ...state, secondQty: Number(e.target.value) })
              }
            />
          </FormControl>
          <FormControl mb={5}>
            <FormLabel>Price per share</FormLabel>
            <Input
              type='number'
              value={state?.secondPrice}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                setState({ ...state, secondPrice: Number(e.target.value) })
              }
            />
          </FormControl>
        </Box>
        {state.isResult && (
          <Box>
            <Card>
              <CardHeader>
                <Heading size='md'>Result</Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Total Quanity
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      {state.totalQty}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Average Price Per Share
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      {state.averagePrice}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Total Amount
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      {state.totalAmount}
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </Box>
        )}
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <Box>
          <ButtonGroup gap='4'>
            <Button colorScheme='teal' onClick={handleCalculate}>
              Calculate Average
            </Button>
            <Button onClick={resetFields}>Clear Inputs</Button>
          </ButtonGroup>
        </Box>
      </SimpleGrid>
    </section>
  );
}
