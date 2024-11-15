import { DialogContent } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';

type Props = {
  open: boolean;
  jsonData: string;
  onClose: () => void;
};

export const FormDialog = ({ open, jsonData, onClose }: Props) => (
  <Dialog onClose={onClose} open={open}>
    <DialogContent>
      <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
        {jsonData}
      </Typography>
    </DialogContent>
  </Dialog>
);
