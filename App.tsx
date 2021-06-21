import React from 'react';
//* Toda vez que eu for importar algum compoennte que ue criei com chaves, eu preciso dar o export sem default
import { SignIn } from './src/screens/Signin';

export default function App() {
  return <SignIn />;
}
