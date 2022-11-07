import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';
import { RootStackScreenProps } from '../../navigation/types';

type CardEditSuccessProps = {};

const CardEditSuccess = (props: CardEditSuccessProps) => {
  const navigation =
    useNavigation<RootStackScreenProps<'CardEditSuccess'>['navigation']>();
  return (
    <>
      <Button title='Finish' onPress={() => navigation.pop(2)} />
    </>
  );
};

export default CardEditSuccess;
