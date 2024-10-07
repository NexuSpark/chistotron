const btn = document.getElementById("search");
const language = document.getElementById("language");
const category = document.getElementById("category");
const joke = document.getElementById("joke-text");

function getJoke() {
    const url = `https://v2.jokeapi.dev/joke/${category.value}?type=single&lang=${language.value}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                throw new Error(data.message);
                return;
            }
            joke.classList.remove("is-error");
            joke.classList.add("is-success");
            joke.textContent = data.joke;
        })
        .catch(error => {
            joke.classList.remove("is-success");
            joke.classList.add("is-error");
            joke.textContent = "Error: " + error.message;
        });
}

btn.addEventListener("click", () => {
    const joke = getJoke();
});