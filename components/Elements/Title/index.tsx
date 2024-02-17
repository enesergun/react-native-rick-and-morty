import { H2 } from 'tamagui';

import { TitleProps } from '~/app/definitions';
export default function Title({ margin, text, color, centered = false }: Readonly<TitleProps>) {
  return (
    <H2 margin={margin} textAlign={centered ? 'center' : 'auto'} color={color}>
      {text}
    </H2>
  );
}
