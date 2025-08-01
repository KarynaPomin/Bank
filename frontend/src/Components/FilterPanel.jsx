function FilterPanel() {
    const selectedDate =  
            new Date(date).toLocaleDateString("en", {
                year: "numeric",
                day: "2-digit",
                month: "long",
            })
    const filtredByDate = groupedByDate[selectedDate] || [];

    console.log(filtredByDate);
}

export default FilterPanel