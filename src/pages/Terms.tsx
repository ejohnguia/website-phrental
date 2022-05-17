import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Markdown from '../src/components/Markdown';
import Typography from '../src/components/Typography';
import AppAppBar from '../src/modules/views/AppAppBar';
import AppFooter from '../src/modules/views/AppFooter';
import withRoot from '../src/modules/withRoot';
import terms from '../src/modules/views/terms.md';

function Terms() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Terms
          </Typography>
          <Markdown>{terms}</Markdown>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Terms);
