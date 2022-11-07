import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';
import { RootTabScreenProps } from '../../../navigation/types';

type CardListProps = {};

const CardList = (props: CardListProps) => {
  const navigation =
    useNavigation<RootTabScreenProps<'CardList'>['navigation']>();
  return (
    <>
      <Button
        title='Go to Detail'
        onPress={() => navigation.getParent().navigate('CardDetail', { id: 0 })}
      />
    </>
  );
};

export default CardList;
