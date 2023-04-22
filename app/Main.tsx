import React, {useState} from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';

import DataModelDropdown from './components/DataModelDropdown';
import InputFields from './components/InputFields';
import datamodels from './datamodels';
import {ScrollView, Text, VStack} from 'native-base';

const Main = (): JSX.Element => {
  // Initialize the state variables selectedIndex and values using the useState hook
  const [selectedIndex, setSelectedIndex] = useState<any>(0);
  const [values, setValues] = useState<any>({});

  // Render the main component
  return (
    // Use a ScrollView to make the view scrollable
    <ScrollView flex={1}>
      <SafeAreaView style={styles.container}>
        <VStack>
          {/* Add a title */}
          <Text
            alignSelf={'center'}
            width={200}
            fontWeight={'bold'}
            fontSize={20}
            marginTop={2}
            textAlign={'center'}
            marginY={5}>
            Sinkumen Aseffa's Coding Challange.
          </Text>
          {/* Render the DataModelDropdown component */}
          <DataModelDropdown
            dataModels={datamodels}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            setValues={setValues}
          />
          {/* Render the InputFields component */}
          <InputFields
            selected={selectedIndex}
            dataModels={datamodels}
            values={values}
            setValues={setValues}
          />
        </VStack>
      </SafeAreaView>
    </ScrollView>
  );
};

// Define the styles for the container
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// Export the Main component as the default export
export default Main;
