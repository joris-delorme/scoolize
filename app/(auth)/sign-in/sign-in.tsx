"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "sonner";
import { redirect } from "next/navigation";


const formSchema = z.object({
    email: z.string().min(1, {
        message: "Veillez entrer votre adresse mail."
    }).email("Veillez entrer une adresse mail valide."),
    password: z.string().min(1, {
        message: "Veillez entrer votre mot de passe."
    }).min(8, {
        message: "Votre mot de passe doit contenir au minimum 8 caractère."
    })
})

export const SignIn = ({ signIn }: { signIn: (formData: FormData) => Promise<void> }) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })

    const handler = async (values: z.infer<typeof formSchema>) => {
        try {
            const formData = new FormData()
            formData.append("email", values.email)
            formData.append("password", values.password)
            await signIn(formData)
            redirect('/app')
            //if(!res.ok) return res.text().then(text => {throw new Error(text)})
        } catch (error) {
            return error
        }
    }

    async function onSubmit(values: z.infer<typeof formSchema>) {
        toast.promise(handler(values), {
            loading: "Connexion...",
            success: "Connecté !",
            error: (error) => `Error: ${error.message}`,
        });
    }
    return (
        <div className="h-screen flex items-center justify-center relative">
            <div className="p-8 sm:relative">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto grid space-y-8 w-[300px] sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">Connexion</h1>
                            <p className="text-sm text-muted-foreground">Entrez vos inforamtions en dessous.</p>
                        </div>
                        <div className="space-y-2">
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

                        <Button className="flex gap-2" type="submit" >Connexion</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}
