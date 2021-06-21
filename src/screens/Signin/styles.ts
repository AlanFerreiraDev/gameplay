import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

//* No RN o flex-box é padrão para posicionamento de elementos
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
  image: {
    // * Quando quero usar símbolos ou letras com npúmeros, coloco entre aspas simples
    width: '100%',
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16,
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 64,
  },
});
