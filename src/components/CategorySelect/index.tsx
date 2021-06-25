import React from 'react';
//* ScrollView, é para ativar a rolagem
import { ScrollView } from 'react-native';

import { styles } from './styles';
import { categories } from '../../utils/categories';
import { Category } from '../Category';

//* Tipagem p category selected, que será uma string
type Props = {
  categorySelected: string
  setCategory: (categoryId: string) => void 
}

//* showsHorizontalScrollIndicator -> Para não aparecer a barra de rolagem
//* contentCOntainerStyle -> quando a listaem terminar o espaçamento da borda bater com o espaçamento do botão
export function CategorySelect({ categorySelected, setCategory} : Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: 40 }}
    >
      {categories.map((category) => {
        <Category 
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected} 
          onPress={() => setCategory(category.id)}
    />
      })}
    </ScrollView>
  );
}
