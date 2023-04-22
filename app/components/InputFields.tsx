import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {DataModel, Field} from '../types';
import {Input} from 'native-base';
import {StyleSheet} from 'react-native';
import Output from './Output';
import calculations from '../dataset/calculations';

interface FieldsProps {
  dataModels: DataModel[];
  selected: any;
  values: any;
  setValues: Function;
}

const InputFields = ({
  dataModels,
  selected,
  values,
  setValues,
}: FieldsProps) => {
  const fields: any = dataModels[selected].fields; // gets fields object based on selected data model
  const keys: string[] = Object.keys(fields); // gets the keys of fields object
  let total: number = 0;
  for (const i in keys) {
    if (!fields[keys[i]].readOnly) {
      // checks if field is not read-only
      total += 1;
    }
  }
  return (
    <KeyboardAwareScrollView style={styles.container}>
      {keys.map((key: string) => {
        const field: Field = fields[key]; // gets the field object based on the key
        if (field.readOnly) {
          // checks if the field is read-only
          return (
            <Output
              key={key}
              calculate={calculations[field.calculate]} // gets the calculation function from calculations object
              values={values}
              completed={Object.keys(values).length === total} // checks if all non-read-only fields are filled
              label={field.label}
            />
          );
        }
        return (
          <Input
            keyboardType={field.type === 'number' ? 'number-pad' : 'default'} // sets keyboard type based on field type
            height={16}
            variant={'filled'}
            key={key}
            isDisabled={field.readOnly}
            onChangeText={nextValue => {
              if (!nextValue) {
                if (key in values) {
                  // checks if the field is in values object
                  const prev = {...values};
                  delete prev[key]; // deletes the key from values object
                  setValues(prev);
                }
              } else {
                setValues((prev: any) => ({...prev, [key]: nextValue})); // updates the values object with the new value
              }
            }}
            marginX={5}
            marginY={2}
            value={values[key] || ''}
            placeholder={field.label}
          />
        );
      })}
    </KeyboardAwareScrollView>
  );
};

export default InputFields;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
