document.addEventListener("DOMContentLoaded", function() {
    const daysContainer = document.querySelector(".days");
    const startDate = new Date(2024, 1, 24); // February 24, 2024 (Leap year)
    const endDate = new Date(2024, 2, 31); // March 31, 2024

    let date = new Date(startDate);

    while (date.getDay() !== 1) { // Adjust date to start from Monday
        date.setDate(date.getDate() + 1);
    }

    // Define a map of date to URL
    const dateUrlMap = {
        "2024-03-14": "https://forms.gle/9tJb7uSUYqYvXLJB7",
        "2024-03-15": "https://forms.gle/d8VKWPDADQEDqz7HA",
        "2024-03-16": "https://forms.gle/MUk8qF2cgTi7sRyg8",
        "2024-03-17": "url2",
        "2024-03-18": "url2",
        "2024-03-19": "url2",
        "2024-03-20": "url2",
        "2024-03-21": "url2",
        "2024-03-22": "url2",
        "2024-03-23": "url2",
        "2024-03-24": "url2",
        "2024-03-25": "url2",
        "2024-03-26": "url2",
        "2024-03-27": "url2",
        "2024-03-28": "url2",
        "2024-03-29": "url2",
        "2024-03-30": "url2",
        // Add more dates and URLs as needed
    };

    while (date <= endDate) {
        const dayItem = document.createElement("div");
        dayItem.classList.add("day-item");
        
        // Get ISO date string for comparison
        const dateString = date.toISOString().slice(0, 10);

        if (date.getMonth() === 1 || // February
            (date.getMonth() === 2 && date.getDate() <= 14) || // March 1-14
            (date.getMonth() === 2 && date.getDate() >= 30)) { // March 30-31
            dayItem.classList.add("unavailable");
            dayItem.textContent = date.getDate();
        } else {
            dayItem.classList.add("current-month");

            // Check if date is available and has a corresponding URL
            if (date.getDate() >= 15 && date.getDate() <= 29 && dateUrlMap[dateString]) {
                dayItem.classList.add("available");
                const link = document.createElement("a");
                link.href = dateUrlMap[dateString];
                link.textContent = date.getDate();
                dayItem.appendChild(link);
            } else {
                dayItem.textContent = date.getDate();
            }
        }

        daysContainer.appendChild(dayItem);

        date.setDate(date.getDate() + 1);
    }
});
