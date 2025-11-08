    import React from 'react';
    import { Loader2 } from 'lucide-react';

    const LoadingSpinner = () => {
      return (
        <div className="flex items-center justify-center h-[30vh]">
          <Loader2 className="animate-spin w-12 h-12 text-blue-500" /> Loading Photos
        </div>
      );
    };

    export default LoadingSpinner;
