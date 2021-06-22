//* Aqui centralizamos as imprtações de aocrdo com o usuario
//* Aqui temos o contexto de rotas
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthRoutes } from './auth.routes';

//* O NavigationContainer cuida do conatetxo de rotas,e  de tyodo os histórico de rotas, se eu estiver em um a outra rota ele vai se lembrar onde eu estav aantes de navegar para outra
export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
