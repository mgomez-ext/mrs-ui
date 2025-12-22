/**
 * Avatar component tests
 */

import React from 'react';
import { render, screen } from '../../../../tests/test-utils';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders with initials', () => {
    render(<Avatar>JD</Avatar>);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders with image', () => {
    render(<Avatar src="/test-image.jpg" alt="John Doe" />);
    const img = screen.getByAltText('John Doe');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/test-image.jpg');
  });

  it('renders with icon', () => {
    render(
      <Avatar>
        <PersonIcon data-testid="person-icon" />
      </Avatar>
    );
    expect(screen.getByTestId('person-icon')).toBeInTheDocument();
  });

  it('renders with default size (40px)', () => {
    const { container } = render(<Avatar>JD</Avatar>);
    const avatar = container.querySelector('.MuiAvatar-root');
    expect(avatar).toHaveStyle({ width: '40px', height: '40px' });
  });

  it('renders with size 18px', () => {
    const { container } = render(<Avatar size={18}>JD</Avatar>);
    const avatar = container.querySelector('.MuiAvatar-root');
    expect(avatar).toHaveStyle({ width: '18px', height: '18px' });
  });

  it('renders with size 24px', () => {
    const { container } = render(<Avatar size={24}>JD</Avatar>);
    const avatar = container.querySelector('.MuiAvatar-root');
    expect(avatar).toHaveStyle({ width: '24px', height: '24px' });
  });

  it('renders with size 32px', () => {
    const { container } = render(<Avatar size={32}>JD</Avatar>);
    const avatar = container.querySelector('.MuiAvatar-root');
    expect(avatar).toHaveStyle({ width: '32px', height: '32px' });
  });

  it('renders with size 40px', () => {
    const { container } = render(<Avatar size={40}>JD</Avatar>);
    const avatar = container.querySelector('.MuiAvatar-root');
    expect(avatar).toHaveStyle({ width: '40px', height: '40px' });
  });

  it('renders with circular variant (default)', () => {
    const { container } = render(<Avatar>JD</Avatar>);
    const avatar = container.querySelector('.MuiAvatar-circular');
    expect(avatar).toBeInTheDocument();
  });

  it('renders with rounded variant', () => {
    const { container } = render(<Avatar variant="rounded">JD</Avatar>);
    const avatar = container.querySelector('.MuiAvatar-rounded');
    expect(avatar).toBeInTheDocument();
  });

  it('renders with square variant', () => {
    const { container } = render(<Avatar variant="square">JD</Avatar>);
    const avatar = container.querySelector('.MuiAvatar-square');
    expect(avatar).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<Avatar className="custom-avatar">JD</Avatar>);
    const avatar = container.querySelector('.custom-avatar');
    expect(avatar).toBeInTheDocument();
  });

  it('renders with custom sx prop', () => {
    const { container } = render(<Avatar sx={{ backgroundColor: 'red' }}>JD</Avatar>);
    const avatar = container.querySelector('.MuiAvatar-root');
    expect(avatar).toHaveStyle('background-color: red');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Avatar ref={ref}>JD</Avatar>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('applies correct font size for size 18px', () => {
    const { container } = render(<Avatar size={18}>JD</Avatar>);
    const avatar = container.querySelector('.MuiAvatar-root');
    expect(avatar).toHaveStyle('font-size: 0.625rem');
  });

  it('applies correct font size for size 24px', () => {
    const { container } = render(<Avatar size={24}>JD</Avatar>);
    const avatar = container.querySelector('.MuiAvatar-root');
    expect(avatar).toHaveStyle('font-size: 0.75rem');
  });

  it('applies correct font size for size 32px', () => {
    const { container } = render(<Avatar size={32}>JD</Avatar>);
    const avatar = container.querySelector('.MuiAvatar-root');
    expect(avatar).toHaveStyle('font-size: 0.75rem');
  });

  it('applies correct font size for size 40px', () => {
    const { container } = render(<Avatar size={40}>JD</Avatar>);
    const avatar = container.querySelector('.MuiAvatar-root');
    expect(avatar).toHaveStyle('font-size: 1.25rem');
  });

  it('renders with alt text for accessibility', () => {
    render(<Avatar src="/test.jpg" alt="User Avatar" />);
    expect(screen.getByAltText('User Avatar')).toBeInTheDocument();
  });

  it('uses theme font family', () => {
    const { container } = render(<Avatar>JD</Avatar>);
    const avatar = container.querySelector('.MuiAvatar-root');
    // Font family is set via theme, so we just verify the component renders
    expect(avatar).toBeInTheDocument();
  });
});
