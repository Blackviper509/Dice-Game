var dice = 
{
    sides: 6,
    roll: function () 
    {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
}

  var dice2 = 
{
    sides: 6,
    roll: function () 
    {
      var randomNumber2 = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber2;
    }
}

  var dice3 = 
{
    sides: 6,
    roll: function () 
    {
      var randomNumber3 = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber3;
    }
}
  
  
  function printNumber(number) 
  {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }

  function printNumber2(number2) 
  {
    var placeholder2 = document.getElementById('placeholder2');
    placeholder2.innerHTML = number2;
  }
  function printNumber3(number3)
   {
    var placeholder3 = document.getElementById('placeholder3');
    placeholder3.innerHTML = number3;
  }
  
  var button = document.getElementById('button');
  var button = document.getElementById('button');
  var button = document.getElementById('button');
  
  button.onclick = function() 
  {
    var result = dice.roll();
    printNumber(result);
  };

  button.onclick = function() 
  {
    var result2 = dice2.roll();
    printNumber(result2);
  };

  button.onclick = function() 
  {
    var result3 = dice3.roll();
    printNumber(result3);
  };
  
  