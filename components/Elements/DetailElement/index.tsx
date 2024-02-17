import { YGroup, ListItem } from 'tamagui';

import { DetailElementProps } from '~/app/definitions';
export default function DetailElement({ title, subTitle }: Readonly<DetailElementProps>) {
  return (
    <YGroup.Item>
      <ListItem title={title} subTitle={subTitle} />
    </YGroup.Item>
  );
}
