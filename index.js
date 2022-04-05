let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let div1 = document.createElement('div')
div1.setAttribute('class', 'dog-content')
content.append(div1)


let img1 = document.createElement('div')
img1.setAttribute('class', 'dog-image')
img1.setAttribute('src', './assets/rizzo.jpg')
div1.append(img1)

let div2 = document.createElement('div')
div2.setAttribute('class', 'dog-details')
div1.append(div2)

let header1 = document.createElement('h3')
header1.textContent='Description:'
div2.append(header1)

let p1 = document.createElement('p')
p1.textContent= 'This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.'
div2.append(p1)

let header2 = document.createElement('h3')
header2.textContent='Feeding Times:'
div2.append(header2)


let ul = document.createElement('ul')
div1.append(ul)

let li1 = document.createElement('li')
li1.textContent ='9.00 am'
ul.append(li1)

let li2 = document.createElement('li')
li2.textContent ='12.00 pm'
ul.append(li2)

let li3 = document.createElement('li')
li3.textContent ='5.00 pm'
ul.append(li3)

div2.append(ul)


