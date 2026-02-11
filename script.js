const languageSelect = document.getElementById("languageSelect");

const translations = {
  en: {
    title: "Unlimited movies, shows, and more",
    sub: "Starts at ₹149. Cancel at any time."
  },
  hi: {
    title: "अनलिमिटेड फ़िल्में, शो और बहुत कुछ",
    sub: "₹149 से शुरू। कभी भी कैंसल करें।"
  }
};

languageSelect.addEventListener("change", () => {
  const lang = languageSelect.value;
  console.log("Language changed to:", languageSelect.value);
  document.querySelector(".hero span:nth-child(1)").innerText = translations[lang].title;
  document.querySelector(".hero span:nth-child(2)").innerText = translations[lang].sub;
});

const authBtn = document.getElementById("authBtn");
let isLoggedIn = false;

authBtn.addEventListener("click", () => {
  if (!isLoggedIn) {
    const name = prompt("Enter your name:");
    if (name) {
      isLoggedIn = true;
      authBtn.innerText = "Sign Out";
      alert(`Welcome to Netflix, ${name}! 🎉`);
    }
  } else {
    isLoggedIn = false;
    authBtn.innerText = "Sign In";
    alert("You have signed out successfully.");
  }
});



const API_KEY = "a72e27a4df3035f029747a3312660fe4";

document.querySelectorAll(".row img").forEach(img => {
  img.addEventListener("click", () => {
    const movieName = img.dataset.title;
    searchMovie(movieName);
  });
});

async function searchMovie(movieName) {
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${movieName}`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.results.length > 0) {
    const movie = data.results[0];
    alert(`Found: ${movie.title || movie.name}\nRating: ⭐ ${movie.vote_average}`);
  } else {
    alert("Movie not found 😢");
  }
}


