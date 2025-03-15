class Country {

    constructor (codeAlpha3, nomFrancais, capitale, continent, population, paysVoisins, superficie, langages, monnaies, lienImage, domain){
        this._codeAlpha3 = codeAlpha3
        this._nomFrancais = nomFrancais
        this._capitale = capitale
        this._continent = continent
        this._population = population
        this._paysVoisins = paysVoisins
        this._superficie = superficie
        this._langages = langages
        this._monnaies = monnaies
        this._lienImage = lienImage
        this._domain = domain
    }

    static all_countries = {}

    /**
     * Permet d'accèder à la propriété codeAlpha3 du pays
     * @return codeAlpha3
     */
    get codeAlpha3 () {
        return this._codeAlpha3
    }

    /**
     * Permet d'accèder à la propriété nomFrancais du pays
     * @return nomFrançais
     */
    get nomFrancais () {
        return this._nomFrancais
    }

    /**
     * Permet d'accèder à la propriété capitale du pays
     * @return capitale
     */
    get capitale () {
        return this._capitale
    }

    /**
     * Permet d'accèder à la propriété continent du pays
     * @return continent
     */
    get continent () {
        return this._continent
    }

    /**
     * Permet d'accèder à la propriété population du pays
     * @return population
     */
    get population () {
        return this._population
    }

    /**
     * Permet d'accèder à la propriété pays voisins du pays
     * @return paysVoisins
     */
    get paysVoisins () {
        return this._paysVoisins
    }

    /**
     * Permet d'accèder à la propriété superficie du pays
     * @return superficie
     */
    get superficie () {
        return this._superficie
    }

    /**
     * Permet d'accèder à la propriété langage du pays
     * @return langages
     */
    get langages () {
        return this._langages
    }

    /**
     * Permet d'accèder à la propriété monnaies du pays
     * @return monnaies
     */
    get monnaies () {
        return this._monnaies
    }

    /**
     * Permet d'accèder à la propriété lienImage du pays
     * @return lienImage
     */
    get lienImage () {
        return this._lienImage
    }

    /**
     * Permet d'accèder à la propriété domain du pays
     * @return domain
     */
    get domain () {
        return this._domain
    }
    
    /**
     * Permet de donner la population diviser par la superficie
     * @returns La densité de population
     */
    getPopDensity(){
        return this._population / parseFloat(this._superficie)
    }

    /**
     * Permet d'ajouter les objets Country des pays voisins
     * @returns la liste des pays voisins 
     */
    getBorders() {
        let listePaysVoisins = []
        if (this._paysVoisins != undefined) {
            this._paysVoisins.forEach(element => {
                // Ajout dans le tableau des objets Country correpondant au codeAlpha3
                listePaysVoisins.push(Country.all_countries[element])
            })
        }
        return listePaysVoisins
    }

    /**
     * Permet de donner toutes les monnaies utilisées par le pays
     * @returns les monnaies du pays sous forme d'objets Currency
     */
    getCurrencies() {
        //Avec les objects currency
        return this._monnaies
    }

    /**
     * Permet de donner toutes les langues parlées dans le pays
     * @returns les langues du pays sous la forme d'objet Language
     */
    getLanguages() {
        //Avec les objects languages
        return this._langages
    }

    /**
     * Permet de donner la traduction en français des code des pays
     * @returns le nom des pays en français des voisins du pays 
     */
    get paysVoisinsTraduits () {
        let paysVoisinsTraduits = []
        
        // Récupération des code des pays voisins 
        const voisins = this.getBorders()
        
        //Vérification si la liste des voisins est nulle
        if (voisins.length == 0) {
            paysVoisinsTraduits.push('Aucuns pays voisins')
        } else {
            // Ajout dans le tableau le nomFrançais des pays voisins
            voisins.forEach((element) => {
                paysVoisinsTraduits.push(element.nomFrancais)
            })
        }
        return paysVoisinsTraduits
    }
    
    /**
     * Permet d'afficher un pays avec les indications fournies
     * @returns Une chaine avec le codeAlpha3, nomFrancais, capitale, continent, population, paysVoisins
     */
    toString() {
        return` ${this._codeAlpha3}, ${this._nomFrancais}, ${this._capitale}, ${this._continent}, ${this._population} hab, ( ${this.paysVoisinsTraduits} ) `
    }
}

function fill_countries() {

    countries.forEach(element => {

        // Enregistrement de la clé du pays trouvé
        let key = element["alpha3Code"]

        // Déclaration des variables pour stocker les différentes informations trouvées et test pour savoir si elles sont définies
        let nomFrancais = element["translations"]["fr"] ? element["translations"]["fr"] : undefined
        let capital = element["capital"] ? element["capital"] : undefined
        let region = element["region"] ? element["region"] : undefined
        let population = element["population"] ? element["population"] : undefined
        let borders = element["borders"] ? element["borders"] : undefined
        let area = element["area"] ? element["area"] : undefined
        let langages = element["languages"] ? element["languages"] : undefined
        let currencies = element["currencies"] ? element["currencies"] : undefined
        let lienImage = element["flags"]["svg"] ? element["flags"]["svg"] : undefined
        let domaine = element["topLevelDomain"] ? element["topLevelDomain"] : undefined

        // Création du pays avec l'ensemble des valeurs nécessaires
        let pays = new Country(key,
            nomFrancais,
            capital,
            region,
            population,
            borders,
            area,
            langages,
            currencies, 
            lienImage,
            domaine
        )

        // Ajout du pays dans la variable de classe avec comme clé alpha3Code
        Country.all_countries[key] = pays
    })
}

// Appel de la fonction permettant d'initialiser le tableau avec le fichier JSON comportant les pays
fill_countries()

console.log(Country.all_countries["GRL"].toString())