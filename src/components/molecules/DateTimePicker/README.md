# DateTimePicker

A wrapper around MUI X DateTimePicker component integrated with the MRS design system.

## Features

- Full integration with MRS design tokens
- Combined date and time selection
- Support for 12-hour and 24-hour formats
- Customizable date/time formats
- Min/max datetime constraints
- Custom minutes step
- Custom date validation
- Multiple view modes
- LocalizationProvider support

## Installation

The DateTimePicker requires `@mui/x-date-pickers` and `dayjs` packages:

```bash
npm install @mui/x-date-pickers dayjs
```

## Basic Usage

```tsx
import { DateTimePicker, LocalizationProvider } from '@mgomez-ext/mrs-ui';
import dayjs from 'dayjs';

function MyComponent() {
  const [value, setValue] = React.useState(dayjs());

  return (
    <LocalizationProvider>
      <DateTimePicker
        label="Select Date & Time"
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </LocalizationProvider>
  );
}
```

## Props

All MUI X DateTimePicker props are supported. See [MUI X DateTimePicker documentation](https://mui.com/x/react-date-pickers/date-time-picker/) for full API reference.

### Common Props

- `value`: Current datetime value (Dayjs object or null)
- `onChange`: Callback when value changes
- `label`: Input label text
- `disabled`: Disable the picker
- `readOnly`: Make the picker read-only
- `format`: Datetime display format (default: 'MM/DD/YYYY hh:mm A')
- `ampm`: Use 12-hour format with AM/PM (default: true)
- `minDateTime`: Minimum selectable datetime
- `maxDateTime`: Maximum selectable datetime
- `minutesStep`: Step between time options (e.g., 15, 30)
- `shouldDisableDate`: Function to disable specific dates
- `views`: Available views (default: ['year', 'month', 'day', 'hours', 'minutes'])
- `openTo`: Initial view (default: 'day')

## Examples

### 24-Hour Format

```tsx
<DateTimePicker label="Date & Time" format="DD/MM/YYYY HH:mm" ampm={false} value={dayjs()} />
```

### With Min/Max DateTime

```tsx
<DateTimePicker
  label="Next 7 Days"
  minDateTime={dayjs()}
  maxDateTime={dayjs().add(7, 'day')}
  value={dayjs().add(1, 'day')}
/>
```

### With Minutes Step

```tsx
<DateTimePicker label="Date & Time (30 min intervals)" minutesStep={30} value={dayjs()} />
```

### With Disabled Dates (Weekends)

```tsx
<DateTimePicker
  label="Weekday Appointments"
  shouldDisableDate={(date) => {
    const day = date.day();
    return day === 0 || day === 6; // Disable Sundays and Saturdays
  }}
  value={dayjs()}
/>
```

### With Validation

```tsx
const [value, setValue] = React.useState(null);
const [error, setError] = React.useState(null);

<DateTimePicker
  label="Future Date & Business Hours"
  value={value}
  onChange={(newValue) => {
    setValue(newValue);
    if (!newValue) {
      setError('Date and time are required');
    } else if (newValue.isBefore(dayjs(), 'minute')) {
      setError('Date and time must be in the future');
    } else {
      const hour = newValue.hour();
      if (hour < 9 || hour >= 17) {
        setError('Time must be during business hours (9 AM - 5 PM)');
      } else {
        setError(null);
      }
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

### Opening to Time View

```tsx
<DateTimePicker label="Date & Time" openTo="hours" value={dayjs()} />
```

## LocalizationProvider

The DateTimePicker requires a LocalizationProvider wrapper. This can be placed at your app root or around individual components:

```tsx
import { LocalizationProvider } from '@mgomez-ext/mrs-ui';

function App() {
  return <LocalizationProvider>{/* Your components using DateTimePicker */}</LocalizationProvider>;
}
```

## MUI Documentation

See [MUI X DateTimePicker documentation](https://mui.com/x/react-date-pickers/date-time-picker/) for full API reference.
