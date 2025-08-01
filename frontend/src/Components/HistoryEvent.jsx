function HistoryEvent({ events, index }) {
    return (
        <>
            {events.map((event, index) => (
                <div key={index} className='grid-card'>
                    <p>{event.description}</p>
                    <p>{event.amount}</p>
                </div>
            ))}
        </>
    )
}

export default HistoryEvent