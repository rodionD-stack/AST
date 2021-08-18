let newRect = document.createElement('div');
const border = document.querySelector('.border');
const btnPage = document.querySelector('button');

//Конструктор элементов
class Rect{
    constructor({id, width, height, style, x, y}){
        this.id = id,
        this.width = width;
        this.height = height;
        this.style = style;
        this.x = x;
        this.y = y;
    }

    createRect() {
        /**
         * Функция генерирует случайное значение
         * @param {number} min минимальное значение
         * @param {number} max максимальное значение
         * @returns Возвращает случайное значение
         */
        function getRandomNumber(min, max) {
            return Math.round(Math.random() * (max - min) + min)
         }
        
        //Присваиваем значение координат x и y
        const {width, height} = border.getBoundingClientRect();
        let x = getRandomNumber(0, width - this.width);
        let y = getRandomNumber(0, height - this.height);
       
       //Создаем элементы svg
       let newRect = document.createElement('div');
       newRect.className = 'rectangle';
       
       newRect.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1"><rect width = ${this.width} height = ${this.height} style = ${this.style};stroke-width:1;stroke:rgb(0,0,0)"/></svg>`;
       newRect.id = this.id;

       newRect.style.top = `${y}px`;
       newRect.style.left = `${x}px`;
    
       //Добавляем элементы на условную поверхность.
       border.append(newRect);
       
        }
   
}

let rect_one = new Rect({id:"first", width:"300", height:"150", style:"fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)", x:`${this.x}`, y:`${this.y}`});
let rect_two = new Rect({id:"second", width:"300", height:"150", style:"fill:rgb(0,255,48);stroke-width:1;stroke:rgb(0,0,0)", x:`${this.x}`, y:`${this.y}`});
rect_one.createRect();
rect_two.createRect();

let firstRect = document.getElementById('first');
let secondRect = document.getElementById('second');

/**
 * Функция добавляет и убирает border при клике на блоки.
 */
function cliker() {
    let rects = document.querySelectorAll('.rectangle');
    rects.forEach(item => {
           item.addEventListener('click', (e) => {
               rects.forEach(el => {
                   el.classList.remove('active');
               });
               item.classList.add('active');
           })
       })

}
cliker();

/**
 * Функция рассчитывает расстояние между блоками.
 */
function getDistance() {
    
    let distX = secondRect.offsetLeft - firstRect.offsetLeft;
    console.log(distX)
    let distY = secondRect.offsetTop - firstRect.offsetTop;
    console.log(distY)
    let distance = Math.floor(Math.sqrt((distX * distY) + (distY * distY)));
    console.log('------------', distance)

    border.insertAdjacentHTML('beforebegin', `<h2 class="showDistance">Расстояние между блоками: ${distance} px</h2>`);

}
getDistance();

/**
 * Функция обновляет страницу по нажатию на кнопку.
 */
function reloadPage() {
    btnPage.addEventListener('click', () => {
        window.location.reload();
    });
}
reloadPage();






