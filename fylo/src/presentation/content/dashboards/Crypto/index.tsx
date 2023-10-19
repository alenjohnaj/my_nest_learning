import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/presentation/components/PageTitleWrapper';
import { Container, Divider, Grid } from '@mui/material';
import Footer from 'src/presentation/components/Footer';
import MorningOverView from './MorningOverView';
import TommorowPrepration from './TommorowPrepration';

function DashboardCrypto() {
  return (
    <>
      <Helmet>
        <title> Prompt Creator</title>
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
          spacing={4}
        >
          <Grid item xs={12}>
            <MorningOverView />
          </Grid>
          <Grid item xs={12}>
            <TommorowPrepration />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default DashboardCrypto;
