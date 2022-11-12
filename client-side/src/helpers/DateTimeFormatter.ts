import React from 'react'

function DateTimeFormatter() {
    
     const dateAndTimeParser = (dateTimeLocal: string) => {
        const date = new Date(dateTimeLocal)?.toISOString().slice(0, 10);
        
        const time = new Date(dateTimeLocal)?.toLocaleString('en-US', { timeZone:"Asia/Manila", hour: 'numeric', minute: 'numeric', hour12: true })
        
        return {
            date, time
        }
    }

    return {dateAndTimeParser}
}

export default DateTimeFormatter