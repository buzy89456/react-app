import { TextField, TextFieldProps } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { FormSchema } from '../type';

type CustomTextFieldProps = TextFieldProps & {
  name: keyof FormSchema;
};

export const CustomTextField = ({ name, ...props }: CustomTextFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormSchema>();

  return (
    <TextField
      size="small"
      {...register(name)}
      error={!!errors[name]}
      helperText={errors[name]?.message}
      {...props}
    />
  );
};
