import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const bulletins = [
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
];

type Note = {
    [matiere: string]: number;
};

function calculerMoyennesGenerales(notes: any) {
    //@ts-ignore
    const somme = Object.values(notes).reduce((acc, note) => acc + note, 0);
    //@ts-ignore
    const moyenne = somme / Object.keys(notes).length
    return moyenne.toFixed(2)
}

export default function page() {
    return (
        <section className="my-24 px-6 max-w-3xl mx-auto">
            <h1 className="text-3xl max-w-md font-black">Tu as une moyenne total de <span className="underline">15,34</span>.</h1>
            <div className="flex gap-4 flex-wrap mt-10">
                {
                    bulletins.map((bulletin, key) => (
                        <Card key={key} className="max-w-[300px]">
                            <CardHeader>
                                <CardTitle>{bulletin.year}, {bulletin.trimestre} trimèstre</CardTitle>
                                <CardDescription>Votre moyenne générale pour ce trimestre est de {calculerMoyennesGenerales(bulletin.notes)}.</CardDescription>
                            </CardHeader>
                        </Card>
                    ))
                }
            </div>
        </section>
    )
}