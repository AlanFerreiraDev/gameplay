//*n Tipagem para svg
//* Basicamente importo React, importo as props do SVG (tipagem)
//* embaixo declaro que o ocnteudo será u componente funcional, e exporto o conteudo tipado

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'reat-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
