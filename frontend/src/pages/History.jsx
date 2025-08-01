import { use, useEffect, useState } from 'react'
import '../css/History.css'
import { Link } from 'react-router-dom'
import { User } from '../../classes/User';
import HistoryEvent from '../components/HistoryEvent';
import { date } from 'zod';
import FilterPanel from '../components/FilterPanel';

export const FilterTypes = {
    None: "none",
    Date: "date",
    Amount: "amount",
    Incomes: "incomes",
    Expenses: "expenses",
};

let groupedByDate = [];


const History = () => {
    const [user, setUser] = useState(User.get());
    const [isHistory, setIsHistory] = useState(user.history.length !== 0 ? true : false);
    const [displayedHistory, setDisplayedHistory] = useState(user.history);
    
    // HISTORY
    if (isHistory) {
        groupedByDate = displayedHistory.reduce((acc, event) => {
            const dateKey = new Date(event.date).toLocaleDateString("en", {
            year: "numeric",
            day: "2-digit",
            month: "long",
        });

        (acc[dateKey] = acc[dateKey] || []).push(event);
        return acc;
        }, {});
    }
    
    
    // FILTER
    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(FilterTypes.None);

    const [dateEvent, setDateEvent] = useState(null);
    const [amountEvent, setAmountEvent] = useState(0);
    const [incomesEvent, setIncomesEvent] = useState(0);
    const [expensesEvent, setExpensesEvent] = useState(0);
    const handleSelectedFiltrOnClick = (filter, data) => {
        setIsOpenFilter(true);
        setSelectedFilter(filter);
        
        switch(filter) {
            case FilterTypes.Date:
                setSelectedFilter(FilterTypes.Date);
                setDateEvent(data);
                break;
            case FilterTypes.Amount:
                setSelectedFilter(FilterTypes.Amount);
                setAmountEvent(data);
                break;
            case FilterTypes.Incomes:
                setSelectedFilter(FilterTypes.Incomes);
                setIncomesEvent(data);
                break;
            case FilterTypes.Expenses:
                setSelectedFilter(FilterTypes.Expenses);
                setExpensesEvent(data);
                break;
        }
        
    };

    const groupedByType = user.history.reduce((acc, event) => {
        (acc[event.type] = acc[event.type] || []).push(event);
        return acc;
    }, {})

    const handleFiltredOnClick = () => {
        switch(selectedFilter) {
            case FilterTypes.Date:
                FilteredByDate(dateEvent);
                break;
            case FilterTypes.Amount:
                FilteredByAmount(user.history, amountEvent);
                break;
            case FilterTypes.Incomes:
                FilteredByIncomes(groupedByType["income"], incomesEvent);
                break;
            case FilterTypes.Expenses:
                FilteredByExpenses(groupedByType["expense"], expensesEvent);
                break;
            }
        setIsOpenFilter(false);
    };

    function FilteredByDate(date) {
    console.log("FILTER: Date");

        const selectedDate =  new Date(date).toLocaleDateString("en", {
            year: "numeric",
            day: "2-digit",
            month: "long",
        })

        const filtered = user.history.filter(event => {
            const eventDate = new Date(event.date).toLocaleDateString("en", {
                year: "numeric",
                day: "2-digit",
                month: "long",
            });
            return eventDate === selectedDate;
        });

        setDisplayedHistory(filtered);
        console.log(filtered);
    }

    function FilteredByAmount(history, maxAmount) {
        console.log("FILTER: Amount - ", maxAmount);

        const filtred = history.filter((event) => parseFloat(Math.abs(event.amount)) <= maxAmount);
        setDisplayedHistory(filtred)
        console.log(filtred);
    }

    function FilteredByIncomes(history, maxIncomes) {
        console.log("FILTER: Incomes - ", maxIncomes);
        console.log("HISTORY In: ", history)

        const filtred = history.filter((event) => parseFloat(Math.abs(event.amount)) <= maxIncomes);
        
        console.log(filtred);
        setDisplayedHistory(filtred)
    }

    function FilteredByExpenses(history, maxExpenses) {
        console.log("FILTER: Expenses - ", maxExpenses);
        console.log("HISTORY Ex: ", history)

        const filtred = history.filter((event) => parseFloat(Math.abs(event.amount)) <= maxExpenses);
        
        setDisplayedHistory(filtred)
        console.log(filtred);
    }

    return (
        <>
            {isOpenFilter && (
                <div className='filter-container'>
                    <FilterPanel 
                        selectedFilter={selectedFilter}
                        onClick={() => {
                            setIsOpenFilter(false);
                            setDisplayedHistory(user.history);
                        }}
                        onClickFilter={
                            () => handleFiltredOnClick()
                        }

                    />
                </div>
            )}
            
            <div className='main-container'>
                <h1 className="logo">History</h1>
                <Link to="/MyWallet">Back</Link>

                {/* // TODO: Search */}
                <div className='history-block'>
                    <div className='search-block'>
                        <input type="text" className='search'placeholder='Find tronsaction'/>   
                        <button>Search</button>
                    </div>

                    <div className='actionButtons-section'>
                        <button onClick={() => handleSelectedFiltrOnClick(FilterTypes.Date, "2025-07-29T10:24:00Z")}>Date</button>
                        <button onClick={() => handleSelectedFiltrOnClick(FilterTypes.Amount, 100.00)}>Amount</button>
                        <button onClick={() => handleSelectedFiltrOnClick(FilterTypes.Incomes, 100.00)}>Incomes</button>
                        <button onClick={() => handleSelectedFiltrOnClick(FilterTypes.Expenses, 30.00)}>Expenses</button>
                    </div>

                    <div className='history-events'>
                        {isHistory ? (
                            Object.entries(groupedByDate).map(([date, events]) => (
                                <div key={date} className='day-event'>
                                    <h3>{date}</h3>
                                    <HistoryEvent key={date} events={events} />
                                </div>
                            ))
                        ) : (
                            <p className='error'>No history yet.</p>
                        )}
                    </div>
                    
                </div>

            </div>
        </>
    )
}


export default History