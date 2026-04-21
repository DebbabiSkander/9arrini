import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function GradeSelection({ navigation }) {
  const grades = [1, 2, 3, 4, 5, 6];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Grade</Text>
      <View style={styles.grid}>
        {grades.map((grade) => (
          <TouchableOpacity
            key={grade}
            style={styles.button}
            onPress={() => navigation.navigate('SubjectSelection', { grade })}
          >
            <Text style={styles.buttonText}>Grade {grade}</Text>
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
    backgroundColor: '#F0F8FF',
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
    backgroundColor: '#4682B4',
    margin: 10,
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});
