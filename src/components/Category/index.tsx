import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgProps } from 'react-native-svg';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

//* Minha props vai ser as propriedades do botão, mais o que eu definir, title como string e icon como um svg dinamico, e para isso eu importei o svgProps, e o con será um componente funcional de SvgProps
//* e um checked, para mostrar quando o cartão estará marcado ou desmarcado, será um booleano com uma  condicional
type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

//* Pego as props title, e o icon e transformo em Icon com letra maiuscul, pois viou usar ele como componente e no react todo componente tem letra maiuscula, o checked começa como não marcado, e o rest é referente ao RectButton
export function Category({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: Props) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors= {[secondary50, secondary70]}
      >
        <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
          <View 
            style={checked ? styles.checked : styles.check }
          />
            <Icon 
              width={48}
              height={48}
            />
          <Text style={styles.title}>
            { title }
          </Text>
        </View>
      </LinearGradient>
    </RectButton>
  );
}
