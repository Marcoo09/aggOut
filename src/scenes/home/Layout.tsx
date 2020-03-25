import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from './styles';
import {LayoutProps} from './types';
import {getTypographyWithColor, Typography} from '../../style/typography';
import {Theme} from '../../style/Theme';
import {EmptyList} from '../../components/emptyList/emptyList';
import {keyExtractor} from '../../common/keyExtractor';

const mockData = [
  {
    productName: 'Comida de perros',
    zone: 'Itusaingo',
    timeAvailability: [
      {
        hourFrom: '17:00',
        hourTo: '18:00',
      },
      {
        hourFrom: '10:00',
        hourTo: '12:00',
      },
    ],
  },
  {
    productName: 'Comida de perros',
    zone: 'Itusaingo',
    timeAvailability: [
      {
        hourFrom: '17:00',
        hourTo: '18:00',
      },
      {
        hourFrom: '10:00',
        hourTo: '12:00',
      },
    ],
  },
  {
    productName: 'Comida de perros',
    zone: 'Itusaingo',
    timeAvailability: [
      {
        hourFrom: '17:00',
        hourTo: '18:00',
      },
      {
        hourFrom: '10:00',
        hourTo: '12:00',
      },
    ],
  },
  {
    productName: 'Comida de perros',
    zone: 'Itusaingo',
    timeAvailability: [
      {
        hourFrom: '17:00',
        hourTo: '18:00',
      },
      {
        hourFrom: '10:00',
        hourTo: '12:00',
      },
    ],
  },
  {
    productName: 'Comida de perros',
    zone: 'Itusaingo',
    timeAvailability: [
      {
        hourFrom: '17:00',
        hourTo: '18:00',
      },
      {
        hourFrom: '10:00',
        hourTo: '12:00',
      },
    ],
  },
  {
    productName: 'Comida de perros',
    zone: 'Itusaingo',
    timeAvailability: [
      {
        hourFrom: '17:00',
        hourTo: '18:00',
      },
      {
        hourFrom: '10:00',
        hourTo: '12:00',
      },
    ],
  },
  {
    productName: 'Comida de perros',
    zone: 'Itusaingo',
    timeAvailability: [
      {
        hourFrom: '17:00',
        hourTo: '18:00',
      },
      {
        hourFrom: '10:00',
        hourTo: '12:00',
      },
    ],
  },
  {
    productName: 'Comida de perros',
    zone: 'Itusaingo',
    timeAvailability: [
      {
        hourFrom: '17:00',
        hourTo: '18:00',
      },
      {
        hourFrom: '10:00',
        hourTo: '12:00',
      },
    ],
  },
];

export const Layout: React.FunctionComponent<LayoutProps> = ({renderItem}) => (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <Text
        style={getTypographyWithColor(Theme.BLACK, Typography.HEADER2_BOLD)}>
        {'Home'}
      </Text>
    </View>
    <View style={styles.listContainer}>
      <FlatList
        keyExtractor={keyExtractor}
        data={mockData}
        ListEmptyComponent={<EmptyList message={'lista vacía'} />}
        renderItem={renderItem}
      />
    </View>
  </View>
);
