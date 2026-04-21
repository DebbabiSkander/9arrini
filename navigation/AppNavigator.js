import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GradeSelection from '../components/GradeSelection';
import SubjectSelection from '../components/SubjectSelection';
import ChapterSelection from '../components/ChapterSelection';
import OptionsPage from '../components/OptionsPage';
import ResultPage from '../components/ResultPage';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GradeSelection" component={GradeSelection} />
      <Stack.Screen name="SubjectSelection" component={SubjectSelection} />
      <Stack.Screen name="ChapterSelection" component={ChapterSelection} />
      <Stack.Screen name="OptionsPage" component={OptionsPage} />
      <Stack.Screen name="ResultPage" component={ResultPage} />
    </Stack.Navigator>
  );
}
