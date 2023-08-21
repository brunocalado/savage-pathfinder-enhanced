// v 0.1
// Nome da Macro: Random Item Selection
// Ativação: Manual

// Compendium a ser utilizado
const compendiumID = "savage-pathfinder-enhanced.fooddrink"; // Substitua pelo nome do compêndio que você deseja utilizar

// Número de itens aleatórios a serem selecionados
const numberOfItems = 7;

(async () => {
  
  const drinks = await getCompendiumDrink( compendiumID ); 
  const food = await getCompendiumFood( compendiumID ); 
  const randomDrinks = [];
  const randomFood = [];

  for (let i = 0; i < numberOfItems; i++) {
    const randomIndex = Math.floor(Math.random() * drinks.length);
    randomDrinks.push(drinks[randomIndex]);
  }

  for (let i = 0; i < numberOfItems; i++) {
    const randomIndex = Math.floor(Math.random() * food.length);
    randomFood.push(food[randomIndex]);
  }

  const journalContentDrinks = `
  <h2>Drinks</h2>
    <table>
    <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Cost</th>
    </tr>
    </thead>
    <tbody>
      
    ${randomDrinks.map(item => `
    <tr>
    <td>${item.name}</td>
    <td>${item.system.description}</td>
    <td>${item.system.price}</td>
    </tr>
  `).join("")}
    
    </tbody>
    </table>  
  `;

  const journalContentFood = `
  <h2>Food</h2>
    <table>
    <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Cost</th>
    </tr>
    </thead>
    <tbody>
      
    ${randomFood.map(item => `
    <tr>
    <td>${item.name}</td>
    <td>${item.system.description}</td>
    <td>${item.system.price}</td>
    </tr>
  `).join("")}
    
    </tbody>
    </table>  
  `;  
  const journalEntry = await JournalEntry.create({ name: "Menu", content: journalContentDrinks + journalContentFood });
  journalEntry.sheet.render(true);
  
  ui.notifications.info(`A lista de itens aleatórios foi criada no journal "${journalEntry.name}".`);
})();


async function getCompendiumDrink( compendiumIDarg ) {
  const compendium = await game.packs.find(p=>p.metadata.id==compendiumIDarg);
  
  if (!compendium) {
    console.warn( "The compendium couldn't be found." );
    return;
  }
  const AllItems = await compendium.getDocuments();
  const items = await AllItems.filter(p=> (p.system.category=='Beverage') );
  return items;
}

async function getCompendiumFood( compendiumIDarg ) {
  const compendium = await game.packs.find(p=>p.metadata.id==compendiumIDarg);
  
  if (!compendium) {
    console.warn( "The compendium couldn't be found." );
    return;
  }
  const AllItems = await compendium.getDocuments();
  const items = await AllItems.filter(p=> (p.system.category=='Food') );
  return items;
}

