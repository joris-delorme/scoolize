import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap, Link2, Phone } from "lucide-react";

export function SchoolCard({ school }: { school: ISchool }) {
    return (
        <Link href={`/dashboard/map?lat=${school.lat}&long=${school.long}`}>
            <Card>
                <CardHeader>
                    <CardTitle>{school.name}</CardTitle>
                    <CardDescription>{school.addresse}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <p>{school.phone}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link2 className="h-4 w-4" />
                        <p>{school.website}</p>
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2">
                            <GraduationCap className="h-4 w-4" />
                            <p>Diplomes:</p>
                        </div>
                        <ul>{ school.diplome.map((diplome, key) => <p className="text-sm" key={key}>{diplome}</p>) }</ul>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}