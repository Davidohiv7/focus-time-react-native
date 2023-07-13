import { View, StyleSheet, TextInput } from 'react-native';
import { Dispatch, FC, SetStateAction, useCallback, useState } from 'react';
import RoundedButton from 'components/RoundedButton';
import COLORS from 'utils/colors';
import { BUTTON_SIZE, FONT_SIZES, SPACING } from 'utils/size';
type Props = {
  setCurrentSubject: Dispatch<SetStateAction<string>>;
};

export const Focus: FC<Props> = ({ setCurrentSubject }) => {
  const [subject, setSubject] = useState<string>('');
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add a new task"
        onChangeText={setSubject}
        style={styles.input}
        value={subject}
      />
      <RoundedButton
        title="+"
        style={styles.button}
        size={BUTTON_SIZE.xl}
        onPress={() => setCurrentSubject(subject)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.lg,
  },
  button: {
    marginLeft: SPACING.sm,
  },
  input: {
    backgroundColor: COLORS.white,
    padding: SPACING.md,
    fontSize: FONT_SIZES.lg,
    borderRadius: 10,
    flexGrow: 1,
  },
});
