import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

function ProgressTracker({ activities }) {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Progress Tracker
      </Typography>
      {activities.length === 0 ? (
        <Typography variant="body1">No activities logged yet.</Typography>
      ) : (
        <List>
          {activities.map((activity, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`Steps: ${activity.steps}, Calories: ${activity.calories}, Workout Time: ${activity.workoutTime} min`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
}

export default ProgressTracker;
