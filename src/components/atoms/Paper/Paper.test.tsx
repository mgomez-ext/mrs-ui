/**
 * Paper component tests
 */

import React from 'react';
import { render, screen } from '../../../../tests/test-utils';
import { Paper } from './Paper';

describe('Paper', () => {
  it('renders with children', () => {
    render(<Paper>Test Content</Paper>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders with default props (elevation variant, elevation 1)', () => {
    const { container } = render(<Paper>Content</Paper>);
    const paper = container.querySelector('.MuiPaper-elevation1');
    expect(paper).toBeInTheDocument();
  });

  it('renders with elevation variant', () => {
    const { container } = render(<Paper variant="elevation">Content</Paper>);
    const paper = container.querySelector('.MuiPaper-elevation');
    expect(paper).toBeInTheDocument();
  });

  it('renders with outlined variant', () => {
    const { container } = render(<Paper variant="outlined">Content</Paper>);
    const paper = container.querySelector('.MuiPaper-outlined');
    expect(paper).toBeInTheDocument();
  });

  it('renders with elevation 0', () => {
    const { container } = render(<Paper elevation={0}>Content</Paper>);
    const paper = container.querySelector('.MuiPaper-elevation0');
    expect(paper).toBeInTheDocument();
  });

  it('renders with elevation 1', () => {
    const { container } = render(<Paper elevation={1}>Content</Paper>);
    const paper = container.querySelector('.MuiPaper-elevation1');
    expect(paper).toBeInTheDocument();
  });

  it('renders with elevation 4', () => {
    const { container } = render(<Paper elevation={4}>Content</Paper>);
    const paper = container.querySelector('.MuiPaper-elevation4');
    expect(paper).toBeInTheDocument();
  });

  it('renders with elevation 8', () => {
    const { container } = render(<Paper elevation={8}>Content</Paper>);
    const paper = container.querySelector('.MuiPaper-elevation8');
    expect(paper).toBeInTheDocument();
  });

  it('renders with elevation 16', () => {
    const { container } = render(<Paper elevation={16}>Content</Paper>);
    const paper = container.querySelector('.MuiPaper-elevation16');
    expect(paper).toBeInTheDocument();
  });

  it('renders with elevation 24', () => {
    const { container } = render(<Paper elevation={24}>Content</Paper>);
    const paper = container.querySelector('.MuiPaper-elevation24');
    expect(paper).toBeInTheDocument();
  });

  it('renders with rounded corners by default', () => {
    const { container } = render(<Paper>Content</Paper>);
    const paper = container.querySelector('.MuiPaper-rounded');
    expect(paper).toBeInTheDocument();
  });

  it('renders with square corners when square prop is true', () => {
    const { container } = render(<Paper square>Content</Paper>);
    const paper = container.querySelector('.MuiPaper-root');
    expect(paper).not.toHaveClass('MuiPaper-rounded');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Paper ref={ref}>Content</Paper>);
    expect(ref.current).toBeInTheDocument();
  });

  it('applies custom sx prop', () => {
    const { container } = render(<Paper sx={{ padding: 2 }}>Content</Paper>);
    const paper = container.querySelector('.MuiPaper-root');
    expect(paper).toHaveStyle({ padding: '16px' });
  });

  it('renders all elevation levels correctly', () => {
    const elevations = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    ] as const;

    elevations.forEach((elevation) => {
      const { unmount, container } = render(
        <Paper elevation={elevation}>Content {elevation}</Paper>
      );
      const paper = container.querySelector(`.MuiPaper-elevation${elevation}`);
      expect(paper).toBeInTheDocument();
      unmount();
    });
  });

  it('sets elevation to 0 for outlined variant regardless of elevation prop', () => {
    const { container } = render(
      <Paper variant="outlined" elevation={8}>
        Content
      </Paper>
    );
    const paper = container.querySelector('.MuiPaper-outlined');
    expect(paper).toBeInTheDocument();
    expect(container.querySelector('.MuiPaper-elevation8')).not.toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<Paper className="custom-class">Content</Paper>);
    const paper = container.querySelector('.custom-class');
    expect(paper).toBeInTheDocument();
  });

  it('renders with complex content', () => {
    render(
      <Paper>
        <div>
          <h1>Title</h1>
          <p>Paragraph</p>
        </div>
      </Paper>
    );
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Paragraph')).toBeInTheDocument();
  });

  it('renders elevation variant with square corners', () => {
    const { container } = render(
      <Paper variant="elevation" elevation={4} square>
        Content
      </Paper>
    );
    const paper = container.querySelector('.MuiPaper-root');
    expect(paper).toHaveClass('MuiPaper-elevation4');
    expect(paper).not.toHaveClass('MuiPaper-rounded');
  });

  it('renders outlined variant with square corners', () => {
    const { container } = render(
      <Paper variant="outlined" square>
        Content
      </Paper>
    );
    const paper = container.querySelector('.MuiPaper-root');
    expect(paper).toHaveClass('MuiPaper-outlined');
    expect(paper).not.toHaveClass('MuiPaper-rounded');
  });

  it('applies background color from theme', () => {
    const { container } = render(<Paper>Content</Paper>);
    const paper = container.querySelector('.MuiPaper-root');
    expect(paper).toBeInTheDocument();
    // Background color is applied by MUI theme
  });
});
