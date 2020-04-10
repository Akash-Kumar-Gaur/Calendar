import React from 'react';

import { View, Text } from 'react-native';
import { getDaysInMonth, getDayOfWeek, getStartOfMonth, getFormattedDate, addDays } from '../../../../utils/date.utils';
import moment from 'moment';

function RenderDays({
  activeMonth,
}) {
  const dateFormat = 'DD-MM-YYYY';
  const totalActiveDays = getDaysInMonth(activeMonth);
  const firstDay = getDayOfWeek(getStartOfMonth(activeMonth)) || 7;
  const daysArray = Array(firstDay - 1).fill({ label: '', actualDate: '' });
  for (var i = 0; i < totalActiveDays; i++) {
    daysArray.push({ label: i + 1, actualDate: addDays(getStartOfMonth(activeMonth), i)});
  }

  return (
    <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
      {
        daysArray.map((day) => {
          return (
            <View style={{
              width: '14%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: .3,
              padding: 10,
              backgroundColor: (getFormattedDate(day.actualDate, dateFormat) === moment().format(dateFormat)) ? '#d4d6dc70' : '#fff',
              borderRadius: 25
            }}>
              <Text>{day.label}</Text>
            </View>
          )
        })
      }
    </View>
  );
};

export default RenderDays;