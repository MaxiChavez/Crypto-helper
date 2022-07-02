let baseUrl='https://pokeapi.co/api/v2/pokemon/ditto'

export const getPokemon = (callback)=>{
      fetch(`${baseUrl}`,{
          method: 'GET'
      })
      .then((httpResponse)=>{
          if(httpResponse.ok)
              return httpResponse.json()
      })
      .then(body => {
          callback(body);
      })
  }
  