'use strict'

const isNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

const game = () => {
  let count = 10
  let secretNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1
  const guess = () => {
    let guessedNum = prompt('угадайте число от 1 до 100')
    
    if(isNumber(guessedNum)){
      count--
      guessedNum = +guessedNum
      if(count > 0){

        if(guessedNum < secretNum){
          alert(`загаданное число больше, осталось ${count} попыток`)
          return guess()
        } else if (guessedNum > secretNum){
          alert(`загаданное число меньше, осталось ${count} попыток`)
          return guess()
        } else {
          if(confirm('поздравляю, вы угадали число. хотите сыграть еще?')){
            game()
          } else {
            alert('завершение игры')
          }
        }

      } else {
        if(confirm('попытки закончились, хотите повторить?')){
          game()
        } else {
          alert('завершение игры')
        }
      }
    } else if (guessedNum === null){
      alert('завершение игры')
    } else {
      return guess()
    }
  }
  guess()
}
game()