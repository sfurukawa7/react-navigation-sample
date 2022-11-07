import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';
import { RootStackScreenProps } from '../../navigation/types';

type CardEditProps = {};

const CardEdit = (props: CardEditProps) => {
  const navigation =
    useNavigation<RootStackScreenProps<'CardEdit'>['navigation']>();
  return (
    <>
      <Button
        title='Go to Card-Edit-Success'
        onPress={() => navigation.push('CardEditSuccess')}
      />
    </>
  );
};

export default CardEdit;
