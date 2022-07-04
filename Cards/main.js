var CardPosition = 0;
const Cards = document.querySelectorAll(".CardHolder");

function MoveCards(move) {
  CardPosition = CardPosition + move;
  
  if (CardPosition == Cards.length) {
    CardPosition = 0;
  }
  if (CardPosition < 0) {
    CardPosition = Cards.length - 1;
  }
  
  for (i = 0; i < Cards.length; i++) {
    if (i == CardPosition) {
      Cards[i].style.left = "-10px";
      Cards[i].style.display = "block";
      Cards[i].style.zIndex = 40;
    } else if (i == CardPosition + 1) {
      Cards[i].style.left = "calc(50% - 190px)";
      Cards[i].style.display = "block";
      Cards[i].style.zIndex = 100;
    } else if (i == CardPosition + 2) {
      Cards[i].style.left = "calc(100% - 370px)";
      Cards[i].style.display = "block";
      Cards[i].style.zIndex = 50;
    } else {
      Cards[i].style.display = "none";
    }
  }
  if (CardPosition == Cards.length - 2) {
    Cards[0].style.left = "calc(100% - 370px)";
    Cards[0].style.display = "block";
    Cards[0].style.zIndex = 50;
  } else if (CardPosition == Cards.length - 1) {
    Cards[0].style.left = "calc(50% - 190px)";
    Cards[0].style.display = "block";
    Cards[0].style.zIndex = 100;
    Cards[1].style.left = "calc(100% - 370px)";
    Cards[1].style.display = "block";
    Cards[1].style.zIndex = 50;
  }
}

MoveCards(0);