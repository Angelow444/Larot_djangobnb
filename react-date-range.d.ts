declare module 'react-date-range' {
  import * as React from 'react';

  export interface Range {
    startDate?: Date;
    endDate?: Date;
    key?: string;
  }

  export interface RangeKeyDict {
    [key: string]: Range;
  }

  export interface DateRangeProps {
    className?: string;
    rangeColors?: string[];
    ranges: Range[];
    date?: Date;
    onChange?: (value: RangeKeyDict) => void;
    direction?: 'vertical' | 'horizontal';
    showDateDisplay?: boolean;
    minDate?: Date;
    maxDate?: Date;
    disabledDates?: Date[];
    [key: string]: any;
  }

  export const DateRange: React.FC<DateRangeProps>;
}

declare module 'react-date-range/dist/styles.css';
declare module 'react-date-range/dist/theme/default.css';
