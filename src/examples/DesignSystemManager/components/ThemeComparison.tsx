/**
 * ThemeComparison - Side-by-side theme comparison view
 */

import React from 'react';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { Box } from '../../../components/atoms/Box';
import { Card } from '../../../components/molecules/Card';
import { Typography } from '../../../components/atoms/Typography';
import { Button } from '../../../components/atoms/Button';
import { TextField } from '../../../components/atoms/TextField';
import { Chip } from '../../../components/atoms/Chip';
import { Stack } from '../../../components/atoms/Stack';
import { Alert } from '../../../components/molecules/Alert';
import { lightTheme, darkTheme } from '../../../theme';

interface ThemePanelProps {
  title: string;
  isDark: boolean;
}

const ThemePanel: React.FC<ThemePanelProps> = ({ title, isDark }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: theme.palette.background.default,
        borderRadius: 2,
        height: '100%',
      }}
    >
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
        {title}
      </Typography>

      {/* Buttons */}
      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
        Buttons
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
        <Button variant="contained" color="primary" size="small">
          Primary
        </Button>
        <Button variant="contained" color="secondary" size="small">
          Secondary
        </Button>
        <Button variant="outlined" color="primary" size="small">
          Outlined
        </Button>
        <Button variant="text" size="small">
          Text
        </Button>
      </Stack>

      {/* Text Field */}
      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
        Text Field
      </Typography>
      <TextField
        label="Example Input"
        placeholder="Type something..."
        size="small"
        fullWidth
        sx={{ mb: 3 }}
      />

      {/* Chips */}
      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
        Chips
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
        <Chip label="Default" size="small" />
        <Chip label="Primary" color="primary" size="small" />
        <Chip label="Success" color="success" size="small" />
        <Chip label="Warning" color="warning" size="small" />
        <Chip label="Error" color="error" size="small" />
      </Stack>

      {/* Alerts */}
      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
        Alerts
      </Typography>
      <Stack spacing={1} sx={{ mb: 3 }}>
        <Alert severity="info">Info alert message</Alert>
        <Alert severity="success">Success alert message</Alert>
        <Alert severity="warning">Warning alert message</Alert>
        <Alert severity="error">Error alert message</Alert>
      </Stack>

      {/* Card */}
      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
        Card
      </Typography>
      <Card sx={{ p: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a sample card content to demonstrate the card appearance in {isDark ? 'dark' : 'light'} mode.
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <Button size="small" variant="contained">
            Action
          </Button>
          <Button size="small" variant="text">
            Cancel
          </Button>
        </Stack>
      </Card>
    </Box>
  );
};

export const ThemeComparison: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
        gap: 3,
      }}
    >
      {/* Light Theme Panel */}
      <Box
        sx={{
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <ThemeProvider theme={lightTheme}>
          <ThemePanel title="Light Theme" isDark={false} />
        </ThemeProvider>
      </Box>

      {/* Dark Theme Panel */}
      <Box
        sx={{
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <ThemeProvider theme={darkTheme}>
          <ThemePanel title="Dark Theme" isDark={true} />
        </ThemeProvider>
      </Box>
    </Box>
  );
};

export default ThemeComparison;
