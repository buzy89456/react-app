import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CustomTextField } from './CustomTextField';

export const LoginInformation = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Login Information
      </Typography>
      <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
        Choose one login methods to input - either email address or phone number
      </Typography>
      <Box
        sx={{
          display: 'grid',
          columnGap: 3,
          rowGap: 1,
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        <CustomTextField name="email" label="Email Address" />
        <CustomTextField name="phoneNumber" label="Phone Number" />
        <CustomTextField
          name="password"
          label="Password"
          type="password"
          required
        />
        <CustomTextField
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          required
        />
      </Box>
    </>
  );
};
