import React, { useState } from 'react';

import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';

export default function Registration({ onBack }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const registration = () => {
    if (name === '' || phone === '' || password === '') {
      Alert.alert('Ошибка', 'Заполните все поля');
    } else {
      Alert.alert(
        'Успешно',
        'Регистрация завершена',
        [
          {
            text: 'OK',
            onPress: onBack,
          },
        ]
      );
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
          Регистрация
        </Text>

        <Text style={styles.subtitle}>
          Создайте новый аккаунт.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Имя"
          value={name}
          onChangeText={setName}
        />

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

        <Pressable
          style={styles.button}
          onPress={registration}
        >
          <Text style={styles.buttonText}>
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
  },

  input: {
    backgroundColor: '#F5F5F7',
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#A900E8',
    padding: 17,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});