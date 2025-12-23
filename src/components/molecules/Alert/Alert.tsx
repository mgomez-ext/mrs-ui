/**
 * Alert Component
 *
 * Implements the MRS Alert using design tokens from the theme.
 * Supports severity (error, warning, info, success) and variants (filled, outlined, standard),
 * optional title/description, optional leading icon, custom action, and close button.
 *
 * @figma https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=6595-48211
 * @see https://mui.com/material-ui/react-alert/
 */

import React from 'react';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ErrorRounded from '@mui/icons-material/ErrorRounded';
import ErrorOutlineRounded from '@mui/icons-material/ErrorOutlineRounded';
import InfoRounded from '@mui/icons-material/InfoRounded';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CheckCircleRounded from '@mui/icons-material/CheckCircleRounded';
import CheckCircleOutlineRounded from '@mui/icons-material/CheckCircleOutlineRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';
import { Icon } from '../../atoms/Icon';
import type { AlertProps, AlertSeverity, AlertVariant } from './Alert.types';

type AlertColorTokens = {
  background: string;
  foreground: string;
  border?: string;
};

const severityIcons: Record<AlertSeverity, { filled: React.ComponentType; outlined: React.ComponentType }> = {
  error: { filled: ErrorRounded, outlined: ErrorOutlineRounded },
  warning: { filled: ErrorRounded, outlined: ErrorOutlineRounded },
  info: { filled: InfoRounded, outlined: InfoOutlined },
  success: { filled: CheckCircleRounded, outlined: CheckCircleOutlineRounded },
};

/**
 * Returns token-based colors for a given severity and variant.
 */
function useAlertColors(severity: AlertSeverity, variant: AlertVariant): AlertColorTokens {
  const theme = useTheme();
  const tokens = theme.palette._components.alert[severity][variant];
  return tokens;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      severity = 'error',
      variant = 'filled',
      title,
      description,
      icon = true,
      close = false,
      onClose,
      action,
      sx,
      children,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();
    const tokenColors = useAlertColors(severity, variant);

    const IconComponent =
      severityIcons[severity][variant === 'filled' ? 'filled' : 'outlined'];

    const startIcon =
      icon === false
        ? false
        : React.isValidElement(icon)
        ? icon
        : IconComponent && <Icon icon={IconComponent} size="small" />;

    const closeButton =
      close && (
        <IconButton
          size="small"
          aria-label="close"
          onClick={onClose}
          sx={{ color: tokenColors.foreground }}
        >
          <CloseRounded fontSize="small" />
        </IconButton>
      );

    const actionContent = action ? (
      closeButton ? (
        <Stack direction="row" spacing={1} alignItems="center">
          {action}
          {closeButton}
        </Stack>
      ) : (
        action
      )
    ) : (
      closeButton || undefined
    );

    return (
      <MuiAlert
        ref={ref}
        severity={severity}
        variant="standard"
        icon={startIcon}
        action={actionContent}
        sx={{
          borderRadius: theme.shape.borderRadius,
          backgroundColor: tokenColors.background,
          color: tokenColors.foreground,
          alignItems: 'flex-justify',
          py: 1.5,
          px: 2,
          ...(variant === 'outlined' && {
            border: `1px solid ${tokenColors.border}`,
          }),
          '& .MuiAlert-icon': {
            color: tokenColors.foreground,
            padding: 1,
            marginRight: theme.spacing(1),
            mt: 0.25,
          },
          '& .MuiAlert-message': {
            padding: 1,
            width: '100%',
          },
          '& .MuiAlert-action': {
            padding: 0,
            marginLeft: theme.spacing(2),
            alignItems: 'flex-justify',
          },
          ...sx,
        }}
        {...props}
      >
        <Stack spacing={0.25}>
          {title && (
            <Typography
              variant="body1"
              fontWeight={theme.typography.fontWeightMedium}
              lineHeight={1.5}
            >
              {title}
            </Typography>
          )}
          {description && (
            <Typography variant="body2" lineHeight={1.43}>
              {description}
            </Typography>
          )}
          {children}
        </Stack>
      </MuiAlert>
    );
  }
);

Alert.displayName = 'Alert';

export default Alert;

