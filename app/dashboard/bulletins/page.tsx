import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { bulletins } from "@/lib/constants";

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