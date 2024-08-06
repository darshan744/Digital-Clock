

function time(){
    const time = new Date();
    const hrs = time.getHours().toString().padStart(2,0);
    const min = time.getMinutes().toString().padStart(2,0);
    const sec = time.getSeconds().toString().padStart(2,0);
    const meridian = hrs>12?'PM':'AM';
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthOfWeek = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const month = monthOfWeek[time.getMonth()];
    const year = time.getFullYear();
    const day = daysOfWeek[time.getDay()];
    const date = time.getDate();
    const str = `${hrs}:${min}:${sec} ${meridian}`;
    document.getElementById("clktag").textContent = str;
    document.getElementById("date").textContent = `${date} ${month} ${year} ${day}`
    console.log(str);
}
time();
setInterval(time,1000);