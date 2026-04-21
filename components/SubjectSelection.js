import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SubjectSelection({ route, navigation }) {
  const { grade } = route.params;
  const subjects = ['Math', 'Science', 'Arabic', 'French'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Subject for Grade {grade}</Text>
      <View style={styles.grid}>
        {subjects.map((subject) => (
          <TouchableOpacity
            key={subject}
            style={styles.button}
            onPress={() =>
              navigation.navigate('ChapterSelection', { grade, subject })
            }
          >
            <Text style={styles.buttonText}>{subject}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFAF0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#FF7F50',
    margin: 10,
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});
