function getLanguages(){
    fetch("https://v2.jokeapi.dev/languages")
        .then(response => response.json())
        .then(data => {
            const select = document.getElementById("language");
            data.jokeLanguages.forEach(language => {
                const option = document.createElement("option");
                option.value = language;
                option.textContent = language;
                select.appendChild(option);
            });
        });
}

function getCategories(){
    fetch("https://v2.jokeapi.dev/categories")
        .then(response => response.json())
        .then(data => {
            const select = document.getElementById("category");
            data.categories.forEach(category => {
                const option = document.createElement("option");
                option.value = category;
                option.textContent = category;
                select.appendChild(option);
            });
        });
}

getLanguages();
getCategories();