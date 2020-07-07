type OnSearch = (val: string) => void;

type Song = {
    name: string,
    artist: string,
    smallImage: string,
    bigImage: string,
    mediumImage: string,
    preview: string,
    id: string,
    like?: boolean
}

interface HookState {
    Email: string,
    Password: string,
    [key: string]: string
}

type User = {
    email: string,
    password: string
};