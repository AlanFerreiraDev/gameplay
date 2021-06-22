// * ReactNode é qualçquer elemento filho do react
import React, { ReactNode } from 'react';
//* expo, ver documentação
import { LinearGradient } from 'expo-linear-gradient';
//* CSS
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

//* Tipagem do componente
//* Então eu falo que meu filho é qualquer elemento do react
type Props = {
  children: ReactNode;
};

//* Vou dizer que meu componente vai receber um filho, children
export function Background({ children }: Props) {
  //* Para fica mais fácil, eu faço a desustruturação e assim tenho as variáveis com menos verbosidade
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  );
}
