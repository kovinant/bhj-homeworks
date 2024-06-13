class Game {
  constructor() {
    this.wordElement = document.querySelector('.word');
    this.winsElement = document.querySelector('.status__wins');
    this.lossesElement = document.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = '0';
    this.lossesElement.textContent = '0';
    this.wins = 0;
    this.losses = 0;
  }

  registerEvents() {
    document.addEventListener('keydown', (event) => {
      const currentSymbol = this.currentSymbol.textContent.toLowerCase();
      const inputSymbol = event.key.toLowerCase();

      if (inputSymbol === currentSymbol) {
        this.success();
      } else {
        this.fail();
      }
    });
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.wins === 10) {
      alert('Победа!');
      this.reset();
    } else {
      this.setNewWord();
    }
  }

  fail() {
    if (++this.losses === 3) {
      alert('Вы проиграли!');
      this.reset();
    } else {
      this.setNewWord();
    }
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
    ],
    index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game();

