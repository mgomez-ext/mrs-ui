/**
 * TokenSwatch - Color/token display with copy functionality
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '../../../components/atoms/Box';
import { Typography } from '../../../components/atoms/Typography';
import { Stack } from '../../../components/atoms/Stack';
import { Tooltip } from '../../../components/atoms/Tooltip';
import { IconButton } from '../../../components/atoms/IconButton';
import { MaterialSymbol } from '../../../components/atoms/MaterialSymbol';
import { useCopyToClipboard } from '../../../dashboard/hooks';

interface TokenSwatchProps {
  name: string;
  value: string;
  cssVar?: string;
  showCopy?: boolean;
}

export const TokenSwatch: React.FC<TokenSwatchProps> = ({
  name,
  value,
  cssVar,
  showCopy = true,
}) => {
  const theme = useTheme();
  const { copy, copied } = useCopyToClipboard();

  const isColor = value.startsWith('#') || value.startsWith('rgb') || value.startsWith('hsl');

  const handleCopy = () => {
    copy(cssVar || value);
  };

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
        '&:hover': {
          borderColor: theme.palette.primary.main,
        },
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        {/* Color Preview */}
        {isColor && (
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: 1,
              backgroundColor: value,
              border: `1px solid ${theme.palette.divider}`,
              flexShrink: 0,
            }}
          />
        )}

        {/* Token Info */}
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 600,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              fontFamily: 'monospace',
              display: 'block',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {value}
          </Typography>
          {cssVar && (
            <Typography
              variant="caption"
              color="text.disabled"
              sx={{
                fontFamily: 'monospace',
                display: 'block',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {cssVar}
            </Typography>
          )}
        </Box>

        {/* Copy Button */}
        {showCopy && (
          <Tooltip title={copied ? 'Copied!' : 'Copy'}>
            <IconButton size="small" onClick={handleCopy}>
              <MaterialSymbol
                icon={copied ? 'check' : 'content_copy'}
                size="small"
                sx={{
                  color: copied ? theme.palette.success.main : theme.palette.text.secondary,
                }}
              />
            </IconButton>
          </Tooltip>
        )}
      </Stack>
    </Box>
  );
};

export default TokenSwatch;
