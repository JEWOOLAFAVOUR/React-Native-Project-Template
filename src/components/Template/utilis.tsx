import {StyleSheet, View, Image, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-toast-message';
import {COLORS, images, SIZES} from '../../constants';

// Toast function with type enforcement
export const sendToast = (type: 'success' | 'error' | 'info', text: string) => {
  Toast.show({
    type: type || 'error',
    text1: text,
  });
};

// Props for Roller
interface RollerProps {
  visible: boolean;
}

// Loading spinner overlay
export const Roller: React.FC<RollerProps> = ({visible}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 25000);

    return () => clearTimeout(timer);
  }, []);

  return <Spinner visible={loading && visible} size="large" color="#182952" />;
};
