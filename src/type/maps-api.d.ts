type Summary = {
    query: string;
    queryType: string;
    queryTime: number;
    numResults: number;
    offset: number;
    totalResults: number;
    fuzzyLevel: number;
    // TODO: define type for queryIntent
};

type Address = {
    streetNumber: string;
    streetName: string;
    municipalitySubdivision: string;
    municipality: string;
    countrySecondarySubdivision: string;
    countrySubdivision: string;
    countrySubdivisionName: string;
    countrySubdivisionCode: string;
    postalCode: string;
    countryCode: string;
    country: string;
    countryCodeISO3: string;
    freeformAddress: string;
    localName: string;
};

type Position = {
    lat: number;
    lon: number;
};

type Viewport = {
    topLeftPoint: Position;
    btmRightPoint: Position;
};

type EntryPoint = {
    type: string;
    position: Position;
};

type Result = {
    type: string;
    id: string;
    score: number;
    address: Address;
    position: Position;
    viewport: Viewport;
    entryPoints: EntryPoint[];
};

type TomTomResponse = {
    summary: Summary;
    results: Result[];
};

type TomTomSearchResult = {
    id: string;
};

export type { TomTomResponse, TomTomSearchResult };