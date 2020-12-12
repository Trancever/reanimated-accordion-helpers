import * as React from 'react';
import { StyleSheet, View } from 'react-native';

// import { white } from './colors';

type Props = {
  children: React.ReactNode;
};

export function Screen({ children }: Props) {
  return <View style={styles.screen}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // backgroundColor: white,
    padding: 16,
  },
});