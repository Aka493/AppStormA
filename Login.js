import React, { useState } from 'react';

import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';

export default function Login({ onForgot, onRegister }) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    if (phone === '' || password === '') {
      Alert.alert('Ошибка', 'Заполните все поля');
    } else {
      Alert.alert('Успешно', 'Вы вошли в аккаунт');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>
          Привет, с возвращением!
        </Text>

        <Text style={styles.subtitle}>
          Войдите в свой аккаунт.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Номер телефона"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="Пароль"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Pressable onPress={onForgot}>
          <Text style={styles.forgot}>
            Забыл пароль?
          </Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={login}
        >
          <Text style={styles.buttonText}>
            Войти
          </Text>
        </Pressable>

        <Pressable onPress={onRegister}>
          <Text style={styles.register}>
            Зарегистрироваться
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
    marginTop: 80,
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
  },

  input: {
    backgroundColor: '#F5F5F7',
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 16,
  },

  forgot: {
    color: '#A900E8',
    textAlign: 'right',
    marginBottom: 25,
    fontSize: 15,
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

  register: {
    color: '#A900E8',
    textAlign: 'center',
    marginTop: 25,
    fontSize: 16,
  },
});