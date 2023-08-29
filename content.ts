interface DictionaryEntry {
    homeHeader: string
    homeContent: string

}

export const dictionary: Record<string, DictionaryEntry> = {
    en: {
        homeHeader: "Home",
        homeContent: "Welcome to my home.",
    },
    es: {
        homeHeader: "Casa",
        homeContent: "Beinvenidos a mi casa.",
    },
    id: {
        homeHeader: "Rumah",
        homeContent: "Selamat datang di rumah saya.",
    }
}