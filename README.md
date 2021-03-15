# Joc del penjat: Falles.

A fork of @mateusz-pocztowski Hangman game. This is a special version for K12 classroom with words about the Falles (traditional celebration in the city of Valencia, Spain). 

Demo [here](https://jaanpre.github.io/JocDelPenjat/).

## Getting Started

### Customize

Add passwords and categories in main.js.
```js
  // ...
  // Add your passwords arrays
  const falles = ['Monument faller', 'Ninot indultat', 'Nit del foc', 'Focs artificials', 'Xocolate amb xurros', 'Estendard', 'Fallera i faller', 'Pinta', 'Senyera', 'Bunyols', 'Dolçaina i tabalet', 'Banda de música', 'Mascletà', 'Ofrena de flors', 'Crida', 'Despertà', 'Manteleta', 'Cercaviles', 'Albaes', 'Casal faller', 'Artista faller', 'Pólvora', 'Terratrèmol', 'Tro de bac', 'Fallera major', 'Llibret faller', 'Concurs de paelles', 'Cavalcada del ninot', 'Entrega de premis', 'Monyos', 'Mocador'];
  

  const categories = [falles];
  const category = Math.floor(Math.random() * categories.length);
  const index = Math.floor(Math.random() * categories[category].length);
  const categoryName = ['FALLES']; // Add your categories
  
  const alphabet = 'ABCÇDEFGHIJKLMNOPQRSTUVWXYZ'.split(""); // Add your alphabet
  // ...
```

Change the background image and sound effects in _img_ and _audio_ folders. 

### Running 

Start the game with _index.html_.

## How to play?
![hangman](/img/demo.gif)

Gameplay is fairly simple: You're presented with a blank line. The number of blanks is the number of letters in the word. You'll be prompted to guess a letter. If the word contains the letter you enter, you'll fill in the blanks. If not, a part of the man is added to the gallows. Complete the entire man and you lose! Complete the entire word and you win!

## License

The MIT License (MIT)

## Acknowledgments

* Thanks to @mateusz-pocztowski
