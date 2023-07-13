import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import COLORS from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { useState } from 'react';
import { Text } from 'react-native-paper';
import Timer from 'features/Timer';
import { FocusHistory } from 'features';
import { SubjectHistory } from 'utils/types';
import { SPACING } from 'utils/size';
export default function App() {
  const [currentSubject, setCurrentSubject] = useState<string>('');
  const [subjectHistory, setSubjectHistory] = useState<SubjectHistory[]>([]);
  return (
    <SafeAreaView style={styles.container}>
      {currentSubject ? (
        <Timer
          currentSubject={currentSubject}
          onTimerEnd={() => {
            setSubjectHistory((prev) => [
              ...prev,
              { id: prev.length + 1, title: currentSubject },
            ]);
          }}
          clearSubject={() => setCurrentSubject('')}
        />
      ) : (
        <>
          <Focus setCurrentSubject={setCurrentSubject} />
          <FocusHistory subjectHistory={subjectHistory} />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.darkBlue,
  },
});
