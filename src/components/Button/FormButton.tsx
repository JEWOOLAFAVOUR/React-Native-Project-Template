import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS, SIZES} from '../../constants';

// Define the props interface
interface FormButtonProps {
  title: string;
  onPress: () => void;
  btnStyle?: ViewStyle;
  textCtn?: TextStyle;
}

// Fix the component declaration
const FormButton = ({
  title,
  onPress,
  btnStyle,
  textCtn,
}: FormButtonProps): React.ReactElement => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, btnStyle]}>
      <Text style={[styles.text, textCtn]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  container: {
    height: SIZES.h1 * 1.8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.base,
    marginBottom: SIZES.h4,
  },
  text: {
    ...FONTS.h3,
    color: COLORS.white,
  },
});
