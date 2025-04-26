"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

function index() {
  const form = useForm();

  console.log(form.watch());

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Recuperar Contraseña
          </CardTitle>
          <CardDescription>
            Ingresa el correo electrónico de tu cuenta y te enviaremos un correo
            con las instrucciones para reestablecer tu contraseña
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Form {...form}>
              <form action="">
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>

                  <FormField
                    name=""
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            id="email"
                            type="email"
                            placeholder="example@example.com"
                            required
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </form>
            </Form>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full">Enviar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default index;
