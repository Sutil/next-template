"use client";
import TextInput from "@/components/custom/text-input";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
          <Button className="w-full" type="submit">
            Entrar
          </Button>
        </div>
      </form>
    </Form>
  );
}
