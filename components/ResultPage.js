import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchContentFromBard } from '../utils/bardApi';

export default function ResultPage({ route }) {
  const { grade, subject, chapter, difficulty, action } = route.params;
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await fetchContentFromBard({
        grade,
        subject,
        chapter,
        difficulty,
        action,
      });
      setContent(result);
      setLoading(false);
    };
    fetchData();
  }, [grade, subject, chapter, difficulty, action]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000FF" />
      ) : (
        <Text style={styles.content}>{content}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6FA',
    padding: 20,
  },
  content: {
    fontSize: 18,
    textAlign: 'center',
  },
});
