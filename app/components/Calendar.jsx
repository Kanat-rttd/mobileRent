import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

function DatePicker({name, price}) {
  // const [selectedDates, setSelectedDates] = useState({});
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [daysSelected, setDaysSelected] = useState(0);

  const generateMarketDates = () => {
    let markedDates = {};

    if (startDate && !endDate) {
      markedDates[startDate] = {
        selected: true,
        startingDay: true,
        endingDay: true,
        color: "red",
      };
    } else if (startDate && endDate) {
      let currentDate = new Date(startDate);
      let lastDate = new Date(endDate);

      while (currentDate <= lastDate) {
        const dateString = currentDate.toISOString().split("T")[0];
        markedDates[dateString] = {
          selected: true,
          color: "red",
          ...(dateString === startDate && {startingDay: true}),
          ...(dateString === endDate && {endingDay: true}),
        };
        currentDate.setDate(currentDate.getDate() + 1)
      }
    };

    console.log(markedDates)
    return markedDates;
  };

  const onDayPress = (day) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day.dateString);
      setEndDate(null);
    } else if(startDate && !endDate) {
      const isBeforeStartDate = new Date(day.dateString) < new Date(startDate);
      if (isBeforeStartDate) {
        setStartDate(day.dateString);
      } else {
        setEndDate(day.dateString);
      };
    };
  };

  useEffect(() => {
    // Вычисляем количество дней, когда startDate и endDate изменяются
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      setDaysSelected(diffDays + 1); // +1, так как начальный и конечный дни включены
    }else if (startDate) { 
      // Если выбрана только одна дата, устанавливаем daysSelected в 1
      setDaysSelected(1); 
    } else {
      setDaysSelected(0); // Сбрасываем, если startDate или endDate не установлены
    }
  }, [startDate, endDate]);

  return (
    <View>
      <Calendar
        markingType={'period'}
        markedDates={generateMarketDates()}
        onDayPress={onDayPress}
      />
      {daysSelected !== 0 && 
        <Text className="text-2xl font-semibold mt-4">
          Цена: {price * daysSelected}000 ₸
        </Text>
      }
      
    </View>
  );
}

export default DatePicker;