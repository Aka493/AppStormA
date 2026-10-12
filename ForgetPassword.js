import React, { useState } from 'react';

import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';

export default function ForgetPassword({
  onBack,
  onContinue,
}) {
  const [phone, setPhone] = useState('');

  const continueButton = () => {
    if (phone === '') {
      Alert.alert('Ошибка', 'Введите номер телефона');
    } else {
      onContinue();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <Pressable onPress={onBack}>
          <Text style={styles.back}>
            ← Назад
          </Text>
        </Pressable>

        <Text style={styles.title}>
          Восстановление пароля
        </Text>

        <Text style={styles.subtitle}>
          Введите свой номер телефона,
          чтобы восстановить пароль.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Номер телефона"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <Pressable
          style={styles.button}
          onPress={continueButton}
        >
          <Text style={styles.buttonText}>
            Продолжить
          </Text>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  content: {
    padding: 25,
    marginTop: 50,
  },

  back: {
    fontSize: 18,
    color: '#A900E8',
    marginBottom: 40,
  },

  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#222',
  },

  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginTop: 10,
    marginBottom: 30,
    lineHeight: 23,
  },

  input: {
    backgroundColor: '#F5F5F7',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#A900E8',
    padding: 17,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});