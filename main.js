window.onload = () => {
  const wrongLetterAudioElement = document.getElementById("wrong-letter");
  const okWordAudioElement = document.getElementById("ok-word");

  let startTimer = new Date();

  const falles = ['Monument faller', 'Ninot indultat', 'Nit del foc', 'Focs artificials', 'Xocolate amb xurros', 'Estendard', 'Fallera i faller', 'Pinta', 'Senyera', 'Bunyols', 'Dolçaina i tabalet', 'Banda de música', 'Mascletà', 'Ofrena de flors', 'Crida', 'Despertà', 'Manteleta', 'Cercaviles', 'Albaes', 'Casal faller', 'Artista faller', 'Pólvora', 'Terratrèmol', 'Tro de bac', 'Fallera major', 'Llibret faller', 'Concurs de paelles', 'Cavalcada del ninot', 'Entrega de premis', 'Monyos', 'Mocador'];
  

  const categories = [falles];
  const category = Math.floor(Math.random() * categories.length);
  const index = Math.floor(Math.random() * categories[category].length);
  const categoryName = ['FALLES'];

  const alphabet = 'ABCÇDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
  const password = categories[category][index].toUpperCase().split('');
  document.querySelector('.category').textContent = categoryName[category];

  const string = document.querySelector('.string');
  const image = document.querySelector('img');

  for (let i = 0; i < password.length; i++) {
    (password[i] == " ") ? string.textContent += " ": string.textContent += "_";
  }

  alphabet.forEach(letter => {
    const newLetter = document.createElement('li');
    newLetter.textContent = letter;
    document.querySelector('ul').appendChild(newLetter);
    newLetter.addEventListener('click', letterCheck);
  })

  String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
  }

  let counter = 0;

  function letterCheck(e) {
    let check = false;
    letter = e.target.textContent;

    alphabet.forEach((item, index) => {
      if (password[index] && letter === password[index].normalize('NFD').replace(/[\u0300-\u036f]/g, "")) {
        string.textContent = string.textContent.replaceAt(index, password[index]);
        check = true;
      }
    })
    if (check === true) {
      e.target.classList.add('clicked');
    } else if (check === false && e.target.className != 'clicked') {
      counter++;
      e.target.classList.add('clicked');
      image.src = `img/s${counter}.png`;
	  wrongLetterAudioElement.play();
    }

    if (string.textContent == password.join('')) {
	  okWordAudioElement.play();
      image.src = `img/s8.png`;
      let stopTimer = new Date();

      let seconds = (stopTimer - startTimer) / 1000;
      let minutes = parseInt(seconds / 60);
      seconds = parseInt(seconds % 60);

      document.querySelector('ul').innerHTML = `Has guanyat, enhorabona! Has tardat: <span class="time">${minutes}min ${seconds}s</span>.
    <div class="reset">AlTRA PARAULA?<br/>
    <img class="tryAgain" src="img/spin.png"/></div>`;
      document.querySelector('.tryAgain').addEventListener('click', () => {
        window.location.reload();
      })

    } else if (counter >= 7) {
      document.querySelector('ul').innerHTML = `Has fallat! La paraula és: <span style='color:red'>${password.join('')}</span>
    <div class="reset">Torna a intentar-ho!<br/>
    <img class="tryAgain" src="img/spin.png"/></div>`;
      document.querySelector('.tryAgain').addEventListener('click', () => {
        window.location.reload();
      })
    }
  }
  document.querySelector('.reroll').addEventListener('click', () => window.location.reload())
}
