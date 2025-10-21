class CalendarDate {
    //private fields
    #month;
    #day;
    #year;

    constructor(month, day, year) {
        this.month = month;
        this.day = day;
        this.year = year;
    }

    //public method
    toString() {
        return `${this.year}-${this.month + 1}-${this.day}`;
    }
}


let cDate = new CalendarDate(2, 13, 2024);
console.log(typeof(cDate));
console.log(cDate.toString());