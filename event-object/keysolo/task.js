
class Game {
  constructor() {
    this.wordElement = document.querySelector('.word');
    this.winsElement = document.querySelector('.status__wins');
    this.lossesElement = document.querySelector('.status__losses');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.wins = 0;
    this.losses = 0;
    this.updateScore();
    this.setNewWord();
  }

  registerEvents() {
    document.addEventListener('keydown', (event) => {
      const inputSymbol = event.key.toLowerCase();
      const currentSymbol = this.currentSymbol.textContent.toLowerCase();

      if (inputSymbol === currentSymbol) {
        this.success();
      } else {
        this.fail();
      }
    });
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol.classList.remove('symbol_current');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
    } else {
      if (++this.wins === 10) {
        alert('Победа!');
        this.reset();
      } else {
        this.setNewWord();
      }
    }
    this.updateScore();
  }

  fail() {
    this.losses++;
    if (this.losses === 3) {
      alert('Вы проиграли!');
      this.reset();
    } else {
      this.setNewWord();
    }
    this.updateScore();
  }

  setNewWord() {
    const word = this.getWord();
    
    this.renderWord(word);
  }

  getWord() {
    const words = [
      'Коля',
      'интернет',
      'программирование',
      'компьютер',
      'код',
      'игра',
      'победа',
      'проигрыш',
      'клавиатура',
      'JavaScript'
    ];
    const index = Math.floor(Math.random() * words.length);
    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) => `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }

  updateScore() {
    this.winsElement.textContent = this.wins;
    this.lossesElement.textContent = this.losses;
  }
}

new Game();