import axios from 'axios';

const baseURL = '/songs';

export const fetchSongs = async (): Promise<Song[]> => {
    const results = await axios.get(baseURL);
    return results.data.map((song: Song): Song => ({
        ...song,
        like: true
    }));
};

export const likeSong = async (body: Song): Promise<void> => {
    return await axios.post(baseURL, body);
}

export const disLike = async (id: string): Promise<void> => {
    return await axios.delete(`${baseURL}/${id}`);
}