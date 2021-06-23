import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 42,

  },
  content: {
    marginTop: 42
  },
  matches: {
    marginTop: 24,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 5
  }
})