/**
 * PageContainer Component
 *
 * Wrapper component for page content with consistent styling.
 * Provides title, breadcrumbs, and action buttons area.
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import { Box } from '../../components/atoms/Box';
import { Container } from '../../components/atoms/Container';
import { Typography } from '../../components/atoms/Typography';
import { Link } from '../../components/atoms/Link';
import { Skeleton } from '../../components/atoms/Skeleton';
import { Stack } from '../../components/atoms/Stack';
import { MaterialSymbol } from '../../components/atoms/MaterialSymbol';
import { useNavigation } from '../providers/NavigationContext';
import type { PageContainerProps } from './PageContainer.types';

/**
 * PageContainer
 *
 * Page wrapper that provides:
 * - Page title (h4)
 * - Optional breadcrumb navigation
 * - Action buttons area (top-right)
 * - Consistent padding and max-width
 *
 * @example
 * ```tsx
 * import { PageContainer, Button } from '@mgomez-ext/mrs-ui/dashboard';
 *
 * function SettingsPage() {
 *   return (
 *     <PageContainer
 *       title="Settings"
 *       breadcrumbs={[
 *         { label: 'Home', href: '/' },
 *         { label: 'Settings' },
 *       ]}
 *       actions={<Button variant="contained">Save</Button>}
 *     >
 *       <p>Settings content...</p>
 *     </PageContainer>
 *   );
 * }
 * ```
 */
export const PageContainer = React.forwardRef<HTMLDivElement, PageContainerProps>(
  (
    { title, subtitle, breadcrumbs, actions, children, maxWidth = 'lg', loading = false, sx },
    ref
  ) => {
    const theme = useTheme();
    const { navigate } = useNavigation();

    const handleBreadcrumbClick = (href: string | undefined) => (e: React.MouseEvent) => {
      if (href) {
        e.preventDefault();
        navigate(href);
      }
    };

    return (
      <Container
        ref={ref}
        maxWidth={maxWidth}
        sx={{
          py: 3,
          ...sx,
        }}
      >
        {/* Header Row: Breadcrumbs + Actions */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2,
            mb: 3,
          }}
        >
          {/* Left: Title and Breadcrumbs */}
          <Box sx={{ flexGrow: 1 }}>
            {/* Breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <MuiBreadcrumbs
                separator={
                  <MaterialSymbol
                    icon="chevron_right"
                    size="small"
                    sx={{ color: theme.palette.text.disabled }}
                  />
                }
                sx={{ mb: 1 }}
              >
                {breadcrumbs.map((item, index) => {
                  const isLast = index === breadcrumbs.length - 1;

                  if (loading) {
                    return <Skeleton key={index} width={60} height={20} />;
                  }

                  if (isLast || !item.href) {
                    return (
                      <Typography
                        key={index}
                        variant="body2"
                        color={isLast ? 'text.primary' : 'text.secondary'}
                      >
                        {item.label}
                      </Typography>
                    );
                  }

                  return (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={handleBreadcrumbClick(item.href)}
                      underline="hover"
                      color="textSecondary"
                      sx={{ cursor: 'pointer' }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </MuiBreadcrumbs>
            )}

            {/* Title */}
            {loading ? (
              <Skeleton width={200} height={36} />
            ) : (
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                }}
              >
                {title}
              </Typography>
            )}

            {/* Subtitle */}
            {subtitle &&
              (loading ? (
                <Skeleton width={300} height={24} sx={{ mt: 0.5 }} />
              ) : (
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mt: 0.5 }}
                >
                  {subtitle}
                </Typography>
              ))}
          </Box>

          {/* Right: Actions */}
          {actions && (
            <Stack direction="row" spacing={1}>
              {actions}
            </Stack>
          )}
        </Box>

        {/* Content */}
        <Box>{children}</Box>
      </Container>
    );
  }
);

PageContainer.displayName = 'PageContainer';

export default PageContainer;
