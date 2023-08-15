window.onload = () => {
  const pianoKeys = document.querySelectorAll(`.keys`);

  const volumeSlider = document.querySelector(`.volume-slider input`);

  const showHideKeys = document.querySelector(`.keys-checkbox input`);

  let audio = new Audio();

  let allKeys = [
    "a",
    "w",
    "s",
    "e",
    "d",
    "f",
    "t",
    "g",
    "y",
    "h",
    "u",
    "j",
    "k",
    "o",
    "l",
    "p",
    ";",
  ];

  pianoKeys.forEach((key) => {
    key.addEventListener(`click`, () => {
      playTunes(key.dataset.key);
    });
  });

  function playTunes(getKey) {
    audio.src = `https://ia800106.us.archive.org/13/items/24-piano-keys/key${getKey}.mp3`;

    audio.play();

    let clickedKey = document.querySelector(`[data-key = "${getKey}" ]`);

    clickedKey.classList.add(`active`);

    setTimeout(() => {
      clickedKey.classList.remove(`active`);
    }, 900);
  }

  //Event listener for keyboards inputs

  document.addEventListener(`keydown`, pressedKey);

  function pressedKey(e) {
    if (allKeys.includes(e.key)) {
      switch (e.key) {
        case "a":
          playTunes("01");
          break;

        case "w":
          playTunes("02");
          break;

        case "s":
          playTunes("03");
          break;

        case "e":
          playTunes("04");
          break;

        case "d":
          playTunes("05");
          break;

        case "f":
          playTunes("06");
          break;

        case "t":
          playTunes("07");
          break;

        case "g":
          playTunes("08");
          break;

        case "y":
          playTunes("09");
          break;

        case "h":
          playTunes("10");
          break;

        case "u":
          playTunes("11");
          break;

        case "j":
          playTunes("12");
          break;

        case "k":
          playTunes("13");
          break;

        case "o":
          playTunes("14");
          break;

        case "l":
          playTunes("15");
          break;

        case "p":
          playTunes("16");
          break;

        case ";":
          playTunes("17");
          break;
      } // End of switch
    } // End of if/ else
  }
  // End of pressedKey();

  // Event listener that handles audio volume

  volumeSlider.addEventListener(`input`, handleVolume);

  function handleVolume(e) {
    audio.volume = e.target.value;
  } // End of handleVolume();

  // Event listener that shows/ hides span elements

  showHideKeys.addEventListener(`click`, showHide);

  function showHide() {
    pianoKeys.forEach((key) => {
      key.classList.toggle(`hide`);
    });
  } // End of showHide();
}; // General () ✅;
