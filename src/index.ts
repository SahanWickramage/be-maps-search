import { getPlaceAutocomplete } from './maps-api'
import { Address } from './type/maps-api';
import dotenv from 'dotenv';

dotenv.config();

export async function getAutoCompleteDetails(address: string): Promise<Address[]> {
    const apiKey = process.env.TOMTOM_API_KEY;
    // get autocomplete results
    const res = await getPlaceAutocomplete(apiKey!, address);
    // loop over and get details and map results
    return res.map((result) => ({
        ...result.address
    }));
}
