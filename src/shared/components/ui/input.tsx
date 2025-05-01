import * as React from 'react';

import { cn } from '@/shared';

type InputProps = React.ComponentProps<'input'> & {
  variant?: 'default' | 'underline';
};

function Input({ className, type, variant = 'default', ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        '[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none', // 브라우저 제공 증감 버튼 숨김
        variant === 'underline'
          ? 'border-b border-gray-300 px-0 shadow-none focus:border-b-2 focus:border-gray-500 focus:outline-none focus-visible:ring-0'
          : 'rounded-md border',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
