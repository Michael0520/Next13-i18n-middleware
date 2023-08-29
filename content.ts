interface DictionaryEntry {
    homeHeader: string
    homeContent: string
    aboutHeader: string
    aboutContent: string
}

export const dictionary: Record<string, DictionaryEntry> = {
    en: {
        homeHeader: "Home",
        homeContent: "Welcome to my home.",
        aboutHeader: "About",
        aboutContent: "This is the about page.",
    },
    es: {
        homeHeader: "Casa",
        homeContent: "Beinvenidos a mi casa.",
        aboutHeader: "Acerca de",
        aboutContent: "Esta es la página sobre nosotros.",
    },
    id: {
        homeHeader: "Rumah",
        homeContent: "Selamat datang di rumah saya.",
        aboutHeader: "Tentang",
        aboutContent: "Ini adalah halaman tentang kami.",
    }
}
