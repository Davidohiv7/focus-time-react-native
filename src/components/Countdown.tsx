import { FC, useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import COLORS from 'utils/colors';
import { FONT_SIZES, SPACING } from 'utils/size';
import { formatTime, minutesToMils } from 'utils/time';

type Props = {
  minutes?: number;
  isPaused: boolean;
  onProgress: (progress: number) => void;
  onEnd: () => void;
};

const Countdown: FC<Props> = ({
  minutes = 0.1,
  isPaused,
  onProgress,
  onEnd,
}) => {
  const interval: React.MutableRefObject<null | NodeJS.Timer> = useRef(null);
  const [mils, setMils] = useState<number | null>(null);

  const countDown = () => {
    setMils((time: null | number) => {
      if (time === 0) {
        if (interval.current) {
          clearInterval(interval.current);
        }
        onEnd();
        return minutesToMils(minutes);
      }
      const timeLeft = time ? time - 1000 : null;
      return timeLeft;
    });
  };

  useEffect(() => {
    setMils(minutesToMils(minutes));
  }, [minutes]);

  useEffect(() => {
    onProgress((mils || 0) / minutesToMils(minutes));
  }, [mils]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, [isPaused]);

  const minute = Math.floor((mils || 0) / 1000 / 60) % 60;
  const seconds = Math.floor((mils || 0) / 1000) % 60;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {formatTime(minute)}:{formatTime(seconds)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING.lg,
    backgroundColor: COLORS.blue,
    borderRadius: 20,
  },
  text: {
    color: COLORS.white,
    fontSize: FONT_SIZES.xxxl,
    fontWeight: 'bold',
  },
});

export default Countdown;
