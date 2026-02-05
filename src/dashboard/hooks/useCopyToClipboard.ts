/**
 * useCopyToClipboard Hook
 *
 * Hook for copying text to clipboard with success/error state.
 */

import { useState, useCallback } from 'react';

interface UseCopyToClipboardReturn {
  /** Copy text to clipboard */
  copy: (text: string) => Promise<boolean>;
  /** Whether the last copy operation was successful */
  copied: boolean;
  /** Error message if copy failed */
  error: string | null;
  /** Reset the copied state */
  reset: () => void;
}

/**
 * useCopyToClipboard
 *
 * Provides clipboard copy functionality with feedback state.
 *
 * @param resetTimeout - Time in ms to auto-reset copied state (default: 2000)
 * @returns Copy function and state
 *
 * @example
 * ```tsx
 * const { copy, copied } = useCopyToClipboard();
 *
 * return (
 *   <Button onClick={() => copy('#FF0000')}>
 *     {copied ? 'Copied!' : 'Copy Color'}
 *   </Button>
 * );
 * ```
 */
export function useCopyToClipboard(resetTimeout = 2000): UseCopyToClipboardReturn {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reset = useCallback(() => {
    setCopied(false);
    setError(null);
  }, []);

  const copy = useCallback(
    async (text: string): Promise<boolean> => {
      if (!navigator?.clipboard) {
        setError('Clipboard API not available');
        setCopied(false);
        return false;
      }

      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setError(null);

        // Auto-reset after timeout
        if (resetTimeout > 0) {
          setTimeout(() => {
            setCopied(false);
          }, resetTimeout);
        }

        return true;
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to copy';
        setError(message);
        setCopied(false);
        return false;
      }
    },
    [resetTimeout]
  );

  return { copy, copied, error, reset };
}
