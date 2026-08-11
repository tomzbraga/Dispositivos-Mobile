import { StyleSheet, Text, View } from 'react-native'

interface ItemCompraProps {
  nome: string
}

export default function ItemCompra({ nome }: ItemCompraProps) {
  return (
    <View>
      <Text>{nome}</Text>
    </View>
  )
}
