/**
 * TokensPage - Design Tokens Viewer
 *
 * View and copy design tokens (colors, typography, spacing, shapes).
 */

import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import { PageContainer } from '../../../dashboard/components/PageContainer';
import { Box } from '../../../components/atoms/Box';
import { Card } from '../../../components/molecules/Card';
import { Typography } from '../../../components/atoms/Typography';
import { Stack } from '../../../components/atoms/Stack';
import { Switch } from '../../../components/atoms/Switch';
import { Snackbar } from '../../../components/molecules/Snackbar';
import { Alert } from '../../../components/molecules/Alert';
import { TokenSwatch } from '../components/TokenSwatch';
import { colors, typography, shape, spacing } from '../../../theme/tokens';
import { useApp } from '../../../dashboard/providers/AppProvider';
import { useCopyToClipboard } from '../../../dashboard/hooks';

type TokenTab = 'colors' | 'typography' | 'spacing' | 'shapes';

interface TabPanelProps {
  children?: React.ReactNode;
  value: TokenTab;
  current: TokenTab;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, current }) => {
  if (value !== current) return null;
  return <Box sx={{ pt: 3 }}>{children}</Box>;
};

// Helper to flatten nested color objects
function flattenColors(
  obj: Record<string, unknown>,
  prefix = ''
): Array<{ name: string; value: string; cssVar: string }> {
  const result: Array<{ name: string; value: string; cssVar: string }> = [];

  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      result.push({
        name: fullKey,
        value: value,
        cssVar: `--mrs-${fullKey.replace(/\./g, '-')}`,
      });
    } else if (typeof value === 'object' && value !== null) {
      result.push(...flattenColors(value as Record<string, unknown>, fullKey));
    }
  }

  return result;
}

export const TokensPage: React.FC = () => {
  const theme = useTheme();
  const { isDarkMode } = useApp();
  const [activeTab, setActiveTab] = useState<TokenTab>('colors');
  const [showDarkColors, setShowDarkColors] = useState(isDarkMode);
  const { copied } = useCopyToClipboard();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleTabChange = (_: React.SyntheticEvent, newValue: TokenTab) => {
    setActiveTab(newValue);
  };

  const currentColors = showDarkColors ? colors.dark : colors.light;
  const flatColors = flattenColors(currentColors as Record<string, unknown>);

  // Group colors by category
  const colorGroups = flatColors.reduce(
    (acc, color) => {
      const category = color.name.split('.')[0] ?? 'other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category]!.push(color);
      return acc;
    },
    {} as Record<string, typeof flatColors>
  );

  return (
    <PageContainer
      title="Design Tokens"
      subtitle="View and copy design system tokens"
      breadcrumbs={[
        { label: 'Overview', href: '/overview' },
        { label: 'Design Tokens' },
      ]}
    >
      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <MuiTabs value={activeTab} onChange={handleTabChange} aria-label="token categories">
          <MuiTab value="colors" label="Colors" />
          <MuiTab value="typography" label="Typography" />
          <MuiTab value="spacing" label="Spacing" />
          <MuiTab value="shapes" label="Shapes" />
        </MuiTabs>
      </Box>

      {/* Colors Tab */}
      <TabPanel value="colors" current={activeTab}>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
          <Typography variant="body2">Light</Typography>
          <Switch
            checked={showDarkColors}
            onChange={(e) => setShowDarkColors(e.target.checked)}
            size="small"
          />
          <Typography variant="body2">Dark</Typography>
        </Stack>

        {Object.entries(colorGroups).map(([category, categoryColors]) => (
          <Box key={category} sx={{ mb: 4 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, mb: 2, textTransform: 'capitalize' }}
            >
              {category}
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                  lg: 'repeat(4, 1fr)',
                },
                gap: 2,
              }}
            >
              {categoryColors.map((color) => (
                <TokenSwatch
                  key={color.name}
                  name={color.name}
                  value={color.value}
                  cssVar={color.cssVar}
                />
              ))}
            </Box>
          </Box>
        ))}
      </TabPanel>

      {/* Typography Tab */}
      <TabPanel value="typography" current={activeTab}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 3,
          }}
        >
          {/* Font Family */}
          <Card sx={{ p: 3 }}>
            <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
              Font Family
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontFamily: typography.fontFamily, fontSize: 24 }}
            >
              Nunito
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
              {typography.fontFamily}
            </Typography>
          </Card>

          {/* Font Weights */}
          <Card sx={{ p: 3 }}>
            <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
              Font Weights
            </Typography>
            <Stack spacing={1}>
              <Typography sx={{ fontWeight: 300 }}>Light (300)</Typography>
              <Typography sx={{ fontWeight: 400 }}>Regular (400)</Typography>
              <Typography sx={{ fontWeight: 600 }}>Semi Bold (600)</Typography>
              <Typography sx={{ fontWeight: 700 }}>Bold (700)</Typography>
            </Stack>
          </Card>

          {/* Font Sizes */}
          <Card sx={{ p: 3, gridColumn: { md: 'span 2' } }}>
            <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
              Type Scale
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="h1">Heading 1</Typography>
                <Typography variant="caption" color="text.secondary">h1 - 48px</Typography>
              </Box>
              <Box>
                <Typography variant="h2">Heading 2</Typography>
                <Typography variant="caption" color="text.secondary">h2 - 36px</Typography>
              </Box>
              <Box>
                <Typography variant="h3">Heading 3</Typography>
                <Typography variant="caption" color="text.secondary">h3 - 28px</Typography>
              </Box>
              <Box>
                <Typography variant="h4">Heading 4</Typography>
                <Typography variant="caption" color="text.secondary">h4 - 24px</Typography>
              </Box>
              <Box>
                <Typography variant="h5">Heading 5</Typography>
                <Typography variant="caption" color="text.secondary">h5 - 20px</Typography>
              </Box>
              <Box>
                <Typography variant="h6">Heading 6</Typography>
                <Typography variant="caption" color="text.secondary">h6 - 18px</Typography>
              </Box>
              <Box>
                <Typography variant="body1">Body 1 - Default body text</Typography>
                <Typography variant="caption" color="text.secondary">body1 - 16px</Typography>
              </Box>
              <Box>
                <Typography variant="body2">Body 2 - Secondary body text</Typography>
                <Typography variant="caption" color="text.secondary">body2 - 14px</Typography>
              </Box>
            </Stack>
          </Card>
        </Box>
      </TabPanel>

      {/* Spacing Tab */}
      <TabPanel value="spacing" current={activeTab}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Based on an 8px grid system. Use theme.spacing(n) to access values.
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(4, 1fr)',
              lg: 'repeat(5, 1fr)',
            },
            gap: 2,
          }}
        >
          {spacing.map((value, index) => (
            <Card key={index} sx={{ p: 2, textAlign: 'center' }}>
              <Box
                sx={{
                  width: value,
                  height: 24,
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1,
                  mx: 'auto',
                  mb: 1,
                  minWidth: 4,
                }}
              />
              <Typography variant="subtitle2">{value}px</Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                spacing({index})
              </Typography>
            </Card>
          ))}
        </Box>
      </TabPanel>

      {/* Shapes Tab */}
      <TabPanel value="shapes" current={activeTab}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          {Object.entries(shape).map(([name, value]) => (
            <Card key={name} sx={{ p: 3, textAlign: 'center' }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: `${value}px`,
                  mx: 'auto',
                  mb: 2,
                }}
              />
              <Typography variant="subtitle2" sx={{ textTransform: 'capitalize' }}>
                {name}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                {value}px
              </Typography>
              <Typography
                variant="caption"
                color="text.disabled"
                sx={{ fontFamily: 'monospace', display: 'block' }}
              >
                theme.shape.{name}
              </Typography>
            </Card>
          ))}
        </Box>
      </TabPanel>

      {/* Copy Snackbar */}
      <Snackbar
        open={snackbarOpen || copied}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Copied to clipboard!
        </Alert>
      </Snackbar>
    </PageContainer>
  );
};

export default TokensPage;
