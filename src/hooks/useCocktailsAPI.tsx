// Cocktails API

const useCocktailsAPI = async (url: string) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch cocktails.');
    }
};

export default useCocktailsAPI;