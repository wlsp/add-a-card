const img = document.getElementById('imgUrl');
const superH = document.getElementById('superHero');
const fullN = document.getElementById('fullName');
const power = document.getElementById('superPower');
const alter = document.getElementById('age');
const casa = document.getElementById('home');
const satz = document.getElementById('quote');


// function render(arr) {
//     arr.forEach((ella) => {
//         $('#scrolling-wrapper').innerHTML += `
//       <figure class="card" >
//         <div id="card">
//             <img src="${ella.imgUrl}" alt="" /> 
//             <figcaption>
//                 <h2>${ella.name}</h2>
//                 <h3>${ella.fullName}</h3>
//                 <h3>${ella.superPower}</h3>
//                 <h3>${ella.age}</h3>
//                 <h3>${ella.home}</h3>
//                 <p><b>${ella.quote}</b></p>
//             </figcaption>
//           </div>
//     </figure>
//     `;
//     });
// }



const $ = (ella) => document.querySelector(ella);

let superArray = [];

class Superhero {
    constructor(
        name,
        fullName,
        superPower,
        age,
        home,
        quote,
        imgUrl) {
        this.name = name;
        this.fullName = fullName;
        this.superPower = superPower;
        this.age = age;
        this.home = home;
        this.quote = quote;
        this.imgUrl = imgUrl;
    }
    createSuperHero() {
        superArray.push(this);
    }
}

function render(arr) {
    arr.forEach((ella) => {
        $('#scrolling-wrapper').innerHTML += `
      <figure class="card" >
        <div id="card">
            <img src="${ella.imgUrl}" alt="" /> 
            <figcaption>
                <h2>${ella.name}</h2>
                <h3>${ella.fullName}</h3>
                <h3>${ella.superPower}</h3>
                <h3>${ella.age}</h3>
                <h3>${ella.home}</h3>
                <p><b>${ella.quote}</b></p>
            </figcaption>
          </div>
    </figure>
    `;
    });
}

$('form').addEventListener('submit', (event) => {
    event.preventDefault();
    let heros = new Superhero(
        $('#superHero').value,
        $('#fullName').value,
        $('#superPower').value,
        $('#age').value,
        $('#home').value,
        $('#quote').value,
        $('#imgUrl').value
    );
    heros.createSuperHero();
    $('#scrolling-wrapper').innerHTML = "";
    render(superArray);
    img.value = '';
    superH.value = '';
    fullN.value = '';
    power.value = '';
    alter.value = '';
    casa.value = '';
    satz.value = '';
});
















// document.querySelector('[type="button"]').addEventListener('click', (event) => {
//     cards.innerHTML = "";
//     superArray.push(
//         new Superhero(
//             event.target.form[0].value,
//             event.target.form[1].value,
//             event.target.form[2].value,
//             event.target.form[3].value * 1,
//             event.target.form[4].value,
//             event.target.form[5].value,
//             event.target.form[6].value,
//             false))
//     superArray.forEach(() => {
//         cards.innerHTML += `

//         <figure class="card" >
//         <div id="card">
//             <img src="${this.imgUrl}" alt="" />
//             <figcaption>
//                 <h2>${this.name}</h2>
//                 <h3>${this.fullName}</h3>
//                 <h3>${this.superPower}</h3>
//                 <h3>${this.age}</h3>
//                 <h3>${this.home}</h3>
//                 <p><b>${this.quote}</b></p>
//             </figcaption>
//           </div>
//     </figure>`;
//     })
// });








