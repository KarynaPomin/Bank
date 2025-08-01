function AmountSettings() {
    return (
        <div className="filter-section">
            <p>Amount</p>

            <div className="filter-option">
                <input type="radio" id="upTo100" name="amountRange" value="upTo100" />
                <label htmlFor="upTo100">up to 100.00</label>
            </div>

            <div className="filter-option">
                <input type="radio" id="from100To1000" name="amountRange" value="from100To1000" />
                <label htmlFor="from100To1000">from 100.00 to 1000.00</label>
            </div>

            <div className="filter-option">
                <input type="radio" id="over1000" name="amountRange" value="over1000" />
                <label htmlFor="over1000">over 1000.00</label>
            </div>

            <div className="filter-option">
                <input type="radio" id="custom" name="amountRange" value="custom" />
                <label htmlFor="custom">Own range</label>
            </div>

            <div className="filter-range">
                <label htmlFor="fromAmount">From:</label>
                <input type="number" id="fromAmount" name="fromAmount" />

                <label htmlFor="toAmount">To:</label>
                <input type="number" id="toAmount" name="toAmount" />
            </div>
        </div>
    );
}

export default AmountSettings