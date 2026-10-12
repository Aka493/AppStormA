import React, { useState } from 'react';

import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';

export default function NewPassword({
  onBack,
  onSave,
}) {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const savePassword = () => {
    if (password === '' || repeatPassword === '') {
      Alert.alert('Ошибка', 'Заполните все поля');
      return;
    }

    if (password !== repeatPassword) {
      Alert.alert('Ошибка', 'Пароли не совпадают');
      return;
    }

    Alert.alert(
      'Успешно',
      'Новый пароль сохранён',
      [
        {
          text: 'OK',
          onPress: onSave,
        },
      ]
    );
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
          Новый пароль
        </Text>

        <Text style={styles.subtitle}>
          Придумайте новый пароль для своего аккаунта.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Новый пароль"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Повторите пароль"
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          secureTextEntry
        />

        <Pressable
          style={styles.button}
          onPress={savePassword}
        >
          <Text style={styles.buttonText}>
            Сохранить пароль
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