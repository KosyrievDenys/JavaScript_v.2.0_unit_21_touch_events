// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
	document.querySelector('.out-1').textContent = 'touch';
}
document.querySelector('.div-1').ontouchstart = t1;

// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

let num2 = 0;
function t2() {
	document.querySelector('.out-2').textContent = num2++;
}
document.querySelector('.div-2').ontouchstart = t2;


// ваше событие здесь!!!


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

let out3 = document.querySelector('.out-3');
function t2(event) {
	console.log(event);
	console.log(event.target.className);
	if (event.target.classList.contains('div-3_1')) out3.textContent = 1;
	else if (event.target.classList.contains('div-3_2')) out3.textContent = 2;
}
	document.querySelector('.div-3_1').ontouchstart = t2;
	document.querySelector('.div-3_2').ontouchstart = t2;

// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */
let out4 = document.querySelector('.out-4');
let div4 = document.querySelector('.div-4');
function t4() {
out4.textContent = 'touch';
}
div4.ontouchstart = t4;
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
	div4.ontouchstart = null;
}
document.querySelector('.b-5').ontouchstart = t5;

// ваше событие здесь!!!

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
	out4.textContent = 'touchend';
}
div4.ontouchend = t6;

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */
let div7 = document.querySelector('.div-7');
function t7() {
	div7.style.backgroundColor = 'red';
}
div7.ontouchstart = t7;
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */
let a8=['red', 'green', 'blue', 'orange', 'pink', 'yellow'];
let div8 = document.querySelector('.div-8');
function t8() {
		let num = Math.floor(Math.random() * a8.length);
	div8.style.backgroundColor = a8[num];
}
div8.ontouchstart = t8;

// ваше событие здесь!!!


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */
let div9 = document.querySelector('.div-9');
function t9(event) {
	console.log(event);
	document.querySelector('.out-9').textContent = event.touches.length;
}
div9.ontouchstart = t9;
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
let div10 = document.querySelector('.div-10');
let num10 = div10.clientWidth + 4;
function t10() {
	div10.style.width = `${num10++}px`;
}
div10.ontouchmove = t10;
// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */
let div11 = document.querySelector('.div-11');
let out11 = document.querySelector('.out-11');
function t11(e) {
	console.log(e)
	console.log(e.touches[0].radiusX)
	console.log(e.touches[0].radiusY)
	out11.innerHTML = 
	`radiusX: ${e.touches[0].radiusX} <br> radiusY: ${e.touches[0].radiusY}`
}
div11.ontouchstart = t11;
// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
const img12_max = document.querySelector(".img-12-max")
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector('.next');
next.ontouchstart = nextFunction;
// next.onclick = nextFunction;

const prev = document.querySelector('.prev');
prev.ontouchstart = prevFunction;
// prev.onclick = prevFunction;

const reset = document.querySelector('.reset');
reset.ontouchstart = resetFunction;
// reset.onclick = resetFunction;

function clearActive() {
	for (let i = 0; i < images.length; i++) {
		images[i].classList.remove('active-img');
	}
}

function nextFunction() {
	clearActive();
	if(count+1 < images.length) count++;
	else count = 0;
	images[count].classList.add('active-img');
	img12_max.src = images[count].src; 
}

function prevFunction() {
	clearActive();
	if(count-1 >= 0) count--;
	else count = images.length-1;
	images[count].classList.add('active-img');
	img12_max.src = images[count].src; 
}

function resetFunction() {
	clearActive()
	images[0].classList.add('active-img');
	img12_max.src = images[0].src; 
}

// ваше событие здесь!!!
