export type IdObject = {
	mbid: string;
};

export type Track = {
	name: string;
	url: string;
	artist: Artist;
} & IdObject;

export type Artist = {
	mbid: string;
	'#text': string;
} & IdObject;
