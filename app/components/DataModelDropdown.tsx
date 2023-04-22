import React from 'react';
import {Select} from 'native-base';
import {DataModel} from '../types';

interface DataModelDropdownProps {
  dataModels: DataModel[]; // an array of DataModel objects
  selectedIndex: any; // the index of the currently selected DataModel
  setSelectedIndex: Function; // a function to set the selected index
  setValues: Function; // a function to set the values
}

const DataModelDropdown = ({
  dataModels,
  selectedIndex,
  setSelectedIndex,
  setValues,
}: DataModelDropdownProps): JSX.Element => {
  return (
    <Select
      borderColor={'lightgray'}
      fontWeight={'bold'}
      borderWidth={1}
      variant="filled"
      height={12}
      marginX={5}
      marginY={5}
      selectedValue={selectedIndex} // set the currently selected value
      onValueChange={index => {
        // set the selected index and reset the values
        setSelectedIndex(index);
        setValues({});
      }}>
      {dataModels.map((model: DataModel, key: any) => (
        <Select.Item key={key} label={model.name} value={key} />
        // render a Select.Item component for each DataModel object in the array
        // key: a unique identifier for the item, label: the text to display, value: the value to return when the item is selected
      ))}
    </Select>
  );
};

export default DataModelDropdown;
