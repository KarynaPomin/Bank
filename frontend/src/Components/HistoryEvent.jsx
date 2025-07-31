function HistoryEvent({ events }) {
    return (
        <>
            {events.map((event) => (
                <div className='grid-card'>
                    <p>{event.description}</p>
                    <p>{event.amount}</p>
                </div>
            ))}
        </>
    )
}

export default HistoryEvent