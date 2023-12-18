import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Files } from "lucide-react";
import UploadButton from "./bultins/upload-button";

const EmptyBulletin = () => {
    return (
        <MaxWidthWrapper className="flex flex-col text-center items-center justify-center min-h-screen">
            <div className="h-[200px] overflow-hidden flex items-center justify-center">
                <iframe className="w-[300px] h-[300px]" src="https://lottie.host/embed/9ef8fc44-ad25-4173-8d22-505ff8e16537/me1pM0KMsH.json"></iframe>
            </div>
            <h1 className="font-black text-xl">Ho, tu n&apos;as pas encore ajouté de bulletins.</h1>
            <p className="mb-4 text-muted-foreground">Commençons par en ajouté pour pouvoir continuer !</p>
            <UploadButton />
        </MaxWidthWrapper>
    )
}

export default function page() {

    const bulletins: string[] = []    

    if (!bulletins.length) return <EmptyBulletin />

    return (
        <MaxWidthWrapper>
            <p></p>
        </MaxWidthWrapper>
    )
}