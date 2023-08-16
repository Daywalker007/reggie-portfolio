// withClasses.js

import React from 'react';

export default function withClasses(WrappedComponent, classes) {
  return (props) => {
    console.log(props)
    console.log('New class list', classes)


    return <WrappedComponent className={classes} {...props} />;
  };
}
