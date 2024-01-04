"use client";
import TextInput from "@/components/custom/text-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { createAccount } from "@/lib/firebase/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UseFormReturn, useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z
  .object({
    username: z.string().email("E-mail inválido"),
    password: z.string().min(6, "Crie uma senha com pelo menos 6 caracteres."),
    confirmPassword: z.string(),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    console.log("test", password, confirmPassword);
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "Parece que você digitou uma senha diferente",
      });
    }
  });

export default function CreateAccount() {
  const router = useRouter();
  const form: UseFormReturn<any> = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onTouched",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { username, password } = values;
    createAccount(username, password)
      .then(() => {
        router.push("/main");
      })
      .catch(() => {});
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
        <TextInput
          type="password"
          form={form}
          placeholder="Confirme sua senha"
          label="Confirmação de senha"
          name="confirmPassword"
        />
        <div className="w-full">
          <Button
            className="w-full"
            type="submit"
            disabled={!form.formState.isValid}
          >
            Criar conta
          </Button>
        </div>
      </form>
      <footer className="flex justify-center mt-10">
        <Link href="/auth/login">voltar ao login</Link>
      </footer>
    </Form>
  );
}
