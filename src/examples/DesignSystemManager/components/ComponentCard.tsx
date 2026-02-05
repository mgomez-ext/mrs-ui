/**
 * ComponentCard - Component preview card
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Card } from '../../../components/molecules/Card';
import { Typography } from '../../../components/atoms/Typography';
import { Stack } from '../../../components/atoms/Stack';
import { Chip } from '../../../components/atoms/Chip';
import { IconButton } from '../../../components/atoms/IconButton';
import { Tooltip } from '../../../components/atoms/Tooltip';
import { MaterialSymbol } from '../../../components/atoms/MaterialSymbol';
import type { ComponentInfo } from '../config/components';

interface ComponentCardProps {
  component: ComponentInfo;
  storybookBaseUrl?: string;
}

const statusColors: Record<string, 'success' | 'warning' | 'error'> = {
  stable: 'success',
  beta: 'warning',
  deprecated: 'error',
};

export const ComponentCard: React.FC<ComponentCardProps> = ({
  component,
  storybookBaseUrl = 'http://localhost:6006',
}) => {
  const theme = useTheme();

  const handleOpenStorybook = () => {
    if (component.storybookPath) {
      window.open(`${storybookBaseUrl}/${component.storybookPath}`, '_blank');
    }
  };

  return (
    <Card
      sx={{
        p: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          {component.name}
        </Typography>
        <Chip
          label={component.status}
          size="small"
          color={statusColors[component.status]}
          sx={{ textTransform: 'capitalize' }}
        />
      </Stack>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          mb: 2,
          flexGrow: 1,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {component.description}
      </Typography>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Chip
          label={component.category}
          size="small"
          variant="outlined"
          sx={{ textTransform: 'capitalize' }}
        />

        {component.storybookPath && (
          <Tooltip title="Open in Storybook">
            <IconButton size="small" onClick={handleOpenStorybook}>
              <MaterialSymbol
                icon="open_in_new"
                size="small"
                sx={{ color: theme.palette.primary.main }}
              />
            </IconButton>
          </Tooltip>
        )}
      </Stack>
    </Card>
  );
};

export default ComponentCard;
