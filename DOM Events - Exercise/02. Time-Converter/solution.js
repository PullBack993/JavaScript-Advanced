function attachEventsListeners() {
  let daysInput = document.getElementById("days");
  let hoursInput = document.getElementById("hours");
  let minutesInput = document.getElementById("minutes");
  let secondsInput = document.getElementById("seconds");

  let getDaysBtn = document.getElementById("daysBtn");
  let getHoursBtn = document.getElementById("hoursBtn");
  let getMinutesBtn = document.getElementById("minutesBtn");
  let getSecondsBtn = document.getElementById("secondsBtn");

  getDaysBtn.addEventListener("click", () => {
    let day = Number(daysInput.value);

    let hours = day * 24;
    let minutes = day * 24 * 60;
    let seconds = day * 24 * 60 * 60;
    hoursInput.value = hours
    minutesInput.value = minutes
    secondsInput.value = seconds
  });

  getHoursBtn.addEventListener('click', () => {
      let hours = Number(hoursInput.value);

      let days = hours / 24
      let minutes = hours * 60
      let seconds =  hours * 60 * 60
      daysInput.value = days
      minutesInput.value = minutes
      secondsInput.value = seconds

  });
  
  getMinutesBtn.addEventListener('click', () => {
      let minutes = Number(minutesInput.value)

      let days = minutes / 60 / 24
      let hours = minutes / 60
      let secods = minutes * 60
      daysInput.value = days
      hoursInput.value = hours 
      secondsInput.value = secods
  })

  getSecondsBtn.addEventListener("click", () => {
    let seconds = Number(secondsInput.value);
    let days = seconds / 60 / 60  / 24
    let hours = seconds / 60 / 60
    let minutes = seconds / 60
    daysInput.value = days
    hoursInput.value = hours
    minutesInput.value = minutes
  });

  daysInput.value = ''
  hoursInput.value = ''
  minutesInput.value = ''
  secondsInput.value = ''


}
