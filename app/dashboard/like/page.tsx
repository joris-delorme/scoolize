import { SchoolCard } from "@/components/school-crad";
import { schools } from "@/lib/constants";

export default function page() {
    return (
        <section className="sm:px-20 px-6 pt-32 pb-20">
            <h1 className="text-3xl font-black">Les écoles que tu préféres 🎓</h1>
            <div className="flex flex-wrap gap-2 pt-20">
                { [schools[1], schools[2]].map((school, key) => <SchoolCard key={key} school={school} />) }
            </div>
        </section>
    )
}