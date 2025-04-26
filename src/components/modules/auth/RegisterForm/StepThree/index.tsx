import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useFormContext } from "react-hook-form";
import { StepThreeFormData } from "../../validations/registerSchema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

function StepThree() {
  const { control } = useFormContext<{ stepThree: StepThreeFormData }>();

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="stepThree.password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Contraseña</FormLabel>
            <FormControl>
              <Input type="password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="stepThree.confirmPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confirmar contraseña</FormLabel>
            <FormControl>
              <Input type="password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="stepThree.terms"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-2 space-y-0">
            <FormControl>
              <Checkbox
                id="terms"
                checked={field.value}
                onCheckedChange={(checked) => field.onChange(checked)}
              />
            </FormControl>
            <div className="grid gap-1.5 leading-none">
              <FormLabel htmlFor="terms">
                Acepto los términos y condiciones
              </FormLabel>
            </div>
          </FormItem>
        )}
      />
    </div>
  );
}

export default StepThree;
