import { CSSProperties, FC } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import COLORS from 'utils/colors';
import { SPACING } from 'utils/size';

type Props = {
  size?: number;
  title: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: (event: GestureResponderEvent) => void;
};

const RoundedButton: FC<Props> = ({
  size = SPACING.xxl,
  onPress,
  textStyle,
  style,
  title,
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={onPress}>
      <Text style={[styles(size).text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = (
  size: number
): { [key: string]: StyleProp<ViewStyle | TextStyle> } => ({
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.white,
    borderWidth: 2,
  },
  text: { color: COLORS.white, fontSize: size / 3 },
});

export default RoundedButton;
