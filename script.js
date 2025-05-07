/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

let dramaShows = [
  "Ginny & Georgia",
  "Outlander",
  "Grey's Anatomy",
  "Ozark",
  "The Queen's Gambit",
];

let fantasyShows = [
  "Supernatural",
  "The Sandman",
  "Wednesday",
  "The Witcher",
  "Avatar: The Last Airbender",
];

let comedyShows = [
  "Arrested Development",
  "Dead to Me",
  "Seinfeld",
  "Emily in Paris",
  "The Good Place",
];

function chooseRandomGenre() {
  const randomNum = getRandomNumber(0, 2);
  if (randomNum === 0) return "drama";
  if (randomNum === 1) return "fantasy";
  return "comedy";
}

function displayRandomShow(genre) {
  if (genre === "random") {
    genre = chooseRandomGenre();
  }

  const showsByGenre = {
    drama: dramaShows,
    fantasy: fantasyShows,
    comedy: comedyShows,
  };

  if (showsByGenre[genre]) {
    const shows = showsByGenre[genre];
    const randomIndex = getRandomNumber(0, shows.length - 1);
    displayShow(shows[randomIndex]);
  } else {
    console.log("Invalid genre.");
  }
}
