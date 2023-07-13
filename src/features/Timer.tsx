import { Countdown, RoundedButton, ProgressBar } from 'components';
import { FC, useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import COLORS from 'utils/colors';
import { BUTTON_SIZE, FONT_SIZES, SPACING } from 'utils/size';
import { getVibrationPattern } from 'utils/vibration';
import Timing from './Timing';
import { useKeepAwake } from 'expo-keep-awake';

type Props = {
  currentSubject: string;
  onTimerEnd: () => void;
  clearSubject: () => void;
};

const Timer: FC<Props> = ({ currentSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isPaused, setIsPaused] = useState(true);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.05);
  const onEnd: () => void = () => {
    setIsPaused(true);
    setProgress(1);
    Vibration.vibrate(getVibrationPattern(0.5, 3));
    onTimerEnd();
  };
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={isPaused}
          onProgress={(progress: number) => setProgress(progress)}
          onEnd={onEnd}
        />
        <View style={styles.dashboardContainer}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{currentSubject}</Text>
        </View>
      </View>
      <ProgressBar progress={progress} />
      <View style={styles.timingContainer}>
        <Timing setMinutes={setMinutes} />
      </View>
      <View style={styles.buttonContainer}>
        <RoundedButton
          title={isPaused ? 'Start' : 'Pause'}
          size={BUTTON_SIZE.xxxl}
          onPress={() => {
            setIsPaused((prev) => !prev);
          }}
          style={styles.button}
        />
        <RoundedButton
          title="Cancel"
          size={BUTTON_SIZE.xxl}
          onPress={() => clearSubject()}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: SPACING.md,
  },
  timingContainer: {
    paddingTop: SPACING.xxl,
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashboardContainer: {
    paddingTop: SPACING.xxl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONT_SIZES.xxl,
  },
  task: {
    color: COLORS.white,
    fontSize: FONT_SIZES.xl,
  },
});

export default Timer;
