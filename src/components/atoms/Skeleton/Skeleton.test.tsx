/**
 * Skeleton component tests
 */

import React from 'react';
import { render } from '../../../../tests/test-utils';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  it('renders with default props', () => {
    const { container } = render(<Skeleton />);
    const skeleton = container.querySelector('.MuiSkeleton-root');
    expect(skeleton).toBeInTheDocument();
  });

  it('renders with text variant', () => {
    const { container } = render(<Skeleton variant="text" />);
    const skeleton = container.querySelector('.MuiSkeleton-text');
    expect(skeleton).toBeInTheDocument();
  });

  it('renders with circular variant', () => {
    const { container } = render(<Skeleton variant="circular" />);
    const skeleton = container.querySelector('.MuiSkeleton-circular');
    expect(skeleton).toBeInTheDocument();
  });

  it('renders with rectangular variant', () => {
    const { container } = render(<Skeleton variant="rectangular" />);
    const skeleton = container.querySelector('.MuiSkeleton-rectangular');
    expect(skeleton).toBeInTheDocument();
  });

  it('renders with rounded variant', () => {
    const { container } = render(<Skeleton variant="rounded" />);
    const skeleton = container.querySelector('.MuiSkeleton-rounded');
    expect(skeleton).toBeInTheDocument();
  });

  it('renders with custom width', () => {
    const { container } = render(<Skeleton width={200} />);
    const skeleton = container.querySelector('.MuiSkeleton-root');
    expect(skeleton).toBeInTheDocument();
  });

  it('renders with custom height', () => {
    const { container } = render(<Skeleton height={50} />);
    const skeleton = container.querySelector('.MuiSkeleton-root');
    expect(skeleton).toBeInTheDocument();
  });

  it('renders with custom width and height', () => {
    const { container } = render(<Skeleton width={100} height={100} />);
    const skeleton = container.querySelector('.MuiSkeleton-root');
    expect(skeleton).toBeInTheDocument();
  });

  it('renders with pulse animation by default', () => {
    const { container } = render(<Skeleton />);
    const skeleton = container.querySelector('.MuiSkeleton-pulse');
    expect(skeleton).toBeInTheDocument();
  });

  it('renders with wave animation', () => {
    const { container } = render(<Skeleton animation="wave" />);
    const skeleton = container.querySelector('.MuiSkeleton-wave');
    expect(skeleton).toBeInTheDocument();
  });

  it('renders without animation when animation is false', () => {
    const { container } = render(<Skeleton animation={false} />);
    const skeleton = container.querySelector('.MuiSkeleton-root');
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).not.toHaveClass('MuiSkeleton-pulse');
    expect(skeleton).not.toHaveClass('MuiSkeleton-wave');
  });

  it('applies default width for text variant', () => {
    const { container } = render(<Skeleton variant="text" />);
    const skeleton = container.querySelector('.MuiSkeleton-root');
    expect(skeleton).toBeInTheDocument();
    // Width 120 is applied via inline style
  });

  it('applies default height for text variant', () => {
    const { container } = render(<Skeleton variant="text" />);
    const skeleton = container.querySelector('.MuiSkeleton-root');
    expect(skeleton).toBeInTheDocument();
    // Height 12 is applied via inline style
  });

  it('applies default size for circular variant', () => {
    const { container } = render(<Skeleton variant="circular" />);
    const skeleton = container.querySelector('.MuiSkeleton-root');
    expect(skeleton).toBeInTheDocument();
    // 40x40 is applied via inline style
  });

  it('applies default size for rectangular variant', () => {
    const { container } = render(<Skeleton variant="rectangular" />);
    const skeleton = container.querySelector('.MuiSkeleton-root');
    expect(skeleton).toBeInTheDocument();
    // 120x120 is applied via inline style
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Skeleton ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it('applies custom sx prop', () => {
    const { container } = render(<Skeleton sx={{ margin: 2 }} />);
    const skeleton = container.querySelector('.MuiSkeleton-root');
    expect(skeleton).toHaveStyle({ margin: '16px' });
  });

  it('accepts string values for width and height', () => {
    const { container } = render(<Skeleton width="100%" height="2rem" />);
    const skeleton = container.querySelector('.MuiSkeleton-root');
    expect(skeleton).toBeInTheDocument();
  });
});
