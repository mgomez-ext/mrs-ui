# DatePicker

A wrapper around MUI X DatePicker component integrated with the MRS design system.

## Features

- Full integration with MRS design tokens
- Support for desktop and mobile variants
- Customizable date formats
- Min/max date constraints
- Custom date validation
- Multiple view modes (day, month, year)
- LocalizationProvider support

## Installation

The DatePicker requires `@mui/x-date-pickers` and `dayjs` packages:

```bash
npm install @mui/x-date-pickers dayjs
```

## Basic Usage

```tsx
import { DatePicker, LocalizationProvider } from '@mgomez-ext/mrs-ui';
import dayjs from 'dayjs';

function MyComponent() {
  const [value, setValue] = React.useState(dayjs());

  return (
    <LocalizationProvider>
      <DatePicker label="Select Date" value={value} onChange={(newValue) => setValue(newValue)} />
    </LocalizationProvider>
  );
}
```

## Props

All MUI X DatePicker props are supported. See [MUI X DatePicker documentation](https://mui.com/x/react-date-pickers/date-picker/) for full API reference.

### Common Props

- `value`: Current date value (Dayjs object or null)
- `onChange`: Callback when value changes
- `label`: Input label text
- `disabled`: Disable the picker
- `readOnly`: Make the picker read-only
- `format`: Date display format (default: 'MM/DD/YYYY')
- `minDate`: Minimum selectable date
- `maxDate`: Maximum selectable date
- `shouldDisableDate`: Function to disable specific dates
- `views`: Available views (default: ['year', 'month', 'day'])
- `openTo`: Initial view (default: 'day')

## Examples

### With Min/Max Dates

```tsx
<DatePicker label="Select Date" minDate={dayjs()} maxDate={dayjs().add(30, 'day')} />
```

### With Custom Format

```tsx
<DatePicker label="Select Date" format="YYYY-MM-DD" value={dayjs()} />
```

### With Disabled Dates (Weekends)

```tsx
<DatePicker
  label="Select Weekday"
  shouldDisableDate={(date) => {
    const day = date.day();
    return day === 0 || day === 6; // Disable Sundays and Saturdays
  }}
/>
```

### With Validation

```tsx
const [value, setValue] = React.useState(null);
const [error, setError] = React.useState(null);

<DatePicker
  label="Future Date"
  value={value}
  onChange={(newValue) => {
    setValue(newValue);
    if (newValue && newValue.isBefore(dayjs(), 'day')) {
      setError('Date must be in the future');
    } else {
      setError(null);
    }
  }}
  slotProps={{
    textField: {
      error: !!error,
      helperText: error,
    },
  }}
/>;
```

## LocalizationProvider

The DatePicker requires a LocalizationProvider wrapper. This can be placed at your app root or around individual components:

```tsx
import { LocalizationProvider } from '@mgomez-ext/mrs-ui';

function App() {
  return <LocalizationProvider>{/* Your components using DatePicker */}</LocalizationProvider>;
}
```

## Figma Reference

- [DatePicker Component](https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=6569-39392)
- [MobileDatePicker Component](https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=6569-39448)
- [StaticDatePicker Component](https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=1258-52857)
