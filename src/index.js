import { User } from './user';

const imgs = document.querySelectorAll('img');

for (let img of imgs) {
    img.style.display = `block`;
    console.log(img);
}

let user = new User('Vitalii');
user.sayHi();