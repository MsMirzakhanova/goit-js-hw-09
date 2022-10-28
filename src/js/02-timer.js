import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  datetimePickerInput: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  daysField: document.querySelector('span[data-days]'),
  hoursField: document.querySelector('span[data-hours]'),
  minutesField: document.querySelector('span[data-minutes]'),
  secondsField: document.querySelector('span[data-seconds]'),
};

let selectedDate = null;
refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        selectedDate = selectedDates[0].getTime();
        if (selectedDate < Date.now()) {
             window.alert("Please choose a date in the future");
        } else {
          refs.startBtn.disabled = false;  
        }
  },
};

flatpickr(refs.datetimePickerInput, options);



const timer = {
    intervalId: null,
    start() {
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = selectedDate - currentTime;
            const timeComponents = convertMs(deltaTime);
            if (deltaTime < 0) {
      clearInterval(intervalId);

      return;
    }
            updateClockFace(timeComponents);
        }, 1000);

    },
};

refs.startBtn.addEventListener(`click`, () => {
    timer.start();
});


function updateClockFace({ days, hours, minutes, seconds }) {
    refs.daysField.textContent = `${days}`;
    refs.hoursField.textContent = `${hours}`;
    refs.minutesField.textContent = `${minutes}`;
    refs.secondsField.textContent = `${seconds}`;
}

function pad(value) {
    return String(value).padStart(2, `0`);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

