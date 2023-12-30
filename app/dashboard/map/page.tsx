"use client"
import { MapComponent } from "@/components/map";
import { useEffect, useRef, useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { GraduationCap, Link2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function page() {

    const [selectedSchool, setSelectedSchool] = useState<ISchool | undefined>()
    const ref = useRef<HTMLButtonElement>(null)
    useEffect(() => {
        if (selectedSchool && ref.current) ref.current.click()
    }, [selectedSchool])

    return (
        <section>
            <MapComponent selectedSchool={selectedSchool} setSelectedSchool={(school: ISchool) => setSelectedSchool(school)} />
            <Sheet onOpenChange={(open) => { if(!open) setSelectedSchool(undefined) }}>
                <SheetTrigger ref={ref}>Open</SheetTrigger>
                <SheetContent className="pt-20">
                    <SheetHeader>
                        <SheetTitle>{selectedSchool?.name}</SheetTitle>
                        <SheetDescription>
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <p>{selectedSchool?.phone}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Link2 className="h-4 w-4" />
                                <p>{selectedSchool?.website}</p>
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center gap-2">
                                    <GraduationCap className="h-4 w-4" />
                                    <p>Diplomes:</p>
                                </div>
                                <ul>{selectedSchool?.diplome.map((diplome, key) => <p className="text-sm" key={key}>{diplome}</p>)}</ul>
                            </div>
                            <Button className="w-full mt-10">Ajouter aux favoris</Button>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </section>
    )
}