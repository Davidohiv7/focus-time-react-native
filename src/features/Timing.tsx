import { View, StyleSheet, TextInput } from 'react-native';
import { Dispatch, FC, SetStateAction, useCallback, useState } from 'react';
import RoundedButton from 'components/RoundedButton';
import { BUTTON_SIZE, SPACING } from 'utils/size';
type Props = {
  setMinutes: Dispatch<SetStateAction<number>>;
};

const Timing: FC<Props> = ({ setMinutes }) => {
  return (
    <View style={styles.timingButton}>
      <RoundedButton
        title="5"
        onPress={() => setMinutes(5)}
        size={BUTTON_SIZE.xl}
      />
      <RoundedButton
        title="10"
        onPress={() => setMinutes(10)}
        size={BUTTON_SIZE.xl}
      />
      <RoundedButton
        title="15"
        onPress={() => setMinutes(15)}
        size={BUTTON_SIZE.xl}
      />
      <RoundedButton
        title="20"
        onPress={() => setMinutes(20)}
        size={BUTTON_SIZE.xl}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: SPACING.xxl,
  },
});

export default Timing;
