import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface ItemCompraProps {
  nome: string
  onToggle: () => void
  onRemover: () => void
  comprado: boolean
}

export default function ItemCompra({ nome, comprado, onToggle, onRemover }: ItemCompraProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggle}>
        <Text style={comprado && styles.textoComprado}>{nome}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onRemover}>
        <Text style={styles.remover}>Remover</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  textoComprado: {
    textDecorationLine: 'line-through',
  },
  remover: {
    color: 'red',
  },
})
