/**
 * CircularProgress component tests
 */

import React from 'react';
import { render, screen } from '../../../../tests/test-utils';
import { CircularProgress } from './CircularProgress';

describe('CircularProgress', () => {
  it('renders with default props', () => {
    const { container } = render(<CircularProgress />);
    const progress = container.querySelector('.MuiCircularProgress-root');
    expect(progress).toBeInTheDocument();
  });

  it('renders with 16px size', () => {
    const { container } = render(<CircularProgress size={16} />);
    const progress = container.querySelector('.MuiCircularProgress-root');
    expect(progress).toBeInTheDocument();
    // MUI applies size via CSS, not attributes
  });

  it('renders with 32px size (default)', () => {
    const { container } = render(<CircularProgress size={32} />);
    const progress = container.querySelector('.MuiCircularProgress-root');
    expect(progress).toBeInTheDocument();
    // MUI applies size via CSS, not attributes
  });

  it('renders with primary color', () => {
    const { container } = render(<CircularProgress color="primary" />);
    const progress = container.querySelector('.MuiCircularProgress-colorPrimary');
    expect(progress).toBeInTheDocument();
  });

  it('renders with secondary color', () => {
    const { container } = render(<CircularProgress color="secondary" />);
    const progress = container.querySelector('.MuiCircularProgress-colorSecondary');
    expect(progress).toBeInTheDocument();
  });

  it('renders with inherit color', () => {
    const { container } = render(<CircularProgress color="inherit" />);
    const progress = container.querySelector('.MuiCircularProgress-colorInherit');
    expect(progress).toBeInTheDocument();
  });

  it('renders in indeterminate variant by default', () => {
    const { container } = render(<CircularProgress />);
    const progress = container.querySelector('.MuiCircularProgress-indeterminate');
    expect(progress).toBeInTheDocument();
  });

  it('renders in determinate variant with value', () => {
    const { container } = render(<CircularProgress variant="determinate" value={50} />);
    const progress = container.querySelector('.MuiCircularProgress-determinate');
    expect(progress).toBeInTheDocument();
  });

  it('renders with label when showLabel is true and variant is determinate', () => {
    render(<CircularProgress variant="determinate" value={75} showLabel />);
    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  it('does not render label when showLabel is false', () => {
    render(<CircularProgress variant="determinate" value={75} showLabel={false} />);
    expect(screen.queryByText('75%')).not.toBeInTheDocument();
  });

  it('does not render label when variant is indeterminate even if showLabel is true', () => {
    render(<CircularProgress variant="indeterminate" value={75} showLabel />);
    expect(screen.queryByText('75%')).not.toBeInTheDocument();
  });

  it('formats label as percentage', () => {
    render(<CircularProgress variant="determinate" value={99} showLabel />);
    expect(screen.getByText('99%')).toBeInTheDocument();
  });

  it('rounds label value', () => {
    render(<CircularProgress variant="determinate" value={75.6} showLabel />);
    expect(screen.getByText('76%')).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<CircularProgress ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it('applies custom sx prop', () => {
    const { container } = render(<CircularProgress sx={{ margin: 2 }} />);
    const progress = container.querySelector('.MuiCircularProgress-root');
    expect(progress).toHaveStyle({ margin: '16px' });
  });

  it('handles value prop correctly in determinate variant', () => {
    const { container } = render(<CircularProgress variant="determinate" value={25} />);
    const circle = container.querySelector('.MuiCircularProgress-circle');
    expect(circle).toBeInTheDocument();
  });
});
