import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ChapterSelection({ route, navigation }) {
  const { grade, subject } = route.params;
  const chapters = ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Choose a Chapter in {subject} for Grade {grade}
      </Text>
      <View style={styles.grid}>
        {chapters.map((chapter) => (
          <TouchableOpacity
            key={chapter}
            style={styles.button}
            onPress={() =>
              navigation.navigate('OptionsPage', { grade, subject, chapter })
            }
          >
            <Text style={styles.buttonText}>{chapter}</Text>
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
    backgroundColor: '#F5FFFA',
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
    backgroundColor: '#32CD32',
    margin: 10,
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});
