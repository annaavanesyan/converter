
var valueReg = /\d+/g;
var temperature = document.getElementById('temperature_bar');
var length = document.getElementById('length_bar');
var weight = document.getElementById('weight_bar');
var speed = document.getElementById('speed_bar');

var area = document.getElementById('area_bar');
var time = document.getElementById('time_bar');
var frequency = document.getElementById('frequency_bar');
var money = document.getElementById('money_bar');

function make_everything_hidden() {
    temperature.style.visibility = "hidden";
    length.style.visibility = "hidden";
    weight.style.visibility = "hidden";
    speed.style.visibility = "hidden";
    area.style.visibility = "hidden";
    time.style.visibility = "hidden";
    frequency.style.visibility = "hidden";
    money.style.visibility = "hidden";
}

function temperature_unit() {
    make_everything_hidden();
    temperature.style.visibility = "visible";
}

function length_unit() {
    make_everything_hidden();
    length.style.visibility = "visible";
}

function weight_unit() {
    make_everything_hidden();
    weight.style.visibility = "visible";
}

function speed_unit() {
    make_everything_hidden();
    speed.style.visibility = "visible";
}

function area_unit() {
    make_everything_hidden();
    area.style.visibility = "visible";
}

function time_unit() {
    make_everything_hidden();
    time.style.visibility = "visible";
}

function frequency_unit() {
    make_everything_hidden();
    frequency.style.visibility = "visible";
}

function money_unit() {
    make_everything_hidden();
    money.style.visibility = "visible";
}


function changeToF(){
    var celsius1= document.getElementById('celsius_input').value;
    var fahrenheit= document.getElementById('fahrenheit_input');

    var celsius = celsius1.match(valueReg).join([]);
    fahrenheit.value= celsius * 1.8 + 32;
}
function changeToC() {
    var celsius= document.getElementById('celsius_input');
    var fahrenheit1= document.getElementById('fahrenheit_input').value;

    var fahrenheit = fahrenheit1.match(valueReg).join([]);
    celsius.value = (fahrenheit - 32) / 1.8;
}

function changeToCentimeter(){
    var meter1= document.getElementById('meter_input').value;
    var centimeter= document.getElementById('centimeter_input');

    var meter = meter1.match(valueReg).join([]);
    centimeter.value= meter * 100;
}
function changeToMeter(){
    var meter= document.getElementById('meter_input').value;
    var centimeter1= document.getElementById('centimeter_input').value;

    var centimeter = centimeter1.match(valueReg).join([]);
    meter.value= centimeter /100;
}

function changeToKilogram(){
    var gram1= document.getElementById('gram_input').value;
    var kilogram= document.getElementById('kilogram_input');

    var gram = gram1.match(valueReg).join([]);
    kilogram.value= gram * 1000;
}
function changeToGram(){
    var gram= document.getElementById('gram_input');
    var kilogram1= document.getElementById('fkilogram_input').value;

    var kilogram = kilogram1.match(valueReg).join([]);
    gram.value = kilogram * 1/1000;
}

function changeToKilometre(){
    var metre1= document.getElementById('metre_input').value;
    var kilometre= document.getElementById('kilometre_input');

    var metre = metre1.match(valueReg).join([]);
    kilometre.value= metre1 * 3.6;
}
function changeToMetre(){
    var metre= document.getElementById('metre_input');
    var kilometre1= document.getElementById('kilometre_input').value;

    var kilometre = kilometre1.match(valueReg).join([]);
    metre.value = kilometre * 10/36;
}

function changeToSquarem(){
    var squarem1= document.getElementById('squarem_input').value;
    var squarekm= document.getElementById('squarekm_input');

    var squarem = square1.match(valueReg).join([]);
    squarekm.value= squarem *1;
}

function changeTosquarekm(){
    var squarem= document.getElementById('squarem_input');
    var squarekm1= document.getElementById('squarekm_input').value;

    var squarekm = fahrenheit1.match(valueReg).join([]);
    squarem.value = squarekm *1;
}
