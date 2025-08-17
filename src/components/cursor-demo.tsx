"use client";
import React from 'react';
import {
  Cursor,
  CursorFollow,
  CursorProvider,
} from '@/components/animate-ui/components/cursor';

export const CursorDemo = ({ children }: { children: React.ReactNode }) => {
  return (
    <CursorProvider>
      <div className="relative w-full ">
        <Cursor className="pointer-events-none z-50">
          <svg
            className="w-6 h-6 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              fill="currentColor"
              d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
            />
          </svg>
        </Cursor>
        {children}
      </div>
    </CursorProvider>
  );
};