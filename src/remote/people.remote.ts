import { internalAxios } from './internal-axios'


export const getAllPeople = async () => {
    const response = await internalAxios.get('/people');
    console.log(response);
}