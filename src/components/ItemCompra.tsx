import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface ItemCompraProps {
  nome: string
  onToggle: () => void
  comprado: boolean
}

export default function ItemCompra({ nome, comprado, onToggle }: ItemCompraProps) {
  return (
    <TouchableOpacity onPress={onToggle}> 
      <Text style={comprado && styles.textoComprado}>{nome}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textoComprado: {
    textDecorationLine: 'line-through'
  }
})
