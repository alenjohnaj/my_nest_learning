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
import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/presentation/components/PageTitleWrapper';
import Footer from 'src/presentation/components/Footer';

function ApplicationsTransactions() {
  const AvatarWrapper = styled(Avatar)(
    ({ theme }) => `
              width: ${theme.spacing(5)};
              height: ${theme.spacing(5)};
          `
  );
  return (
    <>
      <Helmet>
        <title>Transactions - Applications</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <iframe
              src="https://docs.google.com/spreadsheets/d/1GemccxAftnQK8UgdB5r7DHuLFhLUL3WphJ6AzlWCkH0/edit?usp=sharing?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
              title="Website"
              width="100%"
              height="800px"
            ></iframe>
          </Grid>
        </Grid>
        <Grid py={1}>
          <Card>
            <List>
              <ListItem sx={{ p: 3 }}>
                <ListItemAvatar sx={{ pr: 2 }}>
                  <AvatarWrapper src="https://www.westonschools.org/wp-content/uploads/2017/06/google-sheets-icon.jpg" />
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
                  primary="Practice Entries For Trading"
                  secondary="Sheet to practice the Trading Entries"
                />
                <Button
                  color="primary"
                  size="large"
                  variant="contained"
                  onClick={() => {
                    window.open(
                      'https://docs.google.com/spreadsheets/d/1BGqtXAybs2QSH-7O3vvXwiJvpvvC2mkJZO0D4HDGBeI/edit#gid=2024490863',
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
      <Footer />
    </>
  );
}

export default ApplicationsTransactions;
