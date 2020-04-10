import React, { useState } from 'react';
import { View } from 'react-native';
import CalendarHeader from './partials/CalendarHeader';
import moment from 'moment';
import { updateMonth } from '../../utils/date.utils';
import WeekDaysDisplay from './partials/WeekDaysDisplay';
import RenderDays from './partials/RenderDays';

export default function MyCalendar() {

  const [activeMonth, setActiveMonth] = useState(moment());

  function handleMonthChange(value) {
    setActiveMonth(updateMonth(activeMonth, value));
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#82828280', width: '100%' }}>
      <View style={{ width: 320, height: 'auto', backgroundColor: '#fff', padding: 25 }}>
        <CalendarHeader activeMonth={activeMonth} handleMonthChange={(value) => handleMonthChange.bind(null, value)} />
        <WeekDaysDisplay />
        <RenderDays activeMonth={activeMonth} />
      </View>
    </View>
  );
}
