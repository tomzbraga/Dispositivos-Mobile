import { TextInput } from "react-native";
import React, { useState } from 'react';

interface InputFieldProps {
  placeholder: string
}

export default function InputField({ placeholder }: InputFieldProps) {
  
  const [text, setText] = useState('');

  return (
    <TextInput placeholder={placeholder} value={text} onChangeText={(newText: string) => setText(newText)} />
  );
}