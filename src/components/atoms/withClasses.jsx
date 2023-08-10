// withClasses.js

import React from 'react';

export default function withClasses(WrappedComponent) {
  return (props) => {
    console.log(props)
    const newClassList = [props.className, ...props.className.split(' ').map(e => `!${e}`)];
    console.log('New class list', newClassList)


    return <WrappedComponent className={newClassList.join(' ')} {...props} />;
  };
}
