// react-day-picker.d.ts
import { DayPickerProps as OriginalDayPickerProps } from 'react-day-picker';

declare module 'react-day-picker' {
  // Extending the DayPickerProps to include custom icon properties
  export interface DayPickerProps extends OriginalDayPickerProps {
    components?: {
      previousButton?: React.ComponentType<React.ComponentProps<'button'>>;
      nextButton?: React.ComponentType<React.ComponentProps<'button'>>;
      IconLeft?: React.ComponentType<React.ComponentProps<'svg'>>;
      IconRight?: React.ComponentType<React.ComponentProps<'svg'>>;
    };
  }
}
