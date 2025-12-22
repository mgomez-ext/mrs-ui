/**
 * Divider component tests
 */

import React from 'react';
import { renderWithTheme } from '../../../../tests/test-utils';
import { Divider } from './Divider';

describe('Divider', () => {
  it('renders horizontal divider by default', () => {
    const { container } = renderWithTheme(<Divider />);
    const divider = container.querySelector('hr');
    expect(divider).toBeInTheDocument();
    expect(divider).not.toHaveClass('MuiDivider-vertical');
  });

  it('renders vertical divider', () => {
    const { container } = renderWithTheme(<Divider orientation="vertical" />);
    const divider = container.querySelector('.MuiDivider-root');
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass('MuiDivider-vertical');
  });

  it('renders with fullWidth variant by default', () => {
    const { container } = renderWithTheme(<Divider />);
    const divider = container.querySelector('hr');
    expect(divider).toHaveClass('MuiDivider-fullWidth');
  });

  it('renders with inset variant', () => {
    const { container } = renderWithTheme(<Divider variant="inset" />);
    const divider = container.querySelector('hr');
    expect(divider).toHaveClass('MuiDivider-inset');
  });

  it('renders with middle variant', () => {
    const { container } = renderWithTheme(<Divider variant="middle" />);
    const divider = container.querySelector('hr');
    expect(divider).toHaveClass('MuiDivider-middle');
  });

  it('renders with light prop', () => {
    const { container } = renderWithTheme(<Divider light />);
    const divider = container.querySelector('hr');
    expect(divider).toBeInTheDocument();
  });

  it('renders with absolute positioning', () => {
    const { container } = renderWithTheme(<Divider absolute />);
    const divider = container.querySelector('hr');
    expect(divider).toHaveClass('MuiDivider-absolute');
  });

  it('renders with flexItem for vertical divider', () => {
    const { container } = renderWithTheme(<Divider orientation="vertical" flexItem />);
    const divider = container.querySelector('.MuiDivider-root');
    expect(divider).toHaveClass('MuiDivider-flexItem');
  });

  it('accepts custom className', () => {
    const { container } = renderWithTheme(<Divider className="custom-divider" />);
    const divider = container.querySelector('hr');
    expect(divider).toHaveClass('custom-divider');
  });

  it('accepts custom sx prop', () => {
    const { container } = renderWithTheme(<Divider sx={{ borderColor: 'primary.main' }} />);
    const divider = container.querySelector('hr');
    expect(divider).toBeInTheDocument();
  });

  it('renders with text content', () => {
    const { container } = renderWithTheme(<Divider>Text</Divider>);
    const divider = container.querySelector('.MuiDivider-root');
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveTextContent('Text');
  });

  it('renders with text align left', () => {
    const { container } = renderWithTheme(<Divider textAlign="left">Left</Divider>);
    const divider = container.querySelector('.MuiDivider-root');
    expect(divider).toHaveClass('MuiDivider-textAlignLeft');
  });

  it('renders with text align right', () => {
    const { container } = renderWithTheme(<Divider textAlign="right">Right</Divider>);
    const divider = container.querySelector('.MuiDivider-root');
    expect(divider).toHaveClass('MuiDivider-textAlignRight');
  });

  it('renders with text align center', () => {
    const { container } = renderWithTheme(<Divider textAlign="center">Center</Divider>);
    const divider = container.querySelector('.MuiDivider-root');
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass('MuiDivider-withChildren');
  });
});
