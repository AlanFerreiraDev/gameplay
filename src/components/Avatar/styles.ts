import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 49,
    height: 49,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 22,
  },
  avatar: {
    // * Uso a imagem ligeiramente menor que o tamanho do conatiner para dar efeito de gradient
    width: 46,
    height: 46,
    borderRadius: 8,
  },
});
