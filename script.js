
const superBowls = [{
  winners:'Green Bay Packers',
  city:'Los Angeles',
  superNum:'I'
},{
  winners:'Green Bay Packers',
  city:'Miami',
  superNum:'II'
},{
  winners:'New York Jets',
  city:'Miami',
  superNum:'III'
},{
  winners:'Kansas City Chiefs',
  city:'New Orleans',
  superNum:'IV'
},{
  winners:'Baltimore Colts',
  city:'Miami',
  superNum:'V'
},{
  winners:'Dallas Cowboys',
  city:'New Orleans',
  superNum:'VI'
},{
  winners:'Miami Dolphins',
  city:'Los Angeles',
  superNum:'VII'
},{
  winners:'Miami Dolphins',
  city:'Houston',
  superNum:'VIII'
},{
  winners:'Pittsburgh Steelers',
  city:'New Orleans',
  superNum:'IX'
},{
  winners:'Pittsburgh Steelers',
  city:'Miami',
  superNum:'X'
},{
  winners:'Oakland Raiders',
  city:'Pasadena',
  superNum:'XI'
},{
  winners:'Dallas Cowboys',
  city:'New Orleans',
  superNum:'XII'
},{
  winners:'Pittsburgh Steelers',
  city:'Miami',
  superNum:'XIII'
},{
  winners:'Pittsburgh Steelers',
  city:'Pasadena',
  superNum:'XIV'
},{
  winners:'Oakland Raiders',
  city:'New Orleans',
  superNum:'XV'
},{
  winners:'San Francisco 49ers',
  city:'Pontiac',
  superNum:'XVI'
},{
  winners:'Washington Redskins',
  city:'Pasadena',
  superNum:'XVII'
},{
  winners:'Los Angeles Raiders',
  city:'Tampa',
  superNum:'XVIII'
},{
  winners:'San Francisco 49ers',
  city:'Palo Alto',
  superNum:'XIX'
},{
  winners:'Chicago Bears',
  city:'New Orleans',
  superNum:'XX'
},{
  winners:'New York Giants',
  city:'Pasadena',
  superNum:'XXI'
},{
  winners:'Washington Redskins',
  city:'San Diego',
  superNum:'XXII'
},{
  winners:'San Francisco 49ers',
  city:'Miami',
  superNum:'XXIII'
},{
  winners:'San Francisco',
  city:'New Orleans',
  superNum:'XXIV'
},{
  winners:'New York Giants',
  city:'Tampa',
  superNum:'XXV'
},{
  winners:'Washington Redskins',
  city:'Minneapolis',
  superNum:'XXVI'
},{
  winners:'Dallas Cowboys',
  city:'Pasadena',
  superNum:'XXVII'
},{
  winners:'Dallas Cowboys',
  city:'Atlanta',
  superNum:'XVIII'
},{
  winners:'San Francisco 49ers',
  city:'Miami',
  superNum:'XXIX'
},{
  winners:'Dallas Cowboys',
  city:'Tempe',
  superNum:'XXX'
},{
  winners:'Green Bay Packers',
  city:'New Orleans',
  superNum:'XXXI'
},{
  winners:'Denver Broncos',
  city:'San Diego',
  superNum:'XXXII'
},{
   winners:'Denver Broncos',
  city:'Miami Gardens',
  superNum:'XXXIII'
},{
  winners:'St. Louis Rams',
  city:'Atlanta',
  superNum:'XXXIV'
},{
  winners:'Baltimore Ravens',
  city:'Tampa',
  superNum:'XXXV'
},{
  winners:'New England Patriots',
  city:'New Orleans',
  superNum:'XXXVI'
},{
  winners:'Tampa Bay Buccaneers',
  city:'San Diego',
  superNum:'XXXVII'
},{
  winners:'New England Patriots',
  city:'Houston',
  superNum:'XXXVIII'
},{
  winners:'New England Patriots',
  city:'Jacksonville',
  superNum:'XXXIX'
},{
  winners:'Pittsburgh Steelers',
  city:'Detroit',
  superNum:'XL'
},{
  winners:'Indianapolis Colts',
  city:'Miami Gardens',
  superNum:'XLI'
},{
  winners:'New York Giants',
  city:'Glendale',
  superNum:'XLII'
},{
  winners:'Pittsburgh Steelers',
  city:'Tampa',
  superNum:'XLIII'
},{
  winners:'New Orleans Saints',
  city:'Miami Gardens',
  superNum:'XLIV'
},{
  winners:'Green Bay Packers',
  city:'Arlington',
  superNum:'XLV'
},{
  winners:'New York Giants',
  city:'Indianapolis',
  superNum:'XLVI'
},{
  winners:'Baltimore Ravens',
  city:'New Orleans',
  superNum:'XLVII'
},{
  winners:'Seattle Seahawks',
  city:'East Rutherford',
  superNum:'XLVIII'
},{
  winners:'New England Patriots',
  city:'Glendale',
  superNum:'XLIX'
},{
  winners:'Denver Broncos',
  city:'Santa Clara',
  superNum:'50'
},{
  winners:'New England Patriots',
  city:'Houston',
  superNum:'LI'
},{
  winners:'Philadelphia Eagles',
  city:'Minneapolis',
  superNum:'LII'
},{
  winners:'New England Patriots',
  city:'Atlanta',
  superNum:'LIII'
},{
  winners:'Kansas City Chiefs',
  city:'Miami Gardens',
  superNum:'LIV'
}
]

const filters = {
  searchText: ''
}



const renderSuperBowls = (superBowls,filters)=>{
    const filteredGames = superBowls.filter(superbowl=>{
      return superbowl.winners.toLowerCase().includes(filters.searchText.toLowerCase()) || superbowl.city.toLowerCase().includes(filters.searchText.toLowerCase())
     })
    document.querySelector('#container').innerHTML = ''
    filteredGames.forEach(game=>{
      const newElement = document.createElement('h4')
      newElement.style.fontFamily = 'Georgia'
      newElement.style.color = 'White'
      newElement.textContent = [game.winners ,` Super Bowl ${game.superNum}`,` Played in: ${game.city}`]
      document.querySelector('#container').appendChild(newElement)
     })
}

document.querySelector('#text-input').addEventListener('input',(e)=>{
    filters.searchText = e.target.value.trim()
    renderSuperBowls(superBowls,filters)
  })

