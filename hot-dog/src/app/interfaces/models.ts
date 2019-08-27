export interface Ingradient {
    exist: boolean;
    price: number;
}
export interface Ingradients {
    ketchup: Ingradient;
    sausage: Ingradient;
    roll: Ingradient;
    bavarianSausage: Ingradient;
    mustard: Ingradient;
    mayonnaise: Ingradient;
}

export interface Product {
    id: number;
    ingradients: Ingradients;
}
