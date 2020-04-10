import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { getFormattedDate } from '../../../../utils/date.utils';

function CalendarHeader({
  activeMonth,
  handleMonthChange,
}) {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={handleMonthChange(-1)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 5,
        }}>
        <FontAwesomeIcon icon={faChevronLeft} color='#494949' size={16} />
      </TouchableOpacity>
      <View
        style={{
          minWidth: 200,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 21,
            color: '#494949',
            // fontFamily: 'HelveticaBold'
          }}
        >{getFormattedDate(activeMonth, 'MMMM YYYY')}</Text>
      </View>
      <TouchableOpacity
        onPress={handleMonthChange(1)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <FontAwesomeIcon icon={faChevronRight} color='#494949' size={16} />
      </TouchableOpacity>
    </View>
  )
}

export default CalendarHeader;