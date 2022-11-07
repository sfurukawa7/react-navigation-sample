import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, Text } from 'react-native';
import { RootStackScreenProps } from '../../navigation/types';

type CardDetailProps = {};

const CardDetail = (props: CardDetailProps) => {
  const navigation =
    useNavigation<RootStackScreenProps<'CardDetail'>['navigation']>();
  const route = useRoute<RootStackScreenProps<'CardDetail'>['route']>();

  return (
    <>
      <Button
        title='Go to Card-Edit'
        onPress={() => navigation.push('CardEdit')}
      />
      <Text>{route.params.id}</Text>
    </>
  );
};

export default CardDetail;
