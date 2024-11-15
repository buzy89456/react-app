import { useFormContext } from 'react-hook-form';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { FormSchema } from '../type';
import { CustomTextField } from './CustomTextField';

type GenderOption = {
  key: string;
  value: string;
};

const genderOptions: GenderOption[] = [
  { key: 'M', value: 'Male' },
  { key: 'F', value: 'Female' },
];

export const ProfileInformation = () => {
  const { control } = useFormContext<FormSchema>();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Profile Information
      </Typography>
      <Box
        sx={{
          display: 'grid',
          columnGap: 3,
          rowGap: 1,
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        <CustomTextField required name="firstName" label="First Name" />
        <CustomTextField required name="lastName" label="Last Name" />
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <TextField select label="Gender" size="small" {...field}>
              {genderOptions.map((gender) => (
                <MenuItem key={gender.key} value={gender.value}>
                  {gender.value}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
        <Controller
          control={control}
          name="birth"
          render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of Birth"
                format="YYYY/MM/DD"
                maxDate={dayjs().subtract(1, 'day')}
                slotProps={{ textField: { size: 'small' } }}
                value={field.value}
                inputRef={field.ref}
                onChange={(date) => {
                  field.onChange(date);
                }}
              />
            </LocalizationProvider>
          )}
        />
      </Box>
    </>
  );
};
