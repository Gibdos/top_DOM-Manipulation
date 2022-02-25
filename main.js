// your JavaScript file
const container = document.querySelector('#container');
const content = document.createElement('div');
const elPara1 = document.createElement('p');
const elPara2 = document.createElement('p');
const elH1 = document.createElement('h1')
const elH3 = document.createElement('h3')
const btn = document.querySelector('#btn');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

// set up div, p, h1 and h3
elPara1.textContent = "Hey I'm red!";
elPara1.setAttribute('style', 'color: red;');
elH3.textContent = "I'm a blue h3!";
elH3.setAttribute('style', 'color: blue;');
container.appendChild(elPara1);
container.appendChild(elH3);

content.textContent = '';
content.classList.remove('content');
content.setAttribute('style', 'border: 1px solid black; background-color: pink;')
elH1.textContent = "I'm in a div";
elPara2.textContent = "ME TOO!"
content.appendChild(elH1);
content.appendChild(elPara2);
container.appendChild(content)

btn.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    e.target.style.background = 'blue';
  });
