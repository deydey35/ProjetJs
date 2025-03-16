class Country {

    /**
     * 
     * @param {le code du pays} codeAlpha3 
     * @param {le nom français traduit du pays} frenchName 
     * @param {la capitale du pays} capitale 
     * @param {le region du pays} region 
     * @param {la population du pays} population 
     * @param {les pays voisins} borders 
     * @param {la superficie du pays} area 
     * @param {les langues parlés} laguages 
     * @param {les currencies utilisées} currencies 
     * @param {le lien menant au drapeau} linkToImage 
     * @param {l'extension de domaine utilisé} domainExtension 
     */
    constructor(codeAlpha3, frenchName, capitale, region, population, borders, area, languages, currencies, linkToImage, domainExtension) {
        this._codeAlpha3 = codeAlpha3
        this._frenchName = frenchName
        this._capitale = capitale
        this._region = region
        this._population = population
        this._borders = borders
        this._area = area
        this._languages = languages
        this._currencies = currencies
        this._linkToImage = linkToImage
        this._domainExtension = domainExtension
    }

    /**
     * Tableau statique contenant tous les pays du fichier JSON
     */
    static all_countries = {}

    /**
     * Permet d'accèder à la propriété codeAlpha3 du pays
     * @return codeAlpha3
     */
    get codeAlpha3() {
        return this._codeAlpha3
    }

    /**
     * Permet d'accèder à la propriété nomFrancais du pays
     * @return nomFrançais
     */
    get frenchName() {
        return this._frenchName
    }

    /**
     * Permet d'accèder à la propriété capitale du pays
     * @return capitale
     */
    get capitale() {
        return this._capitale
    }

    /**
     * Permet d'accèder à la propriété continent du pays
     * @return continent
     */
    get region() {
        return this._region
    }

    /**
     * Permet d'accèder à la propriété population du pays
     * @return population
     */
    get population() {
        return this._population
    }

    /**
     * Permet d'accèder à la propriété pays voisins du pays
     * @return paysVoisins
     */
    get borders() {
        return this._borders
    }

    /**
     * Permet d'accèder à la propriété superficie du pays
     * @return superficie
     */
    get area() {
        return this._area
    }

    /**
     * Permet d'accèder à la propriété langage du pays
     * @return langages
     */
    get languages() {
        return this._languages
    }

    /**
     * Permet d'accèder à la propriété monnaies du pays
     * @return monnaies
     */
    get currencies() {
        return this._currencies
    }

    /**
     * Permet d'accèder à la propriété lienImage du pays
     * @return lienImage
     */
    get linkToImage() {
        return this._linkToImage
    }

    /**
     * Permet d'accèder à la propriété domain du pays
     * @return domain
     */
    get domainExtension() {
        return this._domainExtension
    }

    /**
     * Permet de donner la population diviser par la superficie
     * @returns La densité de population
     */
    getPopDensity() {
        return this._population / parseFloat(this._area)
    }

    /**
     * Permet d'ajouter les objets Country des pays voisins
     * @returns la liste des pays voisins 
     */
    getBorders() {
        let bordersList = []
        if (this._borders != undefined) {
            this._borders.forEach(border => {
                // Ajout dans le tableau des objets Country correpondant au codeAlpha3
                bordersList.push(Country.all_countries[border])
            })
        }
        return bordersList
    }

    /**
     * Permet de donner toutes les monnaies utilisées par le pays
     * @returns les monnaies du pays sous forme d'objets Currency
     */
    get getCurrencies() {
        const currencies = []
        this._currencies.forEach(element => {
            let currency = Currency.all_currencies[element["code"]]
            currencies.push(currency)
        })
        return currencies
    }

    /**
     * Permet de donner toutes les langues parlées dans le pays
     * @returns les langues du pays sous la forme d'objet Language
     */
    getLanguages() {
        //Avec les objects languages
        return this._languages
    }

    /**
     * Permet de donner la traduction en français des code des pays
     * @returns le nom des pays en français des voisins du pays 
     */
    get traductionOfBorders() {
        let traductionOfBorders = []

        // Récupération des code des pays voisins 
        const voisins = this.getBorders()

        //Vérification si la liste des voisins est nulle
        if (voisins.length == 0) {
            traductionOfBorders.push('Aucuns pays voisins')
        } else {
            // Ajout dans le tableau le nomFrançais des pays voisins
            voisins.forEach(border => {
                traductionOfBorders.push(border.frenchName)
            })
        }
        return traductionOfBorders
    }

    /**
     * Permet d'afficher un pays avec les indications fournies
     * @returns Une chaine avec le codeAlpha3, nomFrancais, capitale, continent, population, paysVoisins
     */
    toString() {
        return ` ${this._codeAlpha3}, ${this._frenchName}, ${this._capitale}, ${this._region}, ${this._population} hab, ( ${this.traductionOfBorders} ) `
    }
}

function fill_countries() {

    countries.forEach(element => {

        // Enregistrement de la clé du pays trouvé
        let key = element["alpha3Code"]

        // Déclaration des variables pour stocker les différentes informations trouvées et test pour savoir si elles sont définies
        let frenchName = element["translations"]["fr"] ? element["translations"]["fr"] : undefined
        let capital = element["capital"] ? element["capital"] : undefined
        let region = element["region"] ? element["region"] : undefined
        let population = element["population"] ? element["population"] : undefined
        let borders = element["borders"] ? element["borders"] : undefined
        let area = element["area"] ? element["area"] : undefined
        let langages = element["languages"] ? element["languages"] : undefined
        let currencies = element["currencies"] ? element["currencies"] : undefined
        let linkToImage = element["flags"]["svg"] ? element["flags"]["svg"] : undefined
        let domainExtension = element["topLevelDomain"] ? element["topLevelDomain"] : undefined

        // Création du pays avec l'ensemble des valeurs nécessaires
        let pays = new Country(key,
            frenchName,
            capital,
            region,
            population,
            borders,
            area,
            langages,
            currencies,
            linkToImage,
            domainExtension
        )

        // Ajout du pays dans la variable de classe avec comme clé alpha3Code
        Country.all_countries[key] = pays
    })
}

// Appel de la fonction permettant d'initialiser le tableau avec le fichier JSON comportant les pays
fill_countries()