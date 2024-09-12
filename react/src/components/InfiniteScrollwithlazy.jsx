// src/components/InfiniteScrollwithLazy.jsx
import React, { lazy, Suspense } from 'react';

const InfiniteScrollList = lazy(() => import('../pages/InfiniteScrollList'));

const InfiniteScrollwithLazy = () => {
  return (
    <Suspense
      fallback={
        <div className="p-4 space-y-4">
          <div className="h-32 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
          <div className="h-12 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
          <div className="h-12 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
        </div>
      }
    >
      <InfiniteScrollList />
    </Suspense>
  );
};

export default InfiniteScrollwithLazy;
