import React from 'react';
import Foundation from 'foundation-sites';

export const Badge = ({ as: As, children }) => {
  if (!As) {
    return <span className="badge">{children}</span>;
  }

  return <As className="badge">{children}</As>;
}