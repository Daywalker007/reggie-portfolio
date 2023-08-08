// withClasses.js

import React from 'react';

export default function withClasses(WrappedComponent, newClasses) {
  return ({ className, ...props }) => {
    const newClassList = [className, ...newClasses.split(' ')];

    return <WrappedComponent className={newClassList.join(' ')} {...props} />;
  };
}
