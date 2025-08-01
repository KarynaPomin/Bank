import { useState, useEffect } from "react";
import { FilterTypes } from "../pages/History";
import DateSettings from "./filterSettings/DateSettings";
import AmountSettings from "./filterSettings/AmountSettings";
import IncomesSettings from "./filterSettings/IncomesSettings";
import ExpensesSettings from "./filterSettings/ExpensesSettings";

function FilterPanel({ selectedFilter, onClick, onClickFilter }) {

    const renderFilterSettings = () => {
        switch (selectedFilter) {
            case FilterTypes.Date:
                return <DateSettings />
            case FilterTypes.Amount:
                return <AmountSettings />
            case FilterTypes.Incomes:
                return <IncomesSettings />
            case FilterTypes.Expenses:
                return <ExpensesSettings />
            default:
                return null;
        }
    };

    return (
        <>
            <button onClick={onClick}>Close</button>
            <form action="">
                {renderFilterSettings()}
                <div className="filter-buttons">
                    <button>Clear</button>
                    <button onClick={onClickFilter} >Apply</button>
                </div>
            </form>
        </>
    );
}

export default FilterPanel;
