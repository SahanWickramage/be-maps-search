import { getPlaceAutocomplete } from './maps-api'
import { AutoCompleteDetail } from './type/maps-api';
import { replaceSpace } from './util/string-util';

export async function getAutoCompleteDetails(address: string): Promise<AutoCompleteDetail[]> {
    const apiKey = process.env.TOMTOM_API_KEY;
    const transformedAddress = replaceSpace(address);
    // get autocomplete results
    const res = await getPlaceAutocomplete(apiKey!, transformedAddress);
    // loop over and get details and map results
    return res.map((result) => ({
        placeId: result?.id,
        ...result?.address,
        streetNumber: result?.address?.streetNumber, // some responses don't have 'streetNumber'
    }));
}
