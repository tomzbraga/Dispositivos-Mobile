import { useState } from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import InputField from './InputField'
import ItemCompra from './ItemCompra'

interface Item {
  id: number
  nome: string
  comprado: boolean
}

export default function Main() {
  const [itens, setItens] = useState<Item[]>([])
  const [text, setText] = useState<string>('')

  function adicionarItem(nome: string) {
    const nomeLimpo = nome.trim()

    if (nomeLimpo.length === 0) {
      return
    }

    const newItem: Item = {
      id: Date.now(),
      nome: nomeLimpo,
      comprado: false,
    }

    setItens([...itens, newItem])
    setText('')
  }

  function toggleComprado(id: number) {
    setItens(
      itens.map((item) =>
        item.id === id ? { ...item, comprado: !item.comprado } : item
      )
    )
  }

  function removerItem(id: number) {
    setItens(itens.filter((item) => item.id !== id))
  }

  const faltamComprar = itens.filter((item) => item.comprado === false).length

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>

      <View style={styles.inputRow}>
        <View style={styles.inputWrapper}>
          <InputField placeholder="Digite um item" value={text} onChangeText={setText} />
        </View>
        <TouchableOpacity style={styles.botaoAdicionar} onPress={() => adicionarItem(text)}>
          <Text style={styles.textoBotaoAdicionar}>+</Text>
        </TouchableOpacity>
      </View>

      {itens.length === 0 ? (
        <View style={styles.vazioContainer}>
          <Text style={styles.vazioTexto}>Sua lista está vazia!</Text>
        </View>
      ) : (
        <>
          <Text style={styles.contador}>
            {faltamComprar} {faltamComprar === 1 ? 'item faltando' : 'itens faltando'}
          </Text>

          <View style={styles.lista}>
            {itens.map((item) => (
              <ItemCompra
                key={item.id}
                nome={item.nome}
                comprado={item.comprado}
                onToggle={() => toggleComprado(item.id)}
                onRemover={() => removerItem(item.id)}
              />
            ))}
          </View>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 16,
    backgroundColor: '#F5F5F7',
  },
  titulo: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  inputWrapper: {
    flex: 1,
  },
  botaoAdicionar: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#34C759',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotaoAdicionar: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 26,
  },
  contador: {
    fontSize: 14,
    color: '#6E6E73',
    marginBottom: 10,
    fontWeight: '500',
  },
  lista: {
    gap: 10,
  },
  vazioContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  vazioTexto: {
    fontSize: 16,
    color: '#8E8E93',
  },
})