
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Button, TextField, Container, Grid, Typography } from '@mui/material';

// Section components for each page
const SectionA = () => (
  <Container>
    <Typography variant="h4" gutterBottom>Section A: Demographic Information</Typography>
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Age" variant="outlined" fullWidth name="age" />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Gender" variant="outlined" fullWidth name="gender" />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth type="submit">Next</Button>
        </Grid>
      </Grid>
    </form>
    <Link to="/section-b">
      <Button variant="outlined" color="secondary" fullWidth>Next Section</Button>
    </Link>
  </Container>
);

const SectionB = () => (
  <Container>
    <Typography variant="h4" gutterBottom>Section B: Social Media Usage</Typography>
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Social Media Usage Frequency" variant="outlined" fullWidth name="social-media-frequency" />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth type="submit">Next</Button>
        </Grid>
      </Grid>
    </form>
    <Link to="/section-c">
      <Button variant="outlined" color="secondary" fullWidth>Next Section</Button>
    </Link>
  </Container>
);

const App = () => (
  <Router>
    <Switch>
      <Route path="/section-a" component={SectionA} />
      <Route path="/section-b" component={SectionB} />
      <Route path="/" exact render={() => <Link to="/section-a"><Button variant="contained" color="primary" fullWidth>Start Questionnaire</Button></Link>} />
    </Switch>
  </Router>
);

export default App;
