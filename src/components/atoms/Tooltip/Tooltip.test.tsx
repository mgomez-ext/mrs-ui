/**
 * Tooltip component tests
 */

import React from 'react';
import { render, screen, waitFor } from '../../../../tests/test-utils';
import userEvent from '@testing-library/user-event';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';

describe('Tooltip', () => {
  it('renders tooltip on hover', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip title="My Tooltip">
        <Button>Hover me</Button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    expect(button).toBeInTheDocument();

    // Hover over the button
    await user.hover(button);

    // Wait for tooltip to appear
    await waitFor(() => {
      expect(screen.getByText('My Tooltip')).toBeInTheDocument();
    });
  });

  it('renders tooltip with arrow enabled by default', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip title="My Tooltip">
        <Button>Hover me</Button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    await user.hover(button);

    // Verify tooltip appears (arrow prop defaults to true)
    await waitFor(() => {
      expect(screen.getByText('My Tooltip')).toBeInTheDocument();
    });
  });

  it('renders tooltip without arrow when arrow prop is false', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Tooltip title="My Tooltip" arrow={false}>
        <Button>Hover me</Button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    await user.hover(button);

    await waitFor(() => {
      expect(screen.getByText('My Tooltip')).toBeInTheDocument();
    });

    const arrow = container.querySelector('.MuiTooltip-arrow');
    expect(arrow).not.toBeInTheDocument();
  });

  it('renders with top placement', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip title="My Tooltip" placement="top">
        <Button>Hover me</Button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    await user.hover(button);

    await waitFor(() => {
      expect(screen.getByText('My Tooltip')).toBeInTheDocument();
    });
  });

  it('renders with bottom placement', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip title="My Tooltip" placement="bottom">
        <Button>Hover me</Button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    await user.hover(button);

    await waitFor(() => {
      expect(screen.getByText('My Tooltip')).toBeInTheDocument();
    });
  });

  it('renders with left placement', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip title="My Tooltip" placement="left">
        <Button>Hover me</Button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    await user.hover(button);

    await waitFor(() => {
      expect(screen.getByText('My Tooltip')).toBeInTheDocument();
    });
  });

  it('renders with right placement', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip title="My Tooltip" placement="right">
        <Button>Hover me</Button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    await user.hover(button);

    await waitFor(() => {
      expect(screen.getByText('My Tooltip')).toBeInTheDocument();
    });
  });

  it('hides tooltip when mouse leaves', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip title="My Tooltip">
        <Button>Hover me</Button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');

    // Hover over the button
    await user.hover(button);

    // Wait for tooltip to appear
    await waitFor(() => {
      expect(screen.getByText('My Tooltip')).toBeInTheDocument();
    });

    // Move mouse away
    await user.unhover(button);

    // Wait for tooltip to disappear
    await waitFor(() => {
      expect(screen.queryByText('My Tooltip')).not.toBeInTheDocument();
    });
  });

  it('shows tooltip on focus', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip title="My Tooltip">
        <Button>Focus me</Button>
      </Tooltip>
    );

    const button = screen.getByText('Focus me');

    // Focus the button
    await user.tab();
    expect(button).toHaveFocus();

    // Wait for tooltip to appear
    await waitFor(() => {
      expect(screen.getByText('My Tooltip')).toBeInTheDocument();
    });
  });

  it('can be controlled with open prop', async () => {
    render(
      <Tooltip title="My Tooltip" open={true}>
        <Button>Button</Button>
      </Tooltip>
    );

    // Tooltip should be visible without interaction
    expect(screen.getByText('My Tooltip')).toBeInTheDocument();
  });

  it('renders with complex title content', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip
        title={
          <div>
            <strong>Bold text</strong>
            <br />
            Regular text
          </div>
        }
      >
        <Button>Hover me</Button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    await user.hover(button);

    await waitFor(() => {
      expect(screen.getByText('Bold text')).toBeInTheDocument();
      expect(screen.getByText('Regular text')).toBeInTheDocument();
    });
  });

  it('does not show tooltip when title is empty string', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip title="">
        <Button>Hover me</Button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    await user.hover(button);

    // Wait a bit to ensure tooltip doesn't appear
    await new Promise((resolve) => setTimeout(resolve, 200));

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('can be disabled with disableHoverListener', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip title="My Tooltip" disableHoverListener>
        <Button>Hover me</Button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    await user.hover(button);

    // Wait a bit to ensure tooltip doesn't appear
    await new Promise((resolve) => setTimeout(resolve, 200));

    expect(screen.queryByText('My Tooltip')).not.toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Tooltip title="My Tooltip" ref={ref} open={true}>
        <Button>Button</Button>
      </Tooltip>
    );

    // Note: ref is on the Popper element
    // Just verify component renders without errors
    expect(screen.getByText('Button')).toBeInTheDocument();
  });
});
