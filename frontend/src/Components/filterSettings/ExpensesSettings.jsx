function ExpensesSettings() {
    return (
        <div className="filter-section">
            <p>Incomes</p>

            <div className="filter-option">
                <input type="checkbox" id="blikMobilePayments" name="blikMobilePayments" value="blikMobilePayments" />
                <label htmlFor="blikMobilePayments">BLIK and mobile payments</label>
            </div>

            <div className="filter-option">
                <input type="checkbox" id="cardTransactions" name="cardTransactions" value="cardTransactions" />
                <label htmlFor="cardTransactions">card transactions</label>
            </div>

            <div className="filter-option">
                <input type="checkbox" id="mobileTopUps" name="mobileTopUps" value="mobileTopUps" />
                <label htmlFor="mobileTopUps">Mobile top-ups</label>
            </div>

            {/* (saving, debit (podatek od odsetek)) */}
            <div className="filter-option">
                <input type="checkbox" id="otherDebits" name="otherDebits" value="otherDebits" />
                <label htmlFor="otherDebits">Other debits</label>
            </div>

            <div className="filter-option">
                <input type="checkbox" id="selectAll" name="selectAll" value="selectAll" />
                <label htmlFor="selectAll">Select all</label>
            </div>

        </div>
    );
}

export default ExpensesSettings