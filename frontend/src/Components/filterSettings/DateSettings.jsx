function DateSettings() {
    return (
        <div className="filter-section">
            <p>Date</p>

            <div className="filter-option">
                <input type="radio" id="lastWeek" name="dateRange" value="lastWeek" />
                <label htmlFor="lastWeek">Last week</label>
            </div>

            <div className="filter-option">
                <input type="radio" id="lastMonth" name="dateRange" value="lastMonth" />
                <label htmlFor="lastMonth">Last month</label>
            </div>

            <div className="filter-option">
                <input type="radio" id="lastYear" name="dateRange" value="lastYear" />
                <label htmlFor="lastYear">Last year</label>
            </div>

            <div className="filter-option">
                <input type="radio" id="custom" name="dateRange" value="custom" />
                <label htmlFor="custom">Own period</label>
            </div>

            <div className="filter-range">
                <label htmlFor="fromDate">From:</label>
                <input type="date" id="fromDate" name="fromDate" />

                <label htmlFor="toDate">To:</label>
                <input type="date" id="toDate" name="toDate" />
            </div>
        </div>
    );
}

export default DateSettings;
