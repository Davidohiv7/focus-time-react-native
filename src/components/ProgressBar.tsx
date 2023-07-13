import { FC, useMemo } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import COLORS from 'utils/colors';
import { FONT_SIZES, SPACING } from 'utils/size';

type Props = {
  progress: number;
};

const HEIGHT = FONT_SIZES.lg;
const BORDER = 8;

const getWidth = (advance: number) =>
  advance * (Dimensions.get('window').width - SPACING.xxxl);

const ProgressBar: FC<Props> = ({ progress }) => {
  const progresWidth = useMemo(() => {
    const width = getWidth(progress) - BORDER * 2 * 0.75;
    return width > 0 ? width : 0;
  }, [progress]);
  return (
    <View style={styles.root}>
      <View style={[styles.progressBarContainer, { width: getWidth(1) }]}>
        <View style={[styles.progressBar, { width: progresWidth }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: SPACING.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarContainer: {
    backgroundColor: COLORS.white,
    height: HEIGHT,
    justifyContent: 'center',
    paddingHorizontal: BORDER * 0.8,
    borderRadius: 20,
  },
  progressBar: {
    backgroundColor: COLORS.blue,
    height: HEIGHT - BORDER,
    borderRadius: 20,
  },
});

export default ProgressBar;
