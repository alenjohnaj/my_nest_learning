import {
  Box,
  Typography,
  Card,
  Grid,
  ListItem,
  List,
  ListItemText,
  Divider,
  Button,
  ListItemAvatar,
  Avatar,
  Switch,
  CardHeader,
  Tooltip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  useTheme,
  styled,
  Container
} from '@mui/material';
import React from 'react';

const LearningDocumentation = () => {
  const AvatarWrapper = styled(Avatar)(
    ({ theme }) => `
              width: ${theme.spacing(5)};
              height: ${theme.spacing(5)};
          `
  );
  return (
    <div>
      <Container>
        <Grid pt={2}>
          <iframe
            src="https://docs.google.com/document/d/e/2PACX-1vS0XRVVgLpfZo3II4O-4Ha-LwecZ0h8YOaKcCcmlRTLsDDvi0loGK9GVYAXvMM4ZRsQxk7lKZs8aHWw/pub?embedded=true"
            title="Website"
            width="100%"
            height="800px"
          ></iframe>
        </Grid>
        <Grid py={1}>
          <Card>
            <List>
              <ListItem sx={{ p: 3 }}>
                <ListItemAvatar sx={{ pr: 2 }}>
                  <AvatarWrapper src="https://static.vecteezy.com/system/resources/previews/027/179/392/original/google-docs-icon-logo-symbol-free-png.png" />
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5',
                    gutterBottom: true
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle2',
                    lineHeight: 1
                  }}
                  primary="Edit the Docs With New Ideas"
                  secondary="Add learning and Quotes to the Strategy"
                />
                <Button
                  color="primary"
                  size="large"
                  variant="contained"
                  onClick={() => {
                    window.open(
                      'https://docs.google.com/document/d/1HCdUiAHYxdzriojDR7gThtWzlRxBpib44ml-HpKQPxI/edit#heading=h.gjdgxs',
                      '_blank'
                    );
                  }}
                >
                  Connect
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Container>
    </div>
  );
};

export default LearningDocumentation;
