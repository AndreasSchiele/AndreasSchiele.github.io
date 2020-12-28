
var slider = document.getElementById("myRange");

var portions = document.getElementById("portions");
portions.innerHTML = slider.value; // Display the default slider value

var salt = document.getElementById("salt");
salt.innerHTML = slider.value / 4;

var sugar = document.getElementById("sugar");
sugar.innerHTML = slider.value * 12.5;

var milk = document.getElementById("milk");
milk.innerHTML = slider.value;

var flour = document.getElementById("flour");
flour.innerHTML = slider.value * 25;

var mascarpone = document.getElementById("mascarpone");
mascarpone.innerHTML = slider.value * 62.5;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  portions.innerHTML = this.value;
  eggs.innerHTML = this.value;
  salt.innerHTML = this.value / 4;
  sugar.innerHTML = this.value * 12.5;
  milk.innerHTML = this.value;
  flour.innerHTML = this.value * 25;
  mascarpone.innerHTML = this.value * 62.5;
}
