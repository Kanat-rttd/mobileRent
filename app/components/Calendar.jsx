import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import React, { useState } from 'react';
import { View } from 'react-native';

function DatePicker() {
  const [selectedDates, setSelectedDates] = useState({});

  const onDayPress = (day) => {
    setSelectedDates((prevDates) => ({
      ...prevDates,
      [day.dateString]: {
        selected: true,
        startingDay: true,
        endingDay: true,
        color: 'blue'
      }
    }));
  };

  return (
    <View>
      <Calendar
        markingType={'period'}
        markedDates={selectedDates}
        onDayPress={onDayPress}
      />
    </View>
  );
}

export default DatePicker;