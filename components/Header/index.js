// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerCreator = document.querySelector('.header-container');

headerCreator.appendChild(Header());

function Header() {
    const newHeader = document.createElement('div');// must be returned, main Div
    const newDate = document.createElement('span');
    const newH1 = document.createElement('h1');
    const newTemp = document.createElement('span');

    newDate.classList.add('date');
    newH1.classList.add('header');
    newTemp.classList.add('temp');

    newDate.textContent = 'SMARCH 28, 2019';
    newH1.textContent = 'Lambda Times';
    newTemp.textContent = '98°';

    newHeader.appendChild(newDate);
    newHeader.appendChild(newH1);
    newHeader.appendChild(newTemp);

    return newHeader
}
