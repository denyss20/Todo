import React from 'react';

const FilteredTodo = ({ filter, setFilter }) => {

  return (
    <div className="flex items-center justify-center gap-5">
      <button
  className={`hover:text-red-600 transition-colors duration-300 ease-in-out cursor-pointer ${filter === 'all' ? 'active' : ''}`}
  onClick={() => setFilter('all')}
>
  All
</button>

<button
  className={`hover:text-red-600 transition-colors duration-300 ease-in-out cursor-pointer ${filter === 'completed' ? 'active' : ''}`}
  onClick={() => setFilter('completed')}
>
  Completed
</button>

<button
  className={`hover:text-red-600 transition-colors duration-300 ease-in-out cursor-pointer ${filter === 'incomplete' ? 'active' : ''}`}
  onClick={() => setFilter('incomplete')}
>
  Incomplete
</button>

    </div>
  );
};

export default FilteredTodo;
