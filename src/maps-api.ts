import axios from 'axios'
import { Result, TomTomResponse } from './type/maps-api';

// https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search
export async function getPlaceAutocomplete(key: string, address: string): Promise<Result[]> {
    const autocomplete = await axios.get<TomTomResponse>(`https://api.tomtom.com/search/2/search/${address}.json'`, {
        params: {
            key: key,
            limit: 10,
            countrySet: 'Australia',
            typeahead: true
        }
    });
    return autocomplete.data.results.map((result) => ({
        ...result
    }))
}
