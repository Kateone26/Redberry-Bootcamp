"use strict"

// const formName = document.getElementById('name')
// const formSurname = document.getElementById('surname')
// let formEmail = document.getElementById('mail')




// document.getElementById('registration').addEventListener('submit', function(event){
//     event.preventDefault();

//     let errors = {};
//     let form = event.target;

//     //name
//     let name = document.getElementById('name').value
//     if(name.length < 2){
//         errors.name = 'მინიმუმ ორი სიმბოლო' 
//         // document.querySelector('.form-name').classList.add('active-error')
//         // formName.style.borderColor = 'red'
//     } 
//     if(name.length ==0 ) errors.name = 'სავალდებულოა'
//     let letters = /^[A-Za-z]+$/;
//     if(name.match(letters)) errors.name = 'გამოიყენე ქართული ასოები'


//     // surname
//     let surname = document.getElementById('surname').value
//     if(surname.length < 2) errors.surname = 'მინიმუმ ორი სიმბოლო'
//     if(surname.length ==0 ) errors.surname = 'სავალდებულოა'
//     if(surname.match(letters)) errors.surname = 'გამოიყენე ქართული ასოები'

//     // select team
//     const selectTeamValue = document.getElementById('team').value
//     if(selectTeamValue) 

//     // if(errors){
//     //     document.querySelector('.form-name').classList.add('active-error')
//     //     formName.style.borderColor = 'red'
//     // }else{
//     //     formName.style.borderColor = 'blue'
//     // }

//     console.log(errors);

//     form.querySelectorAll('.error-text').forEach(item =>{
//         item.innerHTML = ' ';

//     })

//     for (let item in errors){
//         console.log(item);
//         let errorspan = document.getElementById('error_'+ item);

//         if (errorspan){
//             errorspan.textContent = errors[item];
//             errorspan.style.color= 'red';
            
//         }
//     }

//     if(Object.keys(errors).length == 0){
//         // form.submit();

//         document.getElementById('workers-info-form').classList.add('hide-reg-1')
//         document.getElementById('laptop-info-form').style.display = 'block';


//     } 

// })


// function allLetter(inputtxt)
//   {
//    var letters = /^[A-Za-z]+$/;
//    if(inputtxt.value.match(letters))
//      {
//       return true;
//      }
//    else
//      {
//      alert("message");
//      return false;
//      }
//   }











// ////////////////////////////////////////
// hide form one on click
// document.getElementById('next-btn').addEventListener('click', function(){
//     document.getElementById('workers-info-form').classList.add('hide-reg-1')
//     document.getElementById('laptop-info-form').style.display = 'block';
// })





////////////////////////////////////////

const teamSelect = document.getElementById('team')
const data = [
    {
      "id": 1,
      "name": "დეველოპერი"
    },
    {
      "id": 2,
      "name": "HR"
    },
    {
      "id": 3,
      "name": "გაყიდვები"
    },
    {
      "id": 4,
      "name": "დიზაინი"
    },
    {
      "id": 5,
      "name": "მარკეგინგი"
    }
];


for(let i=0;i<data.length; i++){
    let option = document.createElement('option');
    let txt = document.createTextNode(data[i].name);
    option.appendChild(txt);
    option.setAttribute('value', data[i].name);
    teamSelect.insertBefore(option, teamSelect.lastChild);
}

///////////////////////////////////////

const positionsSelect = document.getElementById('positions')
const positionsData = [
    {
      "id": 1,
      "name": "ინტერნი",
      "team_id": 1
    },
    {
      "id": 2,
      "name": "ჯუნიორ დეველოპერი",
      "team_id": 1
    },
    {
      "id": 3,
      "name": "მიდლ დეველოპერი",
      "team_id": 1
    },
    {
      "id": 4,
      "name": "სენიორ დეველოპერი",
      "team_id": 1
    },
    {
      "id": 5,
      "name": "ლიდ დეველოპერი",
      "team_id": 1
    },
    {
      "id": 6,
      "name": "HR სპეციალისტი",
      "team_id": 2
    },
    {
      "id": 7,
      "name": "HR პროექტ მენეჯერი",
      "team_id": 2
    },
    {
      "id": 8,
      "name": "HR ბიზნეს პარტნიორი",
      "team_id": 2
    },
    {
      "id": 9,
      "name": "ჯუნიორ ბიზნეს დეველოპერი",
      "team_id": 3
    },
    {
      "id": 10,
      "name": "ბიზნეს დეველოპერი",
      "team_id": 3
    },
    {
      "id": 11,
      "name": "სენიორ ბიზნეს დეველოპერი",
      "team_id": 3
    },
    {
      "id": 12,
      "name": "ჯუნიორ UI/UX დიზაინერი",
      "team_id": 4
    },
    {
      "id": 13,
      "name": "UI/UX დიზაინერი",
      "team_id": 4
    },
    {
      "id": 14,
      "name": "სენიორ UI/UX დიზაინერი",
      "team_id": 4
    },
    {
      "id": 15,
      "name": "ლიდ UI/UX დიზაინერი",
      "team_id": 4
    },
    {
      "id": 16,
      "name": "ბლოგერი",
      "team_id": 5
    },
    {
      "id": 17,
      "name": "growth მარკეტინგის სპეციალისტი",
      "team_id": 5
    },
    {
      "id": 18,
      "name": "მარკეტინგის თიმ ლიდი",
      "team_id": 5
    }
]


for(let i=0;i<positionsData.length; i++){
    let option2 = document.createElement('option');
    let txt2 = document.createTextNode(positionsData[i].name);
    option2.appendChild(txt2);
    option2.setAttribute('value', positionsData[i].name);
    positionsSelect.insertBefore(option2,positionsSelect.lastChild);
}
/////////////////////////////////////

