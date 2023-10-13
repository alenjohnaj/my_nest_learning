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
import PageHeaderForNextDay from './PageHeaderForNextDay';
import PageTitleWrapper from 'src/presentation/components/PageTitleWrapper';

const PreperationNextDay = () => {
  const ButtonError = styled(Button)(
    ({ theme }) => `
             background: ${theme.colors.error.main};
             color: ${theme.palette.error.contrastText};
        
             &:hover {
                background: ${theme.colors.error.dark};
             }
            `
  );

  const AvatarSuccess = styled(Avatar)(
    ({ theme }) => `
            background: ${theme.colors.success.light};
            width: ${theme.spacing(5)};
            height: ${theme.spacing(5)};
        `
  );

  const AvatarWrapper = styled(Avatar)(
    ({ theme }) => `
            width: ${theme.spacing(5)};
            height: ${theme.spacing(5)};
        `
  );
  return (
    <div>
      <PageTitleWrapper>
        <PageHeaderForNextDay />
      </PageTitleWrapper>
      <Container maxWidth="xl">
        <Grid>
          <Grid py={1}>
            <Card>
              <List>
                <ListItem sx={{ p: 3 }}>
                  <ListItemAvatar sx={{ pr: 2 }}>
                    <AvatarWrapper src="https://play-lh.googleusercontent.com/OoPpCoMOpPra6k0Qlwhfi14vOmqHfR790C1C7a_sHNqqUUYJhTYy6rjAmrv4eMLQRDbJ" />
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
                    primary="Trading View Community Ideas"
                    secondary="Get inspiration for your next trade. Don't reinvent the wheel."
                  />
                  <Button
                    color="primary"
                    size="large"
                    variant="contained"
                    onClick={() => {
                      window.open(
                        'https://in.tradingview.com/community/',
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
                    <AvatarWrapper src="https://play-lh.googleusercontent.com/OoPpCoMOpPra6k0Qlwhfi14vOmqHfR790C1C7a_sHNqqUUYJhTYy6rjAmrv4eMLQRDbJ" />
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
                    primary="Learning - Trading Editor Picks"
                    secondary="Stock Market Learnings"
                  />
                  <Button
                    color="primary"
                    size="large"
                    variant="contained"
                    onClick={() => {
                      window.open(
                        'https://in.tradingview.com/education/',
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
      </Container>
    </div>
  );
};

export default PreperationNextDay;
