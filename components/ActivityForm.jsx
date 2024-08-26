import React, { useState } from 'react';
import { Button, TextField, Grid } from '@mui/material';

function ActivityForm({ addActivity }) {
  const [activity, setActivity] = useState({ steps: '', calories: '', workoutTime: '' });

  const handleChange = (e) => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activity.steps && activity.calories && activity.workoutTime) {
      addActivity(activity);
      setActivity({ steps: '', calories: '', workoutTime: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Steps Taken"
            fullWidth
            name="steps"
            value={activity.steps}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Calories Burned"
            fullWidth
            name="calories"
            value={activity.calories}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Workout Time (minutes)"
            fullWidth
            name="workoutTime"
            value={activity.workoutTime}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Log Activity
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default ActivityForm;
