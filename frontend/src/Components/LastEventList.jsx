import { useState } from "react";

const LastEventList = ({ events }) => {
    const groupedByType = events.reduce((acc, event) => {
        (acc[event.type] = acc[event.type] || []).push(event);
        return acc;
    }, {}); 

    return (
        <>
            {Object.entries(groupedByType).map(([type, groupedEvents]) => (
                <Card key={type} type={type} events={groupedEvents} />
            ))}
        </>
    );
};

function Card({ type, events }) {
    const [isOpen, setIsOpen] = useState(false);
    const sum = events.reduce((total, event) => total + event.amount, 0);

    return (
        <>
            <div className='card-event'>
                <div className='title-card-event'>
                    <p>{type}</p>
                    {/* // TODO: Add counter */}
                    <p>{sum}</p>
                </div>
                <p className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "▼" : "▶"}
                </p>
            </div>

            {isOpen && events.map((event, index) => (
                <div key={index} className='grid-card-event'>
                    <p>{event.description}</p>
                    <p>{event.amount}</p>
                </div>
            ))}
        </>
    );
}

export default LastEventList;
