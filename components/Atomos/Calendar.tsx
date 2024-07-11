import React from "react";
import { DateData, Calendar as RNCalendar } from "react-native-calendars";

interface CustomCalendarProps {
  onDayPress?: (day: DateData) => void;
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({ onDayPress }) => {
  return (
    <RNCalendar
      onDayPress={(day: DateData) => {
        if (onDayPress) {
          onDayPress(day);
        }
        console.log("selected day", day);
      }}
    />
  );
};

export default CustomCalendar;
