# TimePicker

A wrapper around MUI X TimePicker component integrated with the MRS design system.

## Features

- Full integration with MRS design tokens
- Support for 12-hour and 24-hour formats
- Customizable time formats
- Min/max time constraints
- Custom minutes step
- Multiple view modes (hours, minutes, seconds)
- LocalizationProvider support

## Installation

The TimePicker requires `@mui/x-date-pickers` and `dayjs` packages:

```bash
npm install @mui/x-date-pickers dayjs
```

## Basic Usage

```tsx
import { TimePicker, LocalizationProvider } from '@mgomez-ext/mrs-ui';
import dayjs from 'dayjs';

function MyComponent() {
  const [value, setValue] = React.useState(dayjs());

  return (
    <LocalizationProvider>
      <TimePicker label="Select Time" value={value} onChange={(newValue) => setValue(newValue)} />
    </LocalizationProvider>
  );
}
```

## Props

All MUI X TimePicker props are supported. See [MUI X TimePicker documentation](https://mui.com/x/react-date-pickers/time-picker/) for full API reference.

### Common Props

- `value`: Current time value (Dayjs object or null)
- `onChange`: Callback when value changes
- `label`: Input label text
- `disabled`: Disable the picker
- `readOnly`: Make the picker read-only
- `format`: Time display format (default: 'hh:mm A')
- `ampm`: Use 12-hour format with AM/PM (default: true)
- `minTime`: Minimum selectable time
- `maxTime`: Maximum selectable time
- `minutesStep`: Step between time options (e.g., 15, 30)
- `views`: Available views (default: ['hours', 'minutes'])
- `openTo`: Initial view (default: 'hours')

## Examples

### 24-Hour Format

```tsx
<TimePicker label="Select Time" format="HH:mm" ampm={false} value={dayjs()} />
```

### With Minutes Step

```tsx
<TimePicker label="Select Time" minutesStep={30} value={dayjs()} />
```

### Business Hours (9 AM - 5 PM)

```tsx
<TimePicker
  label="Business Hours"
  minTime={dayjs().hour(9).minute(0)}
  maxTime={dayjs().hour(17).minute(0)}
  value={dayjs().hour(12).minute(0)}
/>
```

### With Seconds

```tsx
<TimePicker
  label="Time with Seconds"
  views={['hours', 'minutes', 'seconds']}
  format="HH:mm:ss"
  ampm={false}
  value={dayjs()}
/>
```

### With Validation

```tsx
const [value, setValue] = React.useState(null);
const [error, setError] = React.useState(null);

<TimePicker
  label="Business Hours"
  value={value}
  onChange={(newValue) => {
    setValue(newValue);
    if (newValue) {
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

## LocalizationProvider

The TimePicker requires a LocalizationProvider wrapper. This can be placed at your app root or around individual components:

```tsx
import { LocalizationProvider } from '@mgomez-ext/mrs-ui';

function App() {
  return <LocalizationProvider>{/* Your components using TimePicker */}</LocalizationProvider>;
}
```

## MUI Documentation

See [MUI X TimePicker documentation](https://mui.com/x/react-date-pickers/time-picker/) for full API reference.
