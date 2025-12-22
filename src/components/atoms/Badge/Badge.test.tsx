/**
 * Badge component tests
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import MailIcon from '@mui/icons-material/Mail';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders badge with content', () => {
    const { container } = renderWithTheme(
      <Badge badgeContent={4}>
        <MailIcon />
      </Badge>
    );
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(container.querySelector('.MuiBadge-badge')).toBeInTheDocument();
  });

  it('renders with default color', () => {
    const { container } = renderWithTheme(
      <Badge badgeContent={1}>
        <MailIcon />
      </Badge>
    );
    const badge = container.querySelector('.MuiBadge-badge');
    expect(badge).toBeInTheDocument();
    // Default color doesn't add a specific class, just verify it renders
    expect(badge).not.toHaveClass('MuiBadge-colorPrimary');
    expect(badge).not.toHaveClass('MuiBadge-colorSecondary');
  });

  it('renders with primary color', () => {
    const { container } = renderWithTheme(
      <Badge badgeContent={1} color="primary">
        <MailIcon />
      </Badge>
    );
    const badge = container.querySelector('.MuiBadge-badge');
    expect(badge).toHaveClass('MuiBadge-colorPrimary');
  });

  it('renders with secondary color', () => {
    const { container } = renderWithTheme(
      <Badge badgeContent={1} color="secondary">
        <MailIcon />
      </Badge>
    );
    const badge = container.querySelector('.MuiBadge-badge');
    expect(badge).toHaveClass('MuiBadge-colorSecondary');
  });

  it('renders with error color (notification)', () => {
    const { container } = renderWithTheme(
      <Badge badgeContent={1} color="error">
        <MailIcon />
      </Badge>
    );
    const badge = container.querySelector('.MuiBadge-badge');
    expect(badge).toHaveClass('MuiBadge-colorError');
  });

  it('renders standard variant by default', () => {
    const { container } = renderWithTheme(
      <Badge badgeContent={1}>
        <MailIcon />
      </Badge>
    );
    const badge = container.querySelector('.MuiBadge-badge');
    expect(badge).toHaveClass('MuiBadge-standard');
  });

  it('renders dot variant', () => {
    const { container } = renderWithTheme(
      <Badge variant="dot" color="primary">
        <MailIcon />
      </Badge>
    );
    const badge = container.querySelector('.MuiBadge-badge');
    expect(badge).toHaveClass('MuiBadge-dot');
  });

  it('respects max prop', () => {
    renderWithTheme(
      <Badge badgeContent={100} max={99}>
        <MailIcon />
      </Badge>
    );
    expect(screen.getByText('99+')).toBeInTheDocument();
  });

  it('shows zero when showZero is true', () => {
    renderWithTheme(
      <Badge badgeContent={0} showZero>
        <MailIcon />
      </Badge>
    );
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('hides badge when badgeContent is zero and showZero is false', () => {
    const { container } = renderWithTheme(
      <Badge badgeContent={0}>
        <MailIcon />
      </Badge>
    );
    const badge = container.querySelector('.MuiBadge-badge');
    expect(badge).toHaveClass('MuiBadge-invisible');
  });

  it('can be invisible', () => {
    const { container } = renderWithTheme(
      <Badge badgeContent={4} invisible>
        <MailIcon />
      </Badge>
    );
    const badge = container.querySelector('.MuiBadge-badge');
    expect(badge).toHaveClass('MuiBadge-invisible');
  });

  it('renders with different anchor positions', () => {
    const { container } = renderWithTheme(
      <Badge badgeContent={4} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
        <MailIcon />
      </Badge>
    );
    const badge = container.querySelector('.MuiBadge-badge');
    expect(badge).toHaveClass('MuiBadge-anchorOriginBottomLeft');
  });

  it('renders with circular overlap', () => {
    const { container } = renderWithTheme(
      <Badge badgeContent={4} overlap="circular">
        <MailIcon />
      </Badge>
    );
    const badge = container.querySelector('.MuiBadge-badge');
    expect(badge).toHaveClass('MuiBadge-overlapCircular');
  });

  it('renders with rectangular overlap', () => {
    const { container } = renderWithTheme(
      <Badge badgeContent={4} overlap="rectangular">
        <MailIcon />
      </Badge>
    );
    const badge = container.querySelector('.MuiBadge-badge');
    expect(badge).toHaveClass('MuiBadge-overlapRectangular');
  });

  it('accepts custom className', () => {
    const { container } = renderWithTheme(
      <Badge badgeContent={4} className="custom-badge">
        <MailIcon />
      </Badge>
    );
    const badgeRoot = container.querySelector('.MuiBadge-root');
    expect(badgeRoot).toHaveClass('custom-badge');
  });

  it('accepts custom sx prop', () => {
    const { container } = renderWithTheme(
      <Badge badgeContent={4} sx={{ '& .MuiBadge-badge': { fontSize: 20 } }}>
        <MailIcon />
      </Badge>
    );
    expect(container.querySelector('.MuiBadge-badge')).toBeInTheDocument();
  });

  it('renders children', () => {
    const { container } = renderWithTheme(
      <Badge badgeContent={4}>
        <MailIcon data-testid="mail-icon" />
      </Badge>
    );
    expect(container.querySelector('[data-testid="mail-icon"]')).toBeInTheDocument();
  });
});
