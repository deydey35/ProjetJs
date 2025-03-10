class Currency{
    constructor(code, name, symbol){
        this.code = code;
        this.name = name;
        this.symbol = symbol;
    }

    get code(){
        return this.code;
    }

    get name(){
        return this.name;
    }

    get symbol(){
        return this.symbol;
    }

    toString(){
        return this.code + ", " + this.name + ", " + this.symbol;
    }
}

// fonction fill_currencies() cré des objets Currency et les ajoute dans le tableau all_currencies
function fill_currencies(){
    // parse json file
    let data = JSON.parse(countries.js);

}



