import React from 'react';

import { View, Text } from 'react-native';
import { WEEKDAYS } from '../../enums';

function WeekDaysDisplay() {
  return (
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      borderBottomColor: '#a7abb640',
      borderBottomWidth: 1,
      paddingTop: 10,
      paddingBottom: 5,
      alignItems: 'center'
    }}>
      {
        WEEKDAYS.map((weekday) => {
          return (
            <View style={{ width: '14%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: .3}}>
              <Text
                style={{
                  color: '#a7abb6'
                }}
              >{weekday}</Text>
            </View>
            )
        })
      }
    </View>
  )
}

export default WeekDaysDisplay;