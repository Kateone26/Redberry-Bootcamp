"use strict"
const brandSelect = document.getElementById('brand')
const brandData = [
    {
      "id": 1,
      "name": "HP"
    },
    {
      "id": 2,
      "name": "Dell"
    },
    {
      "id": 3,
      "name": "Microsoft"
    },
    {
      "id": 4,
      "name": "Apple"
    },
    {
      "id": 5,
      "name": "Lenovo"
    },
    {
      "id": 6,
      "name": "Acer"
    }
]

for(let i=0;i<brandData.length; i++){;
    let option = document.createElement('option');
    let txt = document.createTextNode(brandData[i].name);
    option.appendChild(txt);
    option.setAttribute('value', brandData[i].name);
    brandSelect.insertBefore(option, brandSelect.lastChild);
}
////////////////////////////

const cpuSelect = document.getElementById('cpu')
const cpuData = [
    {
      "id": 1,
      "name": "Intel Core i 3"
    },
    {
      "id": 2,
      "name": "Intel Core i5"
    },
    {
      "id": 3,
      "name": "Intel Core i7"
    },
    {
      "id": 4,
      "name": "Intel Core i9"
    },
    {
      "id": 5,
      "name": "AMD Ryzen 3"
    }
  ]

for(let i=0;i<cpuData.length; i++){;
    let option = document.createElement('option');
    let txt = document.createTextNode(cpuData[i].name);
    option.appendChild(txt);
    option.setAttribute('value', cpuData[i].name);
    cpuSelect.insertBefore(option, cpuSelect.lastChild);
}
