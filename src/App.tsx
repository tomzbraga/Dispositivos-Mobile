import React, { ReactElement } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Main from './components/Main'

import ItemCompra from './components/ItemCompra'
import InputField from './components/InputField'

export const App = (): ReactElement => {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Main />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginBottom: 8
  },
  emoji: {
    fontSize: 82,
    marginBottom: 24
  }
})
