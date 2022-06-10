console.log('Contentscript injected');

const searchText = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(3) > p:nth-child(2)',
);

const searchBudget = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(3) > p:nth-child(3)',
);

let element = document.createElement('div');
let injectedText = document.createTextNode(`${searchText.innerHTML},${searchBudget.innerHTML}`);
element.style.position = 'absolute';
element.style.right = '100px';
element.style.top = '70px';
element.style.borderRadius = '10px';
element.style.border = '2px #0B226B solid';
element.style.padding = '20px';
element.style.color = 'white';
element.style.backgroundColor = '#0B226B';
let showDetails = false;
const detailsText = document.createElement('div');
const detailsInjectedText = document.createTextNode(
  'dummy information on climate change: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ',
);

detailsText.appendChild(detailsInjectedText);
detailsText.style.display = 'none';
element.appendChild(injectedText);

element.addEventListener('mouseenter', () => {
  detailsText.style.display = 'block';
});
element.addEventListener('mouseout', () => {
  detailsText.style.display = 'none';
});

const parentElement = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(2) > h2',
);
parentElement.appendChild(element);
parentElement.appendChild(detailsText);
