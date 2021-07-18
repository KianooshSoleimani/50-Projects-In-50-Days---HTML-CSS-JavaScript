const jokeEl = document.getElementById('joke');

const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

// Using Async/Await
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  try {
    const res = await fetch('https://icanhasdadjoke.com', config);
    const data = await res.json();

    jokeEl.innerHTML = data.joke;
  } catch (error) {}
}

// Using .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };
//   fetch('https://icanhasdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => (jokeEl.innerHTML = data.joke));
// }

jokeBtn.addEventListener('click', () => generateJoke());
