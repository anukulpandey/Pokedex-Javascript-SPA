let base_api = "https://pokeapi.co/api/v2/pokemon/";
let i = 1;
async function pokeName() {
    
    let response1 = await fetch(`${base_api}${i}`);
    let names1 = await response1.json();

    let response2 = await fetch(`${base_api}${i+1}`);
    let names2 = await response2.json();

    let response3 = await fetch(`${base_api}${i+2}`);
    let names3 = await response3.json();

    
    // Create elements to insert in div
    let end=document.getElementById('end');
    let container=document.getElementById('container');
    let containerDiv = document.createElement('div');
    containerDiv.innerHTML = `
    <div class="card-group">
  <div class="card  border-dark  my-3 mx-4">
    <img class="card-img-top" src="https://pokeres.bastionbot.org/images/pokemon/${i}.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${names1.name.toUpperCase()}</h5>
      <p class="card-text"><li>Height : ${names1.height} &nbsp &nbsp &nbsp &nbsp &nbsp Weight : ${names1.weight}</li>
      <li>Attack : ${names1.stats[1].base_stat}&nbsp &nbsp &nbsp &nbsp &nbsp Defense : ${names1.stats[2].base_stat}</li>
      <li>HP : ${names1.stats[0].base_stat}&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Speed ${names1.stats[5].base_stat}</li></p>
    </div>
  </div>
  <div class="card my-3  border-dark  mx-4">
    <img class="card-img-top" src="https://pokeres.bastionbot.org/images/pokemon/${i+1}.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${names2.name.toUpperCase()}</h5>
      <p class="card-text"><li>Height : ${names2.height} &nbsp &nbsp &nbsp &nbsp &nbsp Weight : ${names2.weight}</li>
      <li>Attack : ${names2.stats[1].base_stat}&nbsp &nbsp &nbsp &nbsp &nbsp Defense : ${names2.stats[2].base_stat}</li>
      <li>HP : ${names2.stats[0].base_stat}&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Speed ${names2.stats[5].base_stat}</li></p>
    </div>
  </div>
  <div class="card my-3  border-dark  mx-4 ">
    <img class="card-img-top" src="https://pokeres.bastionbot.org/images/pokemon/${i+2}.png" alt="Unable to fetch image of ">
    <div class="card-body">
      <h5 class="card-title ">${names3.name.toUpperCase()}</h5>
      <p class="card-text"><li>Height : ${names3.height} &nbsp &nbsp &nbsp &nbsp &nbsp Weight : ${names3.weight}</li>
      <li>Attack : ${names3.stats[1].base_stat}&nbsp &nbsp &nbsp &nbsp &nbsp Defense : ${names3.stats[2].base_stat}</li>
      <li>HP : ${names3.stats[0].base_stat}&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Speed ${names3.stats[5].base_stat}</li></p>
    </div>
  </div>
</div>
    `
    container.insertBefore(containerDiv,end);
    i=i+3;
    pokeName()
};
pokeName()
