import axios from 'axios';

export const searchMusic = async (query: string): Promise<any> => {
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/search';
    const headers = {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "c6c7e08e51msh4f4bc912554a897p1d68a8jsndda3de7e4c6f",
    }
    const params = {
        'q': query
    };

    const results = await (await axios.get(url, { headers, params })).data.data;
   console.log(results)
    const formattedResults = results.map((result: any) => ({
        name: result.title,
        artist: result.artist.name,
        smallImage: result.album.cover_small,
        bigImage: result.album.cover_big,
        mediumImage: result.album.cover_medium,
        preview: result.preview,
    }));
    return formattedResults; 
};