import React, { useState } from 'react';
import { View } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';

import { styles } from './styles';

export function Home() {
  const [category, setCategory] = useState('')

  // * Função para tickar a categoria, se estiver marcadopara eu não marcar de novo
  function handleCategorySelect( categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }
  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <View>
        <CategorySelect 
          categorySelected={category}
          setCategory={setCategory}
        />
      </View>
    </View>
  );
}
