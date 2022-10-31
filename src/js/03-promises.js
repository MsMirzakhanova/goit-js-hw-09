import Notiflix from 'notiflix';

const refs = {
  delay: document.querySelector("[name = 'delay']"),
  step: document.querySelector("[name = 'step']"),
  amount: document.querySelector("[name = 'amount']"),
  form: document.querySelector('.form'),
};

refs.form.addEventListener(`submit`, onFormSubmit);



function onFormSubmit(event) {
  event.preventDefault();
  let initialDelay = Number(refs.delay.value);
  const step = Number(refs.step.value);
  const amount = Number(refs.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, initialDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.failure(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.success(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    initialDelay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

