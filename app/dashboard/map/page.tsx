import { MapComponent } from "@/components/map";

export default function page() {
    return (
        <section>
            <MapComponent lat={46.227638} lon={2.213749} />
        </section>
    )
}