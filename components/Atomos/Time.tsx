import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Modal, Platform } from "react-native";

interface TimePickerProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: (time: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({
  visible,
  onClose,
  onConfirm,
}) => {
  const [selectedTime, setSelectedTime] = useState<Date>(new Date());

  const handleChange = (event: any, date?: Date) => {
    if (date) {
      setSelectedTime(date);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const formattedTime = `${hours}:${
        minutes < 10 ? `0${minutes}` : minutes
      }`;
      onConfirm(formattedTime);
    }
    onClose();
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <DateTimePicker
        value={selectedTime}
        mode="time"
        display={Platform.OS === "ios" ? "spinner" : "default"}
        onChange={handleChange}
      />
    </Modal>
  );
};

export default TimePicker;
