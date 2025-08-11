import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/pt-br";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

dayjs.locale("pt-br");

type CustomDatePickerPropsType = {
  value: Dayjs | null;
  onChange: (newValue: dayjs.Dayjs | null) => void;
}
const CustomDatePicker: React.FC<CustomDatePickerPropsType> = ({ value, onChange }) => {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Selecione a data"
        value={value}
        onChange={onChange}
        format="DD/MM/YYYY"
        slotProps={{
          textField: {
            fullWidth: true,
            size: "small"
          },
        }}
        
      />
    </LocalizationProvider>
  );
}

export default CustomDatePicker;
