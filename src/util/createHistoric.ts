import historicModel from "../models/historic.ts";
import formatDate from "./formatDate.ts";

interface Historic {
    description: string;
    author: string;
}
const formatMessage = (message: string): string => {
    const parts = message.split('%'); 
    let formattedMessage = [];
    for (let i = 0; i < parts.length; i++) {
        const isDate = /^\d{13}$/.test(parts[i]);
        formattedMessage.push(isDate ? formatDate(new Date(Number(parts[i])) as any) : parts[i]);
    }
    return formattedMessage.join('');
}


const createHistoric = async ({ description, author }: Historic): Promise<void> => {
    try {
        const formattedDescription = formatMessage(description);
        console.log(formattedDescription)

        const historic = new historicModel({
            description: formattedDescription,
            author
        });

        await historic.save();
    } catch (error) {
        console.log(error);
    }
}


export default createHistoric;
