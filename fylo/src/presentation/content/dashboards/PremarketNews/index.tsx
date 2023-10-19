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

const PremarketNews = () => {
  const AvatarWrapper = styled(Avatar)(
    ({ theme }) => `
          width: ${theme.spacing(5)};
          height: ${theme.spacing(5)};
      `
  );
  return (
    <div>
      <Container maxWidth="xl">
        <Grid>
          <Typography
            sx={{
              py: 3
            }}
            variant="h4"
          >
            Other News APIs
          </Typography>
          <Grid py={1}>
            <Card>
              <List>
                <ListItem sx={{ p: 3 }}>
                  <ListItemAvatar sx={{ pr: 2 }}>
                    <AvatarWrapper src="https://www.adgully.com/img/800/2010-07-Mint-Business-News-Paper1.jpg" />
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
                    primary="Stock News - Mint App"
                    secondary="Stock Market News: Share Market Today: India stock market news"
                  />
                  <Button
                    color="primary"
                    size="large"
                    variant="contained"
                    onClick={() => {
                      window.open(
                        'https://www.livemint.com/market/stock-market-news',
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
          <Grid py={1}>
            <Card>
              <List>
                <ListItem sx={{ p: 3 }}>
                  <ListItemAvatar sx={{ pr: 2 }}>
                    <AvatarWrapper src="https://www.marketfeed.com/favicon.ico" />
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
                    primary="Market Feed"
                    secondary="Stock Market Feed"
                  />
                  <Button
                    color="primary"
                    size="large"
                    variant="contained"
                    onClick={() => {
                      window.open(
                        'https://www.marketfeed.com/read/en/category/market',
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
        </Grid>
        <Grid>
          <Typography
            sx={{
              py: 3
            }}
            variant="h4"
          >
            Money Controll
          </Typography>
          <Divider />
          <iframe
            id="iframe-container"
            src={'https://www.moneycontrol.com/markets/premarket/'}
            title="Website"
            width="100%"
            height="800px" // Set the desired height
            frameBorder="0"
          ></iframe>
        </Grid>
      </Container>
    </div>
  );
};

export default PremarketNews;
