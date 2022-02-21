import { isDevelopment } from "../utils/utils";

const baseUrl = process.env.REACT_APP_HERMES_API
const proxy = isDevelopment ? process.env.REACT_APP_DEV_PROXY : ''

export class ApiService {
    
    public async getGroups(): Promise<any> {
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        };
        const response = await fetch(`${proxy}/${baseUrl}/groups`, requestOptions);
        return await response.json();
    }
}