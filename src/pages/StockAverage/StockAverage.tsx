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
  Grid,
  GridItem,
  Badge,
} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';

interface IStockAverage {
  firstQty?: number | undefined;
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
    firstQty: undefined,
    firstPrice: undefined,
    secondQty: undefined,
    secondPrice: undefined,
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
      firstQty: undefined,
      firstPrice: undefined,
      secondQty: undefined,
      secondPrice: undefined,
      averagePrice: 0,
      totalAmount: 0,
      totalQty: 0,
      isResult: false,
    });
  };

  return (
    <section className='site-section'>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap={{
          base: 0,
          sm: 5,
        }}
        rowGap={{
          base: 5,
          sm: 5,
        }}>
        <GridItem colSpan={2}>
          <SimpleGrid spacingY='10px' columns={{ base: 2, md: 2, lg: 2 }} spacing={10}>
            <Box>
              <Badge marginBottom={{ base: 3 }}>First Transaction</Badge>
              <FormControl mb={3}>
                <FormLabel>Quantity</FormLabel>
                <Input
                  type='number'
                  value={state?.firstQty}
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setState({ ...state, firstQty: Number(e.target.value) })
                  }
                />
              </FormControl>
              <FormControl mb={3}>
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
              <Badge marginBottom={{ base: 3 }}>Second Transaction</Badge>
              <FormControl mb={3}>
                <FormLabel>Quantity</FormLabel>
                <Input
                  type='number'
                  value={state?.secondQty}
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setState({ ...state, secondQty: Number(e.target.value) })
                  }
                />
              </FormControl>
              <FormControl mb={3}>
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
          </SimpleGrid>
        </GridItem>
        <GridItem>
          <Box>
            {state.isResult && (
              <Box>
                <Card>
                  <CardHeader padding={{ base: 0 }}>
                    <Badge marginBottom={{ base: 3 }} size='md'>
                      Result
                    </Badge>
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
          </Box>
        </GridItem>
      </Grid>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <Box
          marginTop={{
            base: 1,
            sm: 8,
          }}
          marginBottom={{
            base: 8,
            sm: 0,
          }}>
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
