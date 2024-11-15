import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dayjs } from 'dayjs';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { FormSchema, formSchema } from './type';
import {
  LoginInformation,
  ProfileInformation,
  FormDialog,
  ColorButton,
} from './components';

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [jsonData, setJsonData] = useState<string>('');

  const handleClose = () => {
    setOpen(false);
  };

  const methods = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { gender: 'Male', birth: null as Dayjs | null },
  });
  const { handleSubmit } = methods;

  const onSubmit = handleSubmit((data) => {
    setJsonData(JSON.stringify(data, null, 2));
    setOpen(true);
  });

  return (
    <Container maxWidth="sm" sx={{ pt: 10 }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ borderBottom: 3, borderColor: '#ffd000' }}
      >
        User Data
      </Typography>

      <FormProvider {...methods}>
        <ProfileInformation />
        <LoginInformation />
      </FormProvider>

      <ColorButton variant="contained" onClick={onSubmit} sx={{ mt: 3 }}>
        Submit
      </ColorButton>

      <FormDialog open={open} jsonData={jsonData} onClose={handleClose} />
    </Container>
  );
}

export default App;
