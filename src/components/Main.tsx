import { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import InputField from "./InputField";
import ItemCompra from "./ItemCompra";

interface Item {
  id: number
  nome: string
}

export default function Main() {
  
  const [itens, setItens] = useState<Item[]>([]);
  const [text, setText] = useState<string>('')

  function adicionarItem(nome: string) {
    
    const nomeLimpo = nome.trim()

    if (nomeLimpo.length === 0) {
      return
    }
    
    const newItem: Item = {
      id: Date.now(),
      nome,
    }

    setItens([...itens, newItem])
    setText('');
  }

  return (
    <View>
      <InputField placeholder="Digite um item" value={text} onChangeText={setText} />
      <TouchableOpacity onPress={() => adicionarItem(text)}>
        <Text>Adicionar</Text>
      </TouchableOpacity>
      {itens.map((item) => (
        <ItemCompra key={item.id} nome={item.nome} />
      ))}
    </View>
  );
}