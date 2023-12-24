"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { api } from "@/trpc/react"
import { toast } from "sonner"

const formSchema = z.object({
    first_name: z.string().min(1, {
        message: "Veillez entrer votre prénom."
    }).max(30, {
        message: "Votre prénom ne peut pas avoir plus de 30 caractère."
    }),
    last_name: z.string().min(1, {
        message: "Veillez entrer votre nom."
    }).max(30, {
        message: "Votre nom ne peut pas avoir plus de 30 caractère."
    }),
    email: z.string().min(1, {
        message: "Veillez entrer votre adresse mail."
    }).email("Veillez entrer une adresse mail valide."),
    password: z.string().min(1, {
        message: "Veillez entrer votre mot de passe."
    }).min(8, {
        message: "Votre mot de passe doit contenir au minimum 8 caractère."
    })
})

export function UserForm({ signIn }: { signIn: (formData: FormData) => void }) {

    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })

    //const signUp = api.auth.signUp.useMutation()
    const signUp = () => {}

    const handler = async (values: z.infer<typeof formSchema>) => {
        /*
        await signUp.mutateAsync({
            ...values
        })
*/
        const formData = new FormData()
        formData.append("email", values.email)
        formData.append("password", values.password)
        signIn(formData)
    }

    async function onSubmit(values: z.infer<typeof formSchema>) {
        toast.promise(handler(values), {
            loading: "Inscription...",
            success: () => {
                router.refresh()
                return "Bienvenu chez DYCALL 🎉"
            },
            error: (error) => `Une erreur c'est produite: ${error}`,
        })
    }

    return (
        <div className="h-screen flex items-center justify-center relative">
            <div className="p-8 sm:relative">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto grid space-y-8 w-[300px] sm:w-[350px]">
                        <div className="flex flex-col text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">Créer un compte</h1>
                            <p className="text-sm text-muted-foreground">Entrez vos inforamtions en dessous.</p>
                        </div>
                        <div className="space-y-2">
                            <FormField
                                control={form.control}
                                name="first_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Votre prénom.</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Dupont" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="last_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Votre nom.</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Dupond" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Votre meilleur adresse mail.</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="nom@exemple.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Votre mot de passe.</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="monmotdepasse*" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button className="flex gap-2" type="submit" disabled={!form.formState.isValid || signUp.isLoading}>S&apos;inscrire</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}
