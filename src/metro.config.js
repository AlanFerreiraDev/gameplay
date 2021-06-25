//* depois de instalar as duas bibliotecas para lidar com svg ( expo install react-native-svg  ) e para conseguir lidar com o svg ( expo install react-native-svg ) como componentes, ele pede para que eu crie esse arquivo na raiz em src, com as seguintes configurções abaixo

const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();
