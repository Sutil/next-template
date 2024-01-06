"use client";
import TextInput from "@/components/custom/text-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { signIn } from "@/lib/firebase/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { UseFormReturn, useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  username: z.string().email("E-mail inválido"),
  password: z.string().min(1, "Informe sua senha"),
});

export default function Login() {
  const form: UseFormReturn<any> = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onTouched",
  });

  const { toast } = useToast();

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { username, password } = values;
    signIn(username, password).catch(() => {
      toast({
        title: "Falha ao fazer login",
        description:
          "Verifique se seu usuário e senha estão corretos ou clique em 'Esqueci a senha'",
        variant: "destructive",
      });
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
        <TextInput
          type="password"
          form={form}
          placeholder="Senha"
          label="Senha"
          name="password"
        />
        <div className="w-full">
          <Button
            className="w-full"
            type="submit"
            disabled={!form.formState.isValid}
          >
            Entrar
          </Button>
        </div>
      </form>
      <footer className="flex justify-between mt-10">
        <Link href="/auth/create-account">Criar conta</Link>
        <Link href="/auth/forgot-password">Esqueci a senha</Link>
      </footer>
    </Form>
  );
}
