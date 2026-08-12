import { TextInput, StyleSheet } from 'react-native'

interface InputFieldProps {
  placeholder: string
  value: string
  onChangeText: (text: string) => void
}

export default function InputField({ placeholder, value, onChangeText }: InputFieldProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#A0A0A5"
      value={value}
      onChangeText={onChangeText}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#1C1C1E',
  },
})