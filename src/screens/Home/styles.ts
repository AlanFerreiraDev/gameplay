import { StyleSheet } from 'react-native';
//* Lib do iphone para impedir que os iphones que tem a tela mais baixa que o o android, os ícones fiquem desproporcionais, geralmente isso acontece nos modelos de iphone 10
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //* Aqui eu uso a propriedade, sempre que for iphone ele vai contar a prop mais 26
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 42,
  },
});
