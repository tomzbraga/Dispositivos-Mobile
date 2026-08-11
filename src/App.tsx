import React, { ReactElement, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import ItemCompra from './components/ItemCompra'
import InputField from './components/InputField'

export const App = (): ReactElement => {
  const [text, setText] = useState('')

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <InputField placeholder='Digite um item da lista'/>
        <ItemCompra nome="Arroz" />
        <ItemCompra nome="Feijão" />
        <ItemCompra nome="Leite" />
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
