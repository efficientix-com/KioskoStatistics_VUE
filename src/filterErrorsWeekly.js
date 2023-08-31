export const filterErrorsWeekly = (data) => {
    let week = {
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
        saturday: 0,
        sunday: 0
    }
    let arr_week = [];
    for (let i in data) {
        if (data[i].successfulRequest === false) {
            let newDate = new Date(data[i].date);
            let day_of_week = newDate.getDay();
            let currentDate1 = new Date();
            let d = new Date();

            let startOfWeek = d;
            let endOfWeek = currentDate1;
            startOfWeek.setDate(d.getDate() - d.getDay());
            endOfWeek.setDate(startOfWeek.getDate() + 6);
            // console.log("Start of weeK:", startOfWeek);

            // console.log("End of weeK:", endOfWeek);
            // console.log("DATE of weeK:", newDate);
            // console.log("date is greater than start of week:", newDate >= startOfWeek);

            if (newDate >= startOfWeek && newDate <= endOfWeek) {
                // console.log("day of week in date: ",newDate.getDay());
                switch (day_of_week) {
                    case 0: week.sunday++; break;
                    case 1: week.monday++; break;
                    case 2: week.tuesday++; break;
                    case 3: week.wednesday++; break;
                    case 4: week.thursday++; break;
                    case 5: week.friday++; break;
                    case 6: week.saturday++; break;
                }
            }


        }
    }
    arr_week.push(week.sunday);
    arr_week.push(week.monday);
    arr_week.push(week.tuesday);
    arr_week.push(week.wednesday);
    arr_week.push(week.thursday);
    arr_week.push(week.friday);
    arr_week.push(week.saturday);
    // console.log("week:", arr_week);

    return arr_week;
}