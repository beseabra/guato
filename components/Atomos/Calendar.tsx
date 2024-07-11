import React from "react";
import { DateData, Calendar as RNCalendar } from "react-native-calendars";

interface CustomCalendarProps {
  onDayPress?: (day: DateData) => void;
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({ onDayPress }) => {
  const handleDayPress = (day: DateData) => {
    const selectedDate = new Date(day.year, day.month - 1, day.day + 1);
    selectedDate.setHours(0, 0, 0, 0);
    if (onDayPress) {
      onDayPress({
        ...day,
        dateString: selectedDate.toISOString().split("T")[0],
      });
    }
  };

  return <RNCalendar onDayPress={(day: DateData) => handleDayPress(day)} />;
};

export default CustomCalendar;
