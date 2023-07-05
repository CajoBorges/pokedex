// function table() {
//   // Declare variables
//   var input, filter, table, tr, td, i, txtValue;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("myTable");
//   tr = table.getElementsByTagName("tr");
//   // Loop through all table rows, and hide those who don't match the search query
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }



fetch('./MOCK_DATA.json')
  .then(response => response.json())
  .then(data => {
    table = document.querySelector('#pokemon-table')
    data.forEach(element => {
      tr = document.createElement('tr')
      
      td = document.createElement('td')
      td.textContent = element.number
      td.classList.add('number')
      tr.appendChild(td)
      
      td = document.createElement('td')
      td.textContent = element.name
      td.classList.add('name')
      tr.appendChild(td)
      
      td = document.createElement('td')
      td.textContent = element.type
      td.classList.add('type')
      tr.appendChild(td)

      td = document.createElement('td')
      td.textContent = element.stats.hp
      td.classList.add('hp')
      tr.appendChild(td)

      td = document.createElement('td')
      td.textContent = element.stats.attack
      td.classList.add('attack')
      tr.appendChild(td)

      td = document.createElement('td')
      td.textContent = element.stats.defense
      td.classList.add('defense')
      tr.appendChild(td)

      td = document.createElement('td')
      td.textContent = element.stats.spAttack
      td.classList.add('sp-attack')
      tr.appendChild(td)

      td = document.createElement('td')
      td.textContent = element.stats.spDefense
      td.classList.add('sp-defense')
      tr.appendChild(td)

      td = document.createElement('td')
      td.textContent = element.stats.speed
      td.classList.add('speed')
      tr.appendChild(td)

      table.appendChild(tr)
    })
  })
