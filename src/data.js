window.dataManager = {
   
  filterRick : (data) => {
      let items = data.filter(element => element.name.indexOf('Rick') > -1);
      console.log(items)
      return items;
  },
  filterMorty :(data) => {
      let items = data.filter(element => element.name.indexOf('Morty') > -1);
      return items;
  },
  
  filterOtrosPersonajes : (data) => {
  let items = data.filter(element => element.name.includes('Rick') == false && element.name.includes('Morty') == false  );
  console.log(items) 
  return items;
  
 },
  
}  

window.example = example;
