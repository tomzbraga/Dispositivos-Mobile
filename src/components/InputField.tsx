import { TextInput } from "react-native";
import React, { useState } from 'react';

interface InputFieldProps {
  placeholder: string
  value: string
  onChangeText: (text: string) => void
}

export default function InputField({ placeholder, value, onChangeText }: InputFieldProps) {

  return (
    <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText} />
  );
}