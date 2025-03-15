class Country {

    constructor (codeAlpha3, nomFrancais, capitale, continent, population, paysVoisins, superficie, langages, monnaies){
        this._codeAlpha3 = codeAlpha3
        this._nomFrancais = nomFrancais
        this._capitale = capitale
        this._continent = continent
        this._population = population
        this._paysVoisins = paysVoisins
        this._superficie = superficie
        this._langages = langages
        this._monnaies = monnaies

    }

    static all_countries = {}

    get codeAlpha3 () {
        return this._codeAlpha3
    }

    get nomFrancais () {
        return this._nomFrancais
    }

    get capitale () {
        return this._capitale
    }

    get continent () {
        return this._continent
    }

    get population () {
        return this._population
    }

    get paysVoisins () {
        return this._paysVoisins
    }
    
    getPopDensity(){
        return this._population / parseFloat(this._superficie)
    }

    getBorders() {
        let listePaysVoisins = []
        if (this._paysVoisins != undefined) {
            this._paysVoisins.forEach(element => {
                listePaysVoisins.push(Country.all_countries[element])
            })
        }
        return listePaysVoisins
    }

    getCurrencies() {
        //Avec les objects currency
        return this._monnaies
    }

    getLanguages() {
        //Avec les objects languages
        return this._langages
    }

    get paysVoisinsTraduits () {
        let paysVoisinsTraduits = []
        const voisins = this.getBorders()
        if (voisins.length == 0) {
            paysVoisinsTraduits.push('Aucuns pays voisins')
        } else {
            voisins.forEach((element) => {
                paysVoisinsTraduits.push(element.nomFrancais)
            })
        }
        return paysVoisinsTraduits
    }
    
    toString() {
        return`${this._codeAlpha3}, ${this._nomFrancais}, ${this._capitale}, ${this._continent}, ${this._population} hab, ( ${this.paysVoisinsTraduits} )`
    }
}

function fill_countries() {

    countries.forEach(element => {

        // Enregistrement de la clé du pays trouvé
        let key = element["alpha3Code"]

        // Déclaration des variables pour stocker les différentes informations trouvées
        let nomFrancais = ""
        let capital = ""
        let region = ""
        let population = ""
        let borders = []
        let area = -1.0
        let languages = []
        let currencies = []

        // Test pour le nom français
        if (element["translations"]["fr"] == undefined) {
            nomFrancais = undefined
        } else {
            nomFrancais = element["translations"]["fr"]
        }

        if (element["capital"] == undefined) {
            capital = undefined
        } else {
            capital = element["capital"]
        }

        if (element["region"] == undefined) {
            region = undefined
        } else {
            region = element["region"]
        }

        if (element["population"] == undefined) {
            population = undefined
        } else {
            population = element["population"]
        }

        if (element["borders"] == undefined) {
            borders = undefined
        } else {
            borders = element["borders"]
        }

        if (element["area"] == undefined) {
            area = undefined
        } else {
            area = element["area"]
        }

        if (element["languages"] == undefined) {
            languages = undefined
        } else {
            languages = element["languages"]
        }

        if (element["currencies"] == undefined) {
            currencies = undefined
        } else {
            currencies = element["currencies"]
        }

        let pays = new Country(key,
            nomFrancais,
            capital,
            region,
            population,
            borders,
            area,
            languages,
            currencies
        )

        Country.all_countries[key] = pays
    })
}

fill_countries()

console.log(Country.all_countries["GBR"].toString())

