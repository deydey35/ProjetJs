class Country {
    constructor (codeAlpha3, nomFrancais, capitale, continent, population, paysVoisins){
        this._codeAlpha3 = codeAlpha3
        this._nomFrancais = nomFrancais
        this._capitale = capitale
        this._continent = continent
        this._population = population
        this._paysVoisin = paysVoisins
        this._allCountries = []
    }

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
        return this.paysVoisins
    }

    toString() {
        return this._codeAlpha3 +', '+ this._nomFrancais +', '+ this._capitale +', '+ this._continent +', '+ this._population + 'hab, (' + this._paysVoisin + ')'
    }
}