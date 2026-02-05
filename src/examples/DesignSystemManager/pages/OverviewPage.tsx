/**
 * OverviewPage - Dashboard Home
 *
 * Quick overview of the design system with stats and quick links.
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import { PageContainer } from '../../../dashboard/components/PageContainer';
import { Box } from '../../../components/atoms/Box';
import { Card } from '../../../components/molecules/Card';
import { Typography } from '../../../components/atoms/Typography';
import { Stack } from '../../../components/atoms/Stack';
import { Chip } from '../../../components/atoms/Chip';
import { Button } from '../../../components/atoms/Button';
import { MaterialSymbol } from '../../../components/atoms/MaterialSymbol';
import { useNavigation } from '../../../dashboard/hooks';
import { componentCounts } from '../config/components';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'info';
  onClick?: () => void;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color = 'primary', onClick }) => {
  const theme = useTheme();
  const colorValue = theme.palette[color].main;

  return (
    <Card
      onClick={onClick}
      sx={{
        p: 3,
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': onClick
          ? {
              transform: 'translateY(-2px)',
              boxShadow: theme.shadows[4],
            }
          : {},
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: 2,
            backgroundColor: `${colorValue}15`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MaterialSymbol icon={icon} size="large" sx={{ color: colorValue }} />
        </Box>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {value}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
};

export const OverviewPage: React.FC = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();

  const stats = [
    {
      title: 'Total Components',
      value: componentCounts.total,
      icon: 'widgets',
      color: 'primary' as const,
      onClick: () => navigate('/components'),
    },
    {
      title: 'Atoms',
      value: componentCounts.atoms,
      icon: 'circle',
      color: 'info' as const,
      onClick: () => navigate('/components'),
    },
    {
      title: 'Molecules',
      value: componentCounts.molecules,
      icon: 'category',
      color: 'secondary' as const,
      onClick: () => navigate('/components'),
    },
    {
      title: 'Effects',
      value: componentCounts.effects,
      icon: 'auto_awesome',
      color: 'warning' as const,
      onClick: () => navigate('/components'),
    },
  ];

  const quickLinks = [
    { title: 'Browse Components', icon: 'widgets', path: '/components' },
    { title: 'View Design Tokens', icon: 'palette', path: '/tokens' },
    { title: 'Theme Preview', icon: 'dark_mode', path: '/theme' },
  ];

  return (
    <PageContainer
      title="Design System Overview"
      subtitle="Welcome to the mrs-ui Design System Manager"
    >
      {/* Stats Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
          gap: 3,
          mb: 4,
        }}
      >
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </Box>

      {/* Quick Links */}
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        Quick Links
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(3, 1fr)',
          },
          gap: 2,
          mb: 4,
        }}
      >
        {quickLinks.map((link) => (
          <Card
            key={link.path}
            sx={{
              p: 2,
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
              },
            }}
            onClick={() => navigate(link.path)}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <MaterialSymbol icon={link.icon} sx={{ color: theme.palette.primary.main }} />
              <Typography variant="subtitle1">{link.title}</Typography>
              <Box sx={{ flexGrow: 1 }} />
              <MaterialSymbol icon="chevron_right" sx={{ color: theme.palette.text.secondary }} />
            </Stack>
          </Card>
        ))}
      </Box>

      {/* Design System Info */}
      <Card sx={{ p: 3 }}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            mrs-ui Design System
          </Typography>
          <Chip label="v0.12.0" size="small" color="primary" />
        </Stack>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          A comprehensive React component library built on Material-UI v6.5 with custom theming,
          design tokens, and accessibility features.
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Chip label="React 18" size="small" variant="outlined" />
          <Chip label="TypeScript" size="small" variant="outlined" />
          <Chip label="Material-UI v6" size="small" variant="outlined" />
          <Chip label="Style Dictionary" size="small" variant="outlined" />
          <Chip label="Figma Sync" size="small" variant="outlined" />
        </Stack>
        <Box sx={{ mt: 3 }}>
          <Button
            variant="outlined"
            startIcon={<MaterialSymbol icon="menu_book" size="small" />}
            onClick={() => window.open('http://localhost:6006', '_blank')}
          >
            Open Storybook
          </Button>
        </Box>
      </Card>
    </PageContainer>
  );
};

export default OverviewPage;
