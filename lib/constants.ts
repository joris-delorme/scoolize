export const schools: ISchool[] = [
    {
        name: "Faculté de Médecine Lyon Est",
        addresse: "8 Av. Rockefeller, 69003 Lyon",
        website: "http://lyon-est.univ-lyon1.fr/",
        phone: "0478777000",
        lat: 45.74322282120611,
        long: 4.8820244402093245,
        notes: [
            {
                anglais: 12,
                svt: 16
            }
        ],
        diplome: ["Doctorat en Médecine", "Doctorat en Chirurgie Dentaire", "Doctorat en Pharmacie"]
    },
    {
        name: "Faculté de médecine rue Nungesser",
        addresse: "Rue Nungesser et Coli, 69008 Lyon",
        website: "http://lyon-est.univ-lyon1.fr/",
        phone: "0478777000",
        lat: 45.74343260687539,
        long: 4.879619585525406,
        notes: [
            {
                anglais: 14,
                svt: 15
            }
        ],
        diplome: ["Licence en Sciences Infirmières", "Master en Santé Publique"]
    },
    {
        name: "Faculté de médecine Laënnec",
        addresse: "58 Av. Rockefeller, 69008 Lyon",
        website: "http://lyon-est.univ-lyon1.fr/",
        phone: "0478777000",
        lat: 45.74322282120611,
        long: 4.8820244402093245,
        notes: [
            {
                svt: 14
            }
        ],
        diplome: ["Licence en Technologie Médicale", "Master en Conseil Génétique"]
    },
    {
        name: "Faculté de Médecine et de Maïeutique Lyon Sud - Charles Mérieux",
        addresse: "165 Chem. du Petit Revoyet, 69921 Oullins",
        website: "http://lyon-est.univ-lyon1.fr/",
        phone: "0478777000",
        lat: 45.70795994897243,
        long: 4.810318581381457,
        notes: [
            {
                anglais: 12,
                svt: 16
            }
        ],
        diplome: ["Doctorat en Médecine", "Doctorat en Chirurgie Dentaire", "Doctorat en Pharmacie"]
    }
]

export const diplomes = ["Doctorat en Médecine", "Doctorat en Chirurgie Dentaire", "Licence en Sciences Infirmières", "Doctorat en Pharmacie", "Master en Santé Publique", "Doctorat en Médecine Vétérinaire", "Doctorat en Physiothérapie", "Master en Sciences Biomédicales", "Licence en Technologie Médicale", "Master en Conseil Génétique"]

export const bulletins = [
    // Première année, Premier trimestre
    {
        year: 2021,
        trimestre: 1,
        notes: {
            francais: 13.5,
            maths: 14.2,
            anglais: 15.1,
            sport: 16.3,
            pc: 12.0
        }
    },
    // Première année, Deuxième trimestre
    {
        year: 2021,
        trimestre: 2,
        notes: {
            francais: 12.8,
            maths: 15.4,
            anglais: 14.7,
            sport: 17.0,
            pc: 13.2
        }
    },
    // Première année, Troisième trimestre
    {
        year: 2021,
        trimestre: 3,
        notes: {
            francais: 14.1,
            maths: 15.0,
            anglais: 15.3,
            sport: 16.8,
            pc: 14.5
        }
    },
    // Seconde année, Premier trimestre
    {
        year: 2022,
        trimestre: 1,
        notes: {
            francais: 13.3,
            maths: 14.8,
            anglais: 15.0,
            sport: 15.5,
            pc: 13.7,
            histoire: 14.2
        }
    },
    // Seconde année, Deuxième trimestre
    {
        year: 2022,
        trimestre: 2,
        notes: {
            francais: 14.0,
            maths: 16.2,
            anglais: 15.6,
            sport: 16.1,
            pc: 14.4,
            histoire: 13.9
        }
    },
    // Seconde année, Troisième trimestre
    {
        year: 2022,
        trimestre: 3,
        notes: {
            francais: 15.2,
            maths: 16.5,
            anglais: 16.0,
            sport: 17.2,
            pc: 15.0,
            histoire: 14.7
        }
    },
    // Terminale, Premier trimestre
    {
        year: 2023,
        trimestre: 1,
        notes: {
            francais: 14.5,
            maths: 17.0,
            anglais: 16.4,
            sport: 16.5,
            pc: 15.5,
            histoire: 14.9,
            philosophie: 13.8
        }
    },
    // Terminale, Deuxième trimestre
    {
        year: 2023,
        trimestre: 2,
        notes: {
            francais: 14.7,
            maths: 17.3,
            anglais: 16.7,
            sport: 16.8,
            pc: 16.0,
            histoire: 15.3,
            philosophie: 14.2
        }
    },
]