var data = []

fetch('./pokeinfo.json')
  .then(response => response.json())
  .then(dt => { 
    data = dt
    renderTable(dt)
  })



function renderTable(dt) {
  table = document.querySelector('#pokemon-table')
  dt.forEach(element => {
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
    const link = document.createElement('a')
    link.href = `./pokemon.html?pokemon=${element.number}`
    link.textContent = element.name
    td.appendChild(link)
    td.classList.add('table-item')
    td.classList.add('name')
    tr.appendChild(td)
    
    if (element.form != "") {
      p = document.createElement('p')
      p.textContent = element.form
      p.classList.add('table-item')
      p.classList.add('form')
      console.log("form ")
      td.appendChild(p)
    }

    
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

function searchFilter(pokemoneName) {
    const filtered = data.filter(pokemon => pokemon.name.toLowerCase().includes(pokemoneName.toLowerCase()))
    return (filtered)
}

function clearTable(){
  document.querySelectorAll(".row")
  .forEach(el => el.remove()) 
}

function searchresults() {
  const filterText = document.querySelector("#searchbar").value
  const filteredData = searchFilter(filterText)
  clearTable()
  console.log(filteredData)
  renderTable(filteredData)
}



function tipoImagem(tipo){
    if (tipo == "Rock") return "./images/rock.png" 
    if (tipo == "Poison") return "./images/poison.png"
    if (tipo == "Flying") return "./images/flying.png"
    if (tipo == "Ground") return "./images/ground.png"
    if (tipo == "Fire") return "./images/fire.png"
    if (tipo == "Grass") return "./images/grass.png"
    if (tipo == "Water") return "./images/water.png"
    if (tipo == "Fighting") return "./images/fighting.png"
    if (tipo == "Bug") return "./images/bug.png"
    if (tipo == "Dark") return "./images/dark.png"
    if (tipo == "Psychic") return "./images/psychic.png"
    if (tipo == "Ghost") return "./images/ghost.png"
    if (tipo == "Dragon") return "./images/dragon.png"
    if (tipo == "Electric") return "./images/electric.png"
    if (tipo == "Normal") return "./images/normal.png"
    if (tipo == "Steel") return "./images/steel.png"
    if (tipo == "Ice") return "./images/ice.png"
    if (tipo == "Fairy") return "./images/fairy.png"
    return "./images/" + tipo.toLowerCase() + ".png"
}



