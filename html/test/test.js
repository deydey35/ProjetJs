/**
 * Récupération de l'ensemble des pays
 */
const all_countries = Country.all_countries

/**
 * Q1 - outsideTheContinent() : 
 * Tableau JS des pays (objets Country) dont au moins 
 * un pays frontalier n’est pas dans le même continent.
 * 
 * Permet d'avoir les pays voisins qui ne sont pas dans le même continent que leur pays
 * @returns bordersOutsideTheContinent
 */
function outsideTheContinent() {

    // Tableau contenant les pays voisins qui ne sont pas dans le même continent que lui même
    let bordersOutsideTheContinent = []

    // Récupération des clés du tableau contenant tous les pays permettant de sélectionner les éléments dans le tableau all_countries
    Object.keys(all_countries).forEach(countryKey => {

        // Récupération de l'objet Country
        const country = all_countries[countryKey]

        // Récupération des pays voisins du pays
        const bordersOfCoutry = country.getBorders()

        //Si le tableau n'est pas défini on return
        if (bordersOfCoutry === undefined) {
            return undefined
        }

        // On parcourt le tableau des pays voisins
        bordersOfCoutry.forEach(border => {

            // On comparer chaque voisin et on le compare avec la region de l'object Country
            if (border["region"] !== country["region"]) {

                // On ajoute le pays dans le tableau bordersOutsideTheContinent
                bordersOutsideTheContinent.push(border)
            }
        })
    })
    return bordersOutsideTheContinent
}

console.table(outsideTheContinent())


/**
 * Q2 - moreNeighbors() :
 * moreNeighbors() : Tableau des pays ayant le plus grand nombre de voisins.
 * Affichez aussi les voisins
 * 
 * Permet d'afficher les pays avec le plus de voisins ainsi que les voisins associés
 */
function moreNeighbors() {

    // Tableau contenant les futurs pays avec le plus de voisins
    let moreNeighbors = []

    // Variable changeante permettant de stocker le longueurs du tableau voisins
    let maxBorders = 0

    // Parcourts du tableau contenant les pays
    Object.keys(all_countries).forEach(countryKey => {
        
        // Initailisation d'un pays
        const country = all_countries[countryKey]

        // Initialisation des voisins de pays
        const borders = country["borders"]
        
        if (borders !== undefined) {
            // Récupération de la longueur du tableau des voisins
            let numberOfBorders = borders.length
            if (numberOfBorders >= maxBorders) {
                maxBorders = numberOfBorders
                // Ajout dans le tableau du pays avec le plus de voisins
                moreNeighbors.push(country)
            }
        }
    })

    // Affichage du pays + des ses voisins
    console.log('Affichage des pays ayant le plus de voisin')
    moreNeighbors.forEach(country => {
        console.log()
        console.log(`Les voisins de ${country["frenchName"]} sont ${country.traductionOfBorders}`)
    })
}

moreNeighbors()