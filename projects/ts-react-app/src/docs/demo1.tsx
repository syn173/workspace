// /* functions this */
// let deck = {
//   suits: ['hearts', 'spades', 'clubs', 'diamonds'],
//   cards: Array(52),
//   createCardPicker: function () {
//     // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
//     return () => {
//       let pickedCardNum = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCardNum / 13);
//       return { suit: this.suits[pickedSuit], card: pickedCardNum % 13 };
//     };
//   }
// };

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
// console.log('ickedCard', pickedCard);
