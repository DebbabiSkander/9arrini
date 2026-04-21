import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Slider } from 'react-native';

export default function OptionsPage({ route, navigation }) {
  const { grade, subject, chapter } = route.params;
  const [difficulty, setDifficulty] = useState(1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        What would you like to do in {subject}, {chapter}?
      </Text>
      <View style={styles.options}>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() =>
            navigation.navigate('ResultPage', {
              grade,
              subject,
              chapter,
              difficulty,
              action: 'summary',
            })
          }
        >
          <Text style={styles.buttonText}>View Summary</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() =>
            navigation.navigate('ResultPage', {
              grade,
              subject,
              chapter,
              difficulty,
              action: 'exercises',
            })
          }
        >
          <Text style={styles.buttonText}>Generate Exercises</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sliderLabel}>Select Difficulty: {difficulty}</Text>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={5}
        step={1}
        value={difficulty}
        onValueChange={(value) => setDifficulty(value)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFACD',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  options: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#6A5ACD',
    margin: 10,
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  sliderLabel: {
    fontSize: 18,
    marginTop: 20,
  },
  slider: {
    width: '80%',
    marginTop: 10,
  },
});
