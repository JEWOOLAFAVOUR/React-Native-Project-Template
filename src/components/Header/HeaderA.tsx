import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {icons, SIZES} from '../../constants';
import {useNavigation, NavigationProp} from '@react-navigation/native';

interface HeaderAProps {
  title?: string;
}

const HeaderA: React.FC<HeaderAProps> = ({title}) => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={icons.arrowleft2}
          style={{height: SIZES.h1 * 0.9, width: SIZES.h1 * 0.9}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderA;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.width * 0.05,
    marginTop: SIZES.base,
  },
});
