import historicModel from "../models/historic";

interface Historic {
    description: string;
    author: string;
}

const createHistoric = async ({description, author}: Historic): Promise<void> => {
    try {
        var historic = new historicModel({
            description,
            author
        })
        await historic.save();
    } catch (error) {
console.log(error)  
    }
}

export default createHistoric