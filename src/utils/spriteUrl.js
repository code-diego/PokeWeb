// sprites de pokemon

const SPRITES = {
  default:   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon',
  dream : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world',
  home:     'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home',
  official: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork',
  showdown: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown',
}
const VARIANTS = {
  front:       (base, id, ext) => `${base}/${id}.${ext}`,
  back:        (base, id, ext) => `${base}/back/${id}.${ext}`,
  front_shiny: (base, id, ext) => `${base}/shiny/${id}.${ext}`,
  back_shiny:  (base, id, ext) => `${base}/back/shiny/${id}.${ext}`,
}
const EXT = {
  default: 'png', 
  dreamWorld: 'svg', 
  home: 'png', 
  official: 'png', 
  showdown: 'gif'
}
export const getSpriteUrl = (type, variant, id) =>
  VARIANTS[variant](SPRITES[type], id, EXT[type])

// modos :
// (type)    ['default', 'dreamWorld', 'home', 'official', 'showdown']
// (variant) ['front', 'back', 'front_shiny', 'back_shiny']
// (id)      number


// sprites de tipos de pokemon

const SPRITES_TYPES = {
  gen9: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/small/{id}.png'
}

export const getTypeSpriteUrl = (id) =>
  SPRITES_TYPES.gen9.replace('{id}', id)

// TODO : hacer mas modos de sprites de tipos de pokemon (gen8, gen7, etc)