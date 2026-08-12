import { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import InputField from "./InputField";
import ItemCompra from "./ItemCompra";

interface Item {
  id: number
  nome: string
  comprado: boolean
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
      comprado: false,
    }

    setItens([...itens, newItem])
    setText('');
  }

  function toggleComprado(id: number) {
    setItens(itens.map((item) =>
      item.id === id ? {...item, comprado: !item.comprado } : item
      )
    )
  }

  return (
    <View>
      <InputField placeholder="Digite um item" value={text} onChangeText={setText} />
      <TouchableOpacity onPress={() => adicionarItem(text)}>
        <Text>Adicionar</Text>
      </TouchableOpacity>
      {itens.map((item) => (
        <ItemCompra onToggle={() => toggleComprado(item.id)} key={item.id} nome={item.nome} comprado={item.comprado}/>
      ))}
    </View>
  );
}