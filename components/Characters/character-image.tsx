import { Avatar } from 'tamagui';

import { CharacterImageProps } from '~/app/definitions';
export default function CharacterImage({ image }: Readonly<CharacterImageProps>) {
  return (
    <Avatar size="$20" alignSelf="center" marginTop={10}>
      <Avatar.Image src={image} borderRadius={10} />
      <Avatar.Fallback bc="red" />
    </Avatar>
  );
}
