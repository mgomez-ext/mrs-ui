/**
 * LinearProgress component tests
 */

import React from 'react';
import { render, screen } from '../../../../tests/test-utils';
import { LinearProgress } from './LinearProgress';

describe('LinearProgress', () => {
  it('renders with default props', () => {
    const { container } = render(<LinearProgress />);
    const progress = container.querySelector('.MuiLinearProgress-root');
    expect(progress).toBeInTheDocument();
  });

  it('renders with primary color', () => {
    const { container } = render(<LinearProgress color="primary" />);
    const progress = container.querySelector('.MuiLinearProgress-colorPrimary');
    expect(progress).toBeInTheDocument();
  });

  it('renders with secondary color', () => {
    const { container } = render(<LinearProgress color="secondary" />);
    const progress = container.querySelector('.MuiLinearProgress-colorSecondary');
    expect(progress).toBeInTheDocument();
  });

  it('renders with inherit color', () => {
    const { container } = render(<LinearProgress color="inherit" />);
    const progress = container.querySelector('.MuiLinearProgress-colorInherit');
    expect(progress).toBeInTheDocument();
  });

  it('renders in indeterminate variant by default', () => {
    const { container } = render(<LinearProgress />);
    const progress = container.querySelector('.MuiLinearProgress-indeterminate');
    expect(progress).toBeInTheDocument();
  });

  it('renders in determinate variant with value', () => {
    const { container } = render(<LinearProgress variant="determinate" value={50} />);
    const progress = container.querySelector('.MuiLinearProgress-determinate');
    expect(progress).toBeInTheDocument();
  });

  it('renders in buffer variant', () => {
    const { container } = render(<LinearProgress variant="buffer" value={50} valueBuffer={75} />);
    const progress = container.querySelector('.MuiLinearProgress-buffer');
    expect(progress).toBeInTheDocument();
  });

  it('renders with label when showLabel is true and variant is determinate', () => {
    render(<LinearProgress variant="determinate" value={75} showLabel />);
    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  it('renders with label when showLabel is true and variant is buffer', () => {
    render(<LinearProgress variant="buffer" value={50} valueBuffer={75} showLabel />);
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  it('does not render label when showLabel is false', () => {
    render(<LinearProgress variant="determinate" value={75} showLabel={false} />);
    expect(screen.queryByText('75%')).not.toBeInTheDocument();
  });

  it('does not render label when variant is indeterminate even if showLabel is true', () => {
    render(<LinearProgress variant="indeterminate" showLabel />);
    expect(screen.queryByText('%')).not.toBeInTheDocument();
  });

  it('formats label as percentage', () => {
    render(<LinearProgress variant="determinate" value={99} showLabel />);
    expect(screen.getByText('99%')).toBeInTheDocument();
  });

  it('rounds label value', () => {
    render(<LinearProgress variant="determinate" value={75.6} showLabel />);
    expect(screen.getByText('76%')).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<LinearProgress ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it('applies custom sx prop', () => {
    const { container } = render(<LinearProgress sx={{ margin: 2 }} />);
    const progress = container.querySelector('.MuiLinearProgress-root');
    expect(progress).toHaveStyle({ margin: '16px' });
  });

  it('handles value prop correctly in determinate variant', () => {
    const { container } = render(<LinearProgress variant="determinate" value={25} />);
    const bar = container.querySelector('.MuiLinearProgress-bar');
    expect(bar).toBeInTheDocument();
  });

  it('handles valueBuffer prop in buffer variant', () => {
    const { container } = render(<LinearProgress variant="buffer" value={50} valueBuffer={75} />);
    const bar = container.querySelector('.MuiLinearProgress-bar');
    expect(bar).toBeInTheDocument();
  });

  it('applies minimum width', () => {
    const { container } = render(<LinearProgress />);
    const progress = container.querySelector('.MuiLinearProgress-root');
    expect(progress).toHaveStyle({ minWidth: '200px' });
  });
});
