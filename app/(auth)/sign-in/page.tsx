import { SignIn } from "./sign-in"
import { authenticate } from "@/lib/auth/actions"

const Page = () => {

    return <SignIn signIn={async (formData: FormData) => {
        "use server"
        await authenticate(undefined, formData)
    }} />
}

export default Page