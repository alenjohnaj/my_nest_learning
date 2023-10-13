import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function PageHeader() {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Trading History
        </Typography>
        <Typography variant="subtitle2">
          My Trading history and Notes Taking
        </Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={() =>
            window.open(
              'https://docs.google.com/spreadsheets/d/1GemccxAftnQK8UgdB5r7DHuLFhLUL3WphJ6AzlWCkH0/edit#gid=0',
              '_blank'
            )
          }
        >
          Create transaction
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
