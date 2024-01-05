"use client";
import TextInput from "@/components/custom/text-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { recoverPassword } from "@/lib/firebase/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UseFormReturn, useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  username: z.string().email("E-mail inválido"),
});

export default function ForgetPassword() {
  const form: UseFormReturn<any> = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
    mode: "onTouched",
  });

  const router = useRouter();
  const { toast } = useToast();

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { username } = values;
    recoverPassword(username).then(() => {
      toast({
        title: "Recuperação de senha",
        description: "Verifique seu e-mail!",
        variant: "destructive",
      });
      router.push("/auth/login");
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
        <TextInput
          type="text"
          form={form}
          placeholder="E-mail"
          label="E-mail"
          name="username"
        />
        <div className="w-full">
          <Button
            className="w-full"
            type="submit"
            disabled={!form.formState.isValid}
          >
            Recuperar senha
          </Button>
        </div>
      </form>
      <footer className="flex justify-center mt-10">
        <Link href="/auth/login">Voltar ao login</Link>
      </footer>
    </Form>
  );
}
