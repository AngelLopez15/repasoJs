import heroes, {owners} from '../data/heroes'

export const getHeroById = (id) => {
    return heroes.find(heroe=>heroe.id===id)
}

// getHeroById = (id) => heroes.find(heroe=>heroe.id===id)

export const getHeroesByOwner = owner => heroes.filter(heroe => heroe.owner === owner)

