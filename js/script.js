const groupTeam = [
    {
        firstName : 'wayne Barnett',
        role : ' Founder & CEO',
        img : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        firstName : 'Angela Caroll',
        role : ' Chief Editor',
        img : 'angela-caroll-chief-editor.jpg'
    },
    {
        firstName : 'Walter Gordon',
        role : ' Office Manager',
        img : 'walter-gordon-office-manager.jpg'
    },
    {
        firstName : 'Angela Lopez',
        role : 'Social Media Manager',
        img : 'angela-lopez-social-media-manager.jpg'
    },
    {
        firstName : 'Scott Estrada',
        role : 'Developer',
        img : 'scott-estrada-developer.jpg'
    },
    {
        firstName : 'Barbara Ramos',
        role : 'Graphic Designer',
        img : 'barbara-ramos-graphic-designer.jpg'
    }
];
const ulList = document.querySelector('#list');
for ( let i = 0; i < groupTeam.length ; i++){
     const thisGroup = groupTeam[i];

    //  console.log(`nome :${thisGroup.firstName}- Ruolo :${thisGroup.role}- img :${thisGroup.img}`);
    const newLi =`
    <div class="col-4">
    <div class="card" style="width: 18rem;">
    <img src="img/${thisGroup.img}" class="card-img-top" alt="...">
    <div class="card" style="width: 18rem;">
        <div class="card-header fw-bolder fs-4">
          ${thisGroup.firstName}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item ms-img fw-semibold fs-5">${thisGroup.role}</li>
        </ul>
      </div>
     </div>
    </div>
    `;
    ulList.innerHTML+=newLi;
};