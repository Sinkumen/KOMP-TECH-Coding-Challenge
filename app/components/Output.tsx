import {Badge, Box, HStack, Pressable, Text} from 'native-base';
import React from 'react';

interface OutputProps {
  calculate: any; // function to calculate the output
  values: object; // object containing input values
  completed: boolean; // whether all required fields have been filled
  label: string; // label to display for the output
}

const Output = ({calculate, values, completed, label}: OutputProps) => {
  const result: any = calculate(values); // calculate the output

  return (
    <Pressable
      marginX={5}
      marginY={2}
      onPress={() => console.log("I'm Pressed")}
      rounded="8"
      overflow="hidden"
      borderWidth="1"
      borderColor="coolGray.300"
      maxW="96"
      shadow="3"
      bg="coolGray.100"
      p="5">
      <Box>
        <HStack alignItems="center">
          <Badge
            colorScheme="blue"
            _text={{
              color: 'white',
            }}
            variant="solid"
            rounded="4">
            Result
          </Badge>
        </HStack>
        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
          {label}
        </Text>
        <Text mt="2" fontSize="sm" color="coolGray.700">
          {completed ? result : 'Please pleas enter all the required fields'}
        </Text>
      </Box>
    </Pressable>
  );
};

export default Output;
