function PokemonCard({pokemon}) {
  console.log(pokemon)


  return pokemon.imgSrc !== undefined ? <><img src={pokemon.imgSrc} alt={pokemon.name}></img><figcaption>{pokemon.name}</figcaption></> :
    <><p>???</p> <figcaption>{pokemon.name}</figcaption> </>

 
} export default PokemonCard;