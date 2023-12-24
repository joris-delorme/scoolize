import { UserForm } from "./sign-up"
import { authenticate } from "@/lib/auth/actions"

export default async function page() {


    return <UserForm signIn={async (formData: FormData) => {
        "use server"
        await authenticate(undefined, formData)
      }} />
}
