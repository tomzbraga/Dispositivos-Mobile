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
      <TouchableOpacity style={styles.textoWrapper} onPress={onToggle}>
        <View style={[styles.checkbox, comprado && styles.checkboxMarcado]}>
          {comprado && <Text style={styles.checkboxIcone}>✓</Text>}
        </View>
        <Text style={[styles.texto, comprado && styles.textoComprado]}>{nome}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onRemover} hitSlop={8}>
        <Text style={styles.remover}>Remover</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  textoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#C7C7CC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxMarcado: {
    backgroundColor: '#34C759',
    borderColor: '#34C759',
  },
  checkboxIcone: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
  },
  texto: {
    fontSize: 16,
    color: '#1C1C1E',
    flexShrink: 1,
  },
  textoComprado: {
    textDecorationLine: 'line-through',
    color: '#8E8E93',
  },
  remover: {
    color: '#FF3B30',
    fontSize: 13,
    fontWeight: '600',
  },
})