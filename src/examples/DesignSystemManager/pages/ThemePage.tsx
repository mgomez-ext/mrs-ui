/**
 * ThemePage - Theme Preview & Comparison
 *
 * Live theme toggle with component showcase and side-by-side comparison.
 */

import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { PageContainer } from '../../../dashboard/components/PageContainer';
import { Box } from '../../../components/atoms/Box';
import { Card } from '../../../components/molecules/Card';
import { Typography } from '../../../components/atoms/Typography';
import { Stack } from '../../../components/atoms/Stack';
import { Switch } from '../../../components/atoms/Switch';
import { Button } from '../../../components/atoms/Button';
import { TextField } from '../../../components/atoms/TextField';
import { Chip } from '../../../components/atoms/Chip';
import { Checkbox } from '../../../components/atoms/Checkbox';
import { Radio } from '../../../components/atoms/Radio';
import { RadioGroup } from '../../../components/atoms/RadioGroup';
import { Slider } from '../../../components/atoms/Slider';
import { LinearProgress } from '../../../components/atoms/LinearProgress';
import { CircularProgress } from '../../../components/atoms/CircularProgress';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Alert } from '../../../components/molecules/Alert';
import { MaterialSymbol } from '../../../components/atoms/MaterialSymbol';
import { ThemeComparison } from '../components/ThemeComparison';
import { useApp } from '../../../dashboard/providers/AppProvider';

type ViewMode = 'showcase' | 'comparison';

export const ThemePage: React.FC = () => {
  const theme = useTheme();
  const { isDarkMode, toggleTheme } = useApp();
  const [viewMode, setViewMode] = useState<ViewMode>('showcase');

  return (
    <PageContainer
      title="Theme Preview"
      subtitle="Preview components in light and dark themes"
      breadcrumbs={[
        { label: 'Overview', href: '/overview' },
        { label: 'Theme' },
      ]}
      actions={
        <Stack direction="row" spacing={2} alignItems="center">
          <Stack direction="row" spacing={1} alignItems="center">
            <MaterialSymbol
              icon="light_mode"
              size="small"
              sx={{ color: isDarkMode ? theme.palette.text.disabled : theme.palette.warning.main }}
            />
            <Switch checked={isDarkMode} onChange={toggleTheme} size="small" />
            <MaterialSymbol
              icon="dark_mode"
              size="small"
              sx={{ color: isDarkMode ? theme.palette.primary.main : theme.palette.text.disabled }}
            />
          </Stack>
        </Stack>
      }
    >
      {/* View Mode Toggle */}
      <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
        <Button
          variant={viewMode === 'showcase' ? 'contained' : 'outlined'}
          size="small"
          onClick={() => setViewMode('showcase')}
          startIcon={<MaterialSymbol icon="preview" size="small" />}
        >
          Component Showcase
        </Button>
        <Button
          variant={viewMode === 'comparison' ? 'contained' : 'outlined'}
          size="small"
          onClick={() => setViewMode('comparison')}
          startIcon={<MaterialSymbol icon="compare" size="small" />}
        >
          Side-by-Side Comparison
        </Button>
      </Stack>

      {viewMode === 'comparison' ? (
        <ThemeComparison />
      ) : (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 3,
          }}
        >
          {/* Buttons Section */}
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Buttons
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Button variant="contained" color="primary">
                  Primary
                </Button>
                <Button variant="contained" color="secondary">
                  Secondary
                </Button>
                <Button variant="contained" color="success">
                  Success
                </Button>
                <Button variant="contained" color="error">
                  Error
                </Button>
              </Stack>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Button variant="outlined" color="primary">
                  Outlined
                </Button>
                <Button variant="outlined" color="secondary">
                  Secondary
                </Button>
              </Stack>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Button variant="text" color="primary">
                  Text Button
                </Button>
                <Button variant="text" color="secondary">
                  Secondary
                </Button>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Button variant="contained" disabled>
                  Disabled
                </Button>
                <Button variant="outlined" disabled>
                  Disabled
                </Button>
              </Stack>
            </Stack>
          </Card>

          {/* Text Fields Section */}
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Text Fields
            </Typography>
            <Stack spacing={2}>
              <TextField label="Standard Input" placeholder="Enter text..." />
              <TextField label="With Helper Text" helperText="Some helpful information" />
              <TextField label="Error State" error helperText="This field has an error" />
              <TextField label="Disabled" disabled defaultValue="Disabled input" />
            </Stack>
          </Card>

          {/* Chips Section */}
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Chips
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip label="Default" />
                <Chip label="Primary" color="primary" />
                <Chip label="Secondary" color="secondary" />
                <Chip label="Success" color="success" />
                <Chip label="Warning" color="warning" />
                <Chip label="Error" color="error" />
                <Chip label="Info" color="info" />
              </Stack>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip label="Outlined" variant="outlined" />
                <Chip label="Primary" variant="outlined" color="primary" />
                <Chip label="Deletable" onDelete={() => {}} />
              </Stack>
            </Stack>
          </Card>

          {/* Selection Controls */}
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Selection Controls
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Checked" />
                <FormControlLabel control={<Checkbox />} label="Unchecked" />
                <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
              </Stack>
              <RadioGroup defaultValue="option1" row>
                <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
                <FormControlLabel value="option3" control={<Radio disabled />} label="Disabled" />
              </RadioGroup>
              <Stack direction="row" spacing={2}>
                <FormControlLabel control={<Switch defaultChecked />} label="On" />
                <FormControlLabel control={<Switch />} label="Off" />
                <FormControlLabel control={<Switch disabled />} label="Disabled" />
              </Stack>
            </Stack>
          </Card>

          {/* Alerts Section */}
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Alerts
            </Typography>
            <Stack spacing={2}>
              <Alert severity="info">This is an info alert</Alert>
              <Alert severity="success">This is a success alert</Alert>
              <Alert severity="warning">This is a warning alert</Alert>
              <Alert severity="error">This is an error alert</Alert>
            </Stack>
          </Card>

          {/* Progress Indicators */}
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Progress Indicators
            </Typography>
            <Stack spacing={3}>
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Linear Progress
                </Typography>
                <LinearProgress variant="determinate" value={60} />
              </Box>
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Indeterminate
                </Typography>
                <LinearProgress />
              </Box>
              <Stack direction="row" spacing={3} alignItems="center">
                <Box sx={{ textAlign: 'center' }}>
                  <CircularProgress variant="determinate" value={75} />
                  <Typography variant="caption" display="block">
                    75%
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <CircularProgress />
                  <Typography variant="caption" display="block">
                    Loading
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Card>

          {/* Slider */}
          <Card sx={{ p: 3, gridColumn: { md: 'span 2' } }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Slider
            </Typography>
            <Stack spacing={3} sx={{ px: 2 }}>
              <Slider defaultValue={30} aria-label="Default slider" />
              <Slider
                defaultValue={[20, 60]}
                aria-label="Range slider"
                valueLabelDisplay="auto"
              />
              <Slider
                defaultValue={50}
                step={10}
                marks
                min={0}
                max={100}
                aria-label="Discrete slider"
              />
            </Stack>
          </Card>

          {/* Color Palette Preview */}
          <Card sx={{ p: 3, gridColumn: { md: 'span 2' } }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Color Palette
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                gap: 2,
              }}
            >
              {[
                { name: 'Primary', color: theme.palette.primary.main },
                { name: 'Secondary', color: theme.palette.secondary.main },
                { name: 'Success', color: theme.palette.success.main },
                { name: 'Warning', color: theme.palette.warning.main },
                { name: 'Error', color: theme.palette.error.main },
                { name: 'Info', color: theme.palette.info.main },
                { name: 'Background', color: theme.palette.background.paper },
                { name: 'Text', color: theme.palette.text.primary },
              ].map((item) => (
                <Box key={item.name} sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: '100%',
                      height: 60,
                      backgroundColor: item.color,
                      borderRadius: 1,
                      border: `1px solid ${theme.palette.divider}`,
                      mb: 1,
                    }}
                  />
                  <Typography variant="caption">{item.name}</Typography>
                </Box>
              ))}
            </Box>
          </Card>
        </Box>
      )}
    </PageContainer>
  );
};

export default ThemePage;
