import React from 'react';
import  { v4 as uuidv4 } from 'uuid';

export const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className="toolbar">
      {filters.map((filter) => {
        const className = selected !== filter ? 'toolbar-btn' : 'toolbar-btn selected';        
        return (
          <button className={className} key={uuidv4()} onClick={onSelectFilter(filter)}>
            {filter}
          </button>
        );
      })}
    </div>
  );
};
