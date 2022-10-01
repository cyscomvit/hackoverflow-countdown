const countdown = () => {
    const countDate = new Date("October 2, 2022 10:15:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const textDay = Math.floor(gap / days);
    const textHour = Math.floor((gap % days) / hours);
    const textMinute = Math.floor((gap % hours) / minutes);
    const textSecond = Math.floor((gap % minutes) / seconds);

    document.getElementById("day").innerText = textDay;
    document.getElementById("hour").innerText = textHour;
    document.getElementById("minute").innerText = textMinute;
    document.getElementById("second").innerText = textSecond;
};

setInterval(countdown, 1000);
