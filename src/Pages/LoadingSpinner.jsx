// @flow strict
import * as React from "react";

function LoadingSpinner() {
  // return null;
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-primary  z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-secondary" />
    </div>
  );
}

export default LoadingSpinner;
