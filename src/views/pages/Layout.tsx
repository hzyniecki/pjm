import { ReactNode } from 'react';
import AppNav from '../../component/nav/AppNav';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import Footer from '../../component/nav/Footer';

export default function Layout(props: { children: ReactNode }) {
  return (
    <Grid container>
      <Grid item id='header' xs={12}>
        <AppNav />
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          flex: 1,
          background: '#fff',
          minHeight: '100vh',
          minWidth: '100vw',
        }}
      >
        <Container maxWidth='xl' style={{ flex: 1, marginTop: '6.7rem' }}>
          {props.children}
        </Container>
      </Grid>
      <Footer />
    </Grid>
  );
}
