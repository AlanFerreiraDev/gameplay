//* Aqui temo sa nossa definição de telas e paginação
import React from 'react';
//* Tipo de navegação da nossa aplicação em stack
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createStackNavigator();

//* headerMode, para retiar o cabeçalho que aparece
//* o background ransparente para ele respeitar a cor do theme que nós definimos
export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
