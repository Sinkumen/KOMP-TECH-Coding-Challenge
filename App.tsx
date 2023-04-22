/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import * as eva from '@eva-design/eva';
// import {ApplicationProvider} from '@ui-kitten/components';
import Main from './app/Main';
import {NativeBaseProvider} from 'native-base';
function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <Main />
    </NativeBaseProvider>
  );
}

export default App;
