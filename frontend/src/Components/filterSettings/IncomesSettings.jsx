function IncomesSettings() {
    return (
        <div className="filter-section">
            <p>Incomes</p>

            <div className="filter-option">
                <input type="checkbox" id="incomingTransfers" name="incomingTransfers" value="incomingTransfers" />
                <label htmlFor="incomingTransfers">incoming transfers</label>
            </div>

            {/* Cash depisiys (from bank) */}
            <div className="filter-option">
                <input type="checkbox" id="cashDeposits" name="cashDeposits" value="cashDeposits" />
                <label htmlFor="cashDeposits">cash deposits</label>
            </div>

            {/* Othr credits (odsetki premiowe, return) */}
            <div className="filter-option">
                <input type="checkbox" id="otherCredits" name="otherCredits" value="otherCredits" />
                <label htmlFor="otherCredits">other credits</label>
            </div>

            <div className="filter-option">
                <input type="checkbox" id="selectAll" name="selectAll" value="selectAll" />
                <label htmlFor="selectAll">Select all</label>
            </div>

        </div>
    );
}

export default IncomesSettings