import React from 'react';

export default function withLink(WrappedComponent, url) {
    return (props) => {
        return (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <WrappedComponent {...props} />
          </a>
        );
      };
}
