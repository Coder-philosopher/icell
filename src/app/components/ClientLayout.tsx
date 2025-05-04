'use client'

import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from './ui/tooltip';
import { Toaster } from './ui/toaster';
import CustomCursor from './CustomCursor';
import { queryClient } from '../lib/queryClient';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <CustomCursor />
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  );
} 