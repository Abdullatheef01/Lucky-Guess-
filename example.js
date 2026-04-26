let chance = 10;

function r2(){

  let a = document.getElementById("one");
  let b = document.getElementById("Two");
  let e = document.getElementById("three");

  let c = Math.random();
  let d = Math.floor(c * 10);

  if (d == Number(a.value)) {
    b.innerText = "YOU WIN";
    document.querySelector("button").disabled = true;
  }
  else {
    b.innerText = "YOU LOSE";
    chance = chance - 1;

    if(chance > 0){
      e.innerText = "REMAIN CHANCE " + chance;
    }
    else{
      e.innerText = "GAME OVER";
      document.querySelector("button").disabled = true;
    }
  }
}