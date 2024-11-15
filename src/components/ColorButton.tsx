import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

export const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText('#ffd000'),
  backgroundColor: '#ffd000',
  '&:hover': {
    backgroundColor: '#ffcc00',
  },
}));
