interface DictionaryEntry {
    homePage_Header: string
    homePage_Content: string
    aboutPage_Header: string
    aboutPage_Content: string
}

export const dictionary: Record<string, DictionaryEntry> = {
    en: {
        homePage_Header: "Home",
        homePage_Content: "Welcome to my home.",
        aboutPage_Header: "About Me",
        aboutPage_Content: "Here is some information about me. English is my primary language."
    },
    es: {
        homePage_Header: "Casa",
        homePage_Content: "Beinvenidos a mi casa.",
        aboutPage_Header: "Sobre Yo",
        aboutPage_Content: "Aqui tenemos un poco informacion sobre yo. Hablo espanol tambien."
    },
    id: {
        homePage_Header: "Rumah",
        homePage_Content: "Selamat datang di rumah saya.",
        aboutPage_Header: "Tentang Saya",
        aboutPage_Content: "Berikut adalah beberapa informasi tentang saya. Bahasa Inggris adalah bahasa utama saya."
    }
}