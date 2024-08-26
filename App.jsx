import React, { useState } from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import ActivityForm from './components/ActivityForm';
import ProgressTracker from './components/ProgressTracker';

function App() {
  const [activities, setActivities] = useState([]);

  const addActivity = (activity) => {
    setActivities([...activities, activity]);
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Fitness Challenge Tracker
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <ActivityForm addActivity={addActivity} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <ProgressTracker activities={activities} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
