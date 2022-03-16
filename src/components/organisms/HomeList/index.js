import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../../molecules'
import { Text } from '../../atoms'

const FAKE_DATA = [
  {
    id: 0,
    image_url:
      'https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg',
  },
  {
    id: 1,
    image_url:
      'https://static.wikia.nocookie.net/ptstarwars/images/1/15/Luke_Skywalker_Ep_7_SWCT.png/revision/latest?cb=20170117003552',
  },
  {
    id: 2,
    image_url:
      'https://static.wikia.nocookie.net/ptstarwars/images/8/80/MandoS2Poster.jpg/revision/latest?cb=20201105221011',
  },
]

export const HomeList = () => {
  return (
    <FlatList
      horizontal
      data={FAKE_DATA}
      renderItem={({ item }) => <Card item={item} />}
      keyExtractor={(item) => item.id}
    />
  )
}
