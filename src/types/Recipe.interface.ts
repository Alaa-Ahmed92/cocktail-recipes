// Cocktail Card

export interface Recipe {
    idDrink: number,
    strDrink: string,
    strInstructions: string,
    strDrinkThumb: string,
    strCategory: string,
    strAlcoholic: string,
    strGlass: string
}

export interface RecipeCardProps {
    recipe: Recipe;
}

export interface ReadMoreProps {
    text: string;
    maxChar: number;
}