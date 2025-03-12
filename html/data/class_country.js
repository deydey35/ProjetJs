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
        return this.paysVoisinsTraduits()
    }

    getBorders() {
        let listePaysVoisins = []
        this._paysVoisins.forEach(element => {
            listePaysVoisins.push(Country.all_countries[element])
        })
        console.log(listePaysVoisins)
    }

    getPopDensity(){
        return this._population / parseFloat(this._superficie)
    }

    getCurrencies() {
        return this._monnaies
    }
    paysVoisinsTraduits () {
        let paysVoisinsTraduits = []
        this._paysVoisins.forEach((element,index) => {
            console.log(index);
            
            if (index == this._paysVoisins.lenght) {
                paysVoisinsTraduits.push(Country.all_countries[element].nomFrancais)
                    
            }else{
                paysVoisinsTraduits.push(Country.all_countries[element].nomFrancais + ', ')
            }
        })
        return paysVoisinsTraduits
    }

    getLanguages() {
        return this._langages
    }
    
    get paysVoisinsTraduits () {
        let paysVoisinsTraduits = []
        if (this._paysVoisins.length === 0){
            paysVoisinsTraduits.push('Aucuns pays voisins')
        }else{
            this._paysVoisins.forEach((element) => {
                paysVoisinsTraduits.push(Country.all_countries[element].nomFrancais)
            })
        }
        return paysVoisinsTraduits
    }
    
    toString() {
        return`${this._codeAlpha3}, ${this._nomFrancais}, ${this._capitale}, ${this._continent}, ${this._population} hab, ( ${this.paysVoisinsTraduits} )`
    }

    static fill_countries(countries) {
        countries.forEach(element => {
            let key = element["alpha3Code"]
            Country.all_countries[key] = new Country(key, 
                element["translations"]["fr"],
                element["capital"],
                element["subregion"],
                element["population"],
                element["borders"],
                element["area"], 
                element["languages"],
                element["currencies"],
                element["borders"]
            )
        })
    }
}


