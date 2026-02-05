/**
 * ComponentsPage - Component Browser
 *
 * Browse all design system components with search and filtering.
 */

import React, { useState, useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import { PageContainer } from '../../../dashboard/components/PageContainer';
import { Box } from '../../../components/atoms/Box';
import { TextField } from '../../../components/atoms/TextField';
import { Typography } from '../../../components/atoms/Typography';
import { Stack } from '../../../components/atoms/Stack';
import { Chip } from '../../../components/atoms/Chip';
import { MaterialSymbol } from '../../../components/atoms/MaterialSymbol';
import { ComponentCard } from '../components/ComponentCard';
import { componentsList, componentsByCategory, componentCounts, type ComponentInfo } from '../config/components';

type CategoryTab = 'all' | 'atoms' | 'molecules' | 'organisms' | 'effects';

const categoryLabels: Record<CategoryTab, string> = {
  all: 'All',
  atoms: 'Atoms',
  molecules: 'Molecules',
  organisms: 'Organisms',
  effects: 'Effects',
};

export const ComponentsPage: React.FC = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState<CategoryTab>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredComponents = useMemo(() => {
    let components: ComponentInfo[] = [];

    if (activeTab === 'all') {
      components = componentsList;
    } else {
      components = componentsByCategory[activeTab] || [];
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      components = components.filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.description.toLowerCase().includes(query)
      );
    }

    return components;
  }, [activeTab, searchQuery]);

  const handleTabChange = (_: React.SyntheticEvent, newValue: CategoryTab) => {
    setActiveTab(newValue);
  };

  const getTabCount = (category: CategoryTab) => {
    if (category === 'all') return componentCounts.total;
    return componentCounts[category] || 0;
  };

  return (
    <PageContainer
      title="Components"
      subtitle="Browse and explore all design system components"
      breadcrumbs={[
        { label: 'Overview', href: '/overview' },
        { label: 'Components' },
      ]}
    >
      {/* Search and Filter */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        alignItems={{ sm: 'center' }}
        sx={{ mb: 3 }}
      >
        <TextField
          placeholder="Search components..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          size="small"
          slotProps={{
            input: {
              startAdornment: (
                <MaterialSymbol
                  icon="search"
                  size="small"
                  sx={{ color: theme.palette.text.secondary, mr: 1 }}
                />
              ),
            },
          }}
          sx={{ minWidth: 300 }}
        />
        <Box sx={{ flexGrow: 1 }} />
        <Chip
          label={`${filteredComponents.length} component${filteredComponents.length !== 1 ? 's' : ''}`}
          size="small"
          variant="outlined"
        />
      </Stack>

      {/* Category Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <MuiTabs
          value={activeTab}
          onChange={handleTabChange}
          aria-label="component categories"
        >
          {(Object.keys(categoryLabels) as CategoryTab[]).map((category) => (
            <MuiTab
              key={category}
              value={category}
              label={
                <Stack direction="row" spacing={1} alignItems="center">
                  <span>{categoryLabels[category]}</span>
                  <Chip
                    label={String(getTabCount(category))}
                    size="small"
                    sx={{
                      height: 20,
                      '& .MuiChip-label': { px: 1, fontSize: '0.75rem' },
                    }}
                  />
                </Stack>
              }
            />
          ))}
        </MuiTabs>
      </Box>

      {/* Components Grid */}
      {filteredComponents.length > 0 ? (
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
          {filteredComponents.map((component) => (
            <ComponentCard key={component.name} component={component} />
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            py: 8,
            textAlign: 'center',
          }}
        >
          <MaterialSymbol
            icon="search_off"
            size="large"
            sx={{ color: theme.palette.text.disabled, mb: 2, fontSize: 48 }}
          />
          <Typography variant="h6" color="text.secondary">
            No components found
          </Typography>
          <Typography variant="body2" color="text.disabled">
            Try adjusting your search or filter
          </Typography>
        </Box>
      )}
    </PageContainer>
  );
};

export default ComponentsPage;
