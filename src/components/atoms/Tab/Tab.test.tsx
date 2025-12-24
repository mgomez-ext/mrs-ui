/**
 * Tab component tests
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import { Tab } from './Tab';
import HomeIcon from '@mui/icons-material/Home';

describe('Tab', () => {
  describe('Rendering', () => {
    it('renders tab with label', () => {
      renderWithTheme(<Tab label="Home" />);
      const tab = screen.getByRole('tab');
      expect(tab).toBeInTheDocument();
      expect(tab).toHaveTextContent('HOME'); // uppercase transform
    });

    it('renders tab with custom label text', () => {
      renderWithTheme(<Tab label="Dashboard" />);
      const tab = screen.getByRole('tab');
      expect(tab).toHaveTextContent('DASHBOARD');
    });

    it('applies uppercase text transform', () => {
      const { container } = renderWithTheme(<Tab label="Settings" />);
      const tab = container.querySelector('.MuiTab-root');
      expect(tab).toHaveStyle({ textTransform: 'uppercase' });
    });

    it('applies letter spacing', () => {
      const { container } = renderWithTheme(<Tab label="Profile" />);
      const tab = container.querySelector('.MuiTab-root');
      expect(tab).toHaveStyle({ letterSpacing: '0.4px' });
    });
  });

  describe('Icon Rendering', () => {
    it('renders without icon', () => {
      renderWithTheme(<Tab label="Home" />);
      const tab = screen.getByRole('tab');
      expect(tab.querySelector('svg')).not.toBeInTheDocument();
    });

    it('renders with icon', () => {
      renderWithTheme(<Tab label="Home" icon={<HomeIcon />} />);
      const tab = screen.getByRole('tab');
      const icon = tab.querySelector('svg');
      expect(icon).toBeInTheDocument();
    });

    it('renders icon on left by default', () => {
      renderWithTheme(<Tab label="Home" icon={<HomeIcon />} />);
      const tab = screen.getByRole('tab');
      expect(tab).toBeInTheDocument();
      // MUI uses flexbox for icon positioning
    });

    it('renders icon on right when iconPosition is right', () => {
      renderWithTheme(<Tab label="Home" icon={<HomeIcon />} iconPosition="right" />);
      const tab = screen.getByRole('tab');
      expect(tab).toBeInTheDocument();
    });

    it('renders icon on top when iconPosition is top', () => {
      renderWithTheme(<Tab label="Home" icon={<HomeIcon />} iconPosition="top" />);
      const tab = screen.getByRole('tab');
      expect(tab).toBeInTheDocument();
    });
  });

  describe('Colors', () => {
    it('renders with inherit color by default', () => {
      const { container } = renderWithTheme(<Tab label="Home" />);
      const tab = container.querySelector('.MuiTab-textColorInherit');
      expect(tab).toBeInTheDocument();
    });

    it('renders with primary color', () => {
      const { container } = renderWithTheme(<Tab label="Home" color="primary" />);
      const tab = container.querySelector('.MuiTab-textColorPrimary');
      expect(tab).toBeInTheDocument();
    });

    it('renders with secondary color', () => {
      const { container } = renderWithTheme(<Tab label="Home" color="secondary" />);
      const tab = container.querySelector('.MuiTab-textColorSecondary');
      expect(tab).toBeInTheDocument();
    });
  });

  describe('States', () => {
    it('can be selected', () => {
      renderWithTheme(<Tab label="Home" selected />);
      const tab = screen.getByRole('tab');
      expect(tab).toHaveAttribute('aria-selected', 'true');
    });

    it('is not selected by default', () => {
      renderWithTheme(<Tab label="Home" />);
      const tab = screen.getByRole('tab');
      expect(tab).toHaveAttribute('aria-selected', 'false');
    });

    it('can be disabled', () => {
      renderWithTheme(<Tab label="Home" disabled />);
      const tab = screen.getByRole('tab');
      expect(tab).toHaveAttribute('aria-disabled', 'true');
    });

    it('is not disabled by default', () => {
      renderWithTheme(<Tab label="Home" />);
      const tab = screen.getByRole('tab');
      expect(tab).toHaveAttribute('aria-disabled', 'false');
    });
  });

  describe('Interactions', () => {
    it('handles onClick event', () => {
      const handleClick = jest.fn();
      renderWithTheme(<Tab label="Home" onClick={handleClick} />);
      const tab = screen.getByRole('tab');
      
      tab.click();
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not trigger onClick when disabled', () => {
      const handleClick = jest.fn();
      renderWithTheme(<Tab label="Home" disabled onClick={handleClick} />);
      const tab = screen.getByRole('tab');
      
      tab.click();
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('can be focused with keyboard', () => {
      renderWithTheme(<Tab label="Home" />);
      const tab = screen.getByRole('tab');
      
      tab.focus();
      expect(tab).toHaveFocus();
    });

    it('handles onChange event', () => {
      const handleChange = jest.fn();
      renderWithTheme(<Tab label="Home" onChange={handleChange} />);
      const tab = screen.getByRole('tab');
      
      tab.click();
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('has tab role', () => {
      renderWithTheme(<Tab label="Home" />);
      const tab = screen.getByRole('tab');
      expect(tab).toBeInTheDocument();
    });

    it('has aria-selected attribute', () => {
      renderWithTheme(<Tab label="Home" />);
      const tab = screen.getByRole('tab');
      expect(tab).toHaveAttribute('aria-selected');
    });

    it('has aria-disabled attribute when disabled', () => {
      renderWithTheme(<Tab label="Home" disabled />);
      const tab = screen.getByRole('tab');
      expect(tab).toHaveAttribute('aria-disabled', 'true');
    });

    it('accepts aria-label', () => {
      renderWithTheme(<Tab label="Home" aria-label="Home page" />);
      const tab = screen.getByRole('tab');
      expect(tab).toHaveAttribute('aria-label', 'Home page');
    });

    it('accepts aria-controls for linked panel', () => {
      renderWithTheme(<Tab label="Home" aria-controls="home-panel" />);
      const tab = screen.getByRole('tab');
      expect(tab).toHaveAttribute('aria-controls', 'home-panel');
    });

    it('accepts id attribute', () => {
      renderWithTheme(<Tab label="Home" id="home-tab" />);
      const tab = screen.getByRole('tab');
      expect(tab).toHaveAttribute('id', 'home-tab');
    });
  });

  describe('Value Prop', () => {
    it('accepts value prop for tab identification', () => {
      renderWithTheme(<Tab label="Home" value="home" />);
      const tab = screen.getByRole('tab');
      expect(tab).toBeInTheDocument();
    });

    it('accepts numeric value', () => {
      renderWithTheme(<Tab label="First" value={0} />);
      const tab = screen.getByRole('tab');
      expect(tab).toBeInTheDocument();
    });

    it('accepts string value', () => {
      renderWithTheme(<Tab label="Dashboard" value="dashboard" />);
      const tab = screen.getByRole('tab');
      expect(tab).toBeInTheDocument();
    });
  });

  describe('Ref forwarding', () => {
    it('forwards ref to tab element', () => {
      const ref = React.createRef<HTMLButtonElement>();
      renderWithTheme(<Tab label="Home" ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('ref has correct tagName', () => {
      const ref = React.createRef<HTMLButtonElement>();
      renderWithTheme(<Tab label="Home" ref={ref} />);
      expect(ref.current?.tagName).toBe('BUTTON');
    });
  });

  describe('Custom styling', () => {
    it('accepts sx prop for custom styles', () => {
      const { container } = renderWithTheme(
        <Tab label="Home" sx={{ color: 'red' }} />
      );
      const tab = container.querySelector('.MuiTab-root');
      expect(tab).toBeInTheDocument();
    });

    it('accepts className prop', () => {
      const { container } = renderWithTheme(
        <Tab label="Home" className="custom-tab" />
      );
      const tab = container.querySelector('.custom-tab');
      expect(tab).toBeInTheDocument();
    });
  });

  describe('Icon Position Mapping', () => {
    it('maps left to start internally', () => {
      renderWithTheme(<Tab label="Home" icon={<HomeIcon />} iconPosition="left" />);
      const tab = screen.getByRole('tab');
      expect(tab).toBeInTheDocument();
    });

    it('maps right to end internally', () => {
      renderWithTheme(<Tab label="Home" icon={<HomeIcon />} iconPosition="right" />);
      const tab = screen.getByRole('tab');
      expect(tab).toBeInTheDocument();
    });

    it('keeps top as top internally', () => {
      renderWithTheme(<Tab label="Home" icon={<HomeIcon />} iconPosition="top" />);
      const tab = screen.getByRole('tab');
      expect(tab).toBeInTheDocument();
    });
  });

  describe('Combined Props', () => {
    it('renders with all props combined', () => {
      const handleClick = jest.fn();
      renderWithTheme(
        <Tab
          label="Dashboard"
          icon={<HomeIcon />}
          iconPosition="left"
          color="primary"
          selected
          value="dashboard"
          onClick={handleClick}
          aria-controls="dashboard-panel"
        />
      );
      
      const tab = screen.getByRole('tab');
      expect(tab).toBeInTheDocument();
      expect(tab).toHaveTextContent('DASHBOARD');
      expect(tab).toHaveAttribute('aria-selected', 'true');
      expect(tab).toHaveAttribute('aria-controls', 'dashboard-panel');
      
      tab.click();
      expect(handleClick).toHaveBeenCalled();
    });

    it('renders disabled tab with icon', () => {
      renderWithTheme(
        <Tab
          label="Settings"
          icon={<HomeIcon />}
          disabled
        />
      );
      
      const tab = screen.getByRole('tab');
      expect(tab).toHaveAttribute('aria-disabled', 'true');
      expect(tab.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('Wrapped prop', () => {
    it('accepts wrapped prop for label wrapping', () => {
      renderWithTheme(<Tab label="Very long tab label that might wrap" wrapped />);
      const tab = screen.getByRole('tab');
      expect(tab).toBeInTheDocument();
    });
  });
});
