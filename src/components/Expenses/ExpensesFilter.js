import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const currentYear = new Date().getFullYear();
  let availableYears = [];

  for (let i = 2019; i < currentYear + 1; i++) availableYears.push(i);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          className="expenses-filter__filter"
          value={props.selected}
          onChange={dropdownChangeHandler}
        >
          {availableYears.map((year) => (
            <option key={year}>{year}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
