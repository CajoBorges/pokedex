fetch('./pokeinfo.json')
  .then(response => response.json())
  .then(data => {
    renderTable(data)
  })

function renderTable(data) {
  table = document.querySelector('#pokemon-table')
  data.forEach(element => {
    tr = document.createElement('tr')
    tr.classList.add('row')
    
    img = document.createElement('img')
    img.src = element.imagem
    img.classList.add('image')
    td = document.createElement('td')
    text = document.createElement('span')
    text.textContent = element.number
    td.classList.add('table-item')
    td.classList.add('number')
    td.appendChild(img)
    td.appendChild(text)
    tr.appendChild(td)
    
    td = document.createElement('td')
    td.textContent = element.name
    td.classList.add('table-item')
    td.classList.add('name')
    tr.appendChild(td)
    
    td = document.createElement('td')
    //td.textContent = element.tipo1
    img = document.createElement('img')
    img.src = tipoImagem(element.tipo1)
    td.classList.add('table-item')
    td.classList.add('type')
    img.classList.add("tipo")
    td.appendChild(img)
    if (element.tipo2) {
      //td.textContent += ' / ' + element.tipo2
      img = document.createElement('img')
      img.src = tipoImagem(element.tipo2)
      img.classList.add("tipo")
      td.appendChild(img)
    }
    tr.appendChild(td)

    td = document.createElement('td')
    td.textContent = element.stats.hp
    td.classList.add('table-item')
    td.classList.add('hp')
    tr.appendChild(td)

    td = document.createElement('td')
    td.textContent = element.stats.atk
    td.classList.add('table-item')
    td.classList.add('attack')
    tr.appendChild(td)

    td = document.createElement('td')
    td.textContent = element.stats.def
    td.classList.add('table-item')
    td.classList.add('defense')
    tr.appendChild(td)

    td = document.createElement('td')
    td.textContent = element.stats.spatk
    td.classList.add('table-item')
    td.classList.add('sp-attack')
    tr.appendChild(td)

    td = document.createElement('td')
    td.textContent = element.stats.spdef
    td.classList.add('table-item')
    td.classList.add('sp-defense')
    tr.appendChild(td)

    td = document.createElement('td')
    td.textContent = element.stats.speed
    td.classList.add('table-item')
    td.classList.add('speed')
    tr.appendChild(td)

    table.appendChild(tr)
  })
}

function searchFilter(pokemoneName, data) {
    const asArray = Object.entries(data)
    const filtered = asArray.filter(pokemon => pokemon[1].name.toLowerCase().includes(pokemoneName.toLowerCase()))
    return Object.fromEntries(filtered)
}


function tipoImagem(tipo){
    return "./images/" + tipo + ".png"
}