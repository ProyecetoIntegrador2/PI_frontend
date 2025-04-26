import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { StepTwoFormData } from "../../validations/registerSchema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

function StepTwo() {
  const { control } = useFormContext<{ stepTwo: StepTwoFormData }>();

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="stepTwo.companyName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nombre de la empresa</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="stepTwo.country"
        render={({ field }) => (
          <FormItem>
            <FormLabel>País</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="stepTwo.employeesNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Número de empleados</FormLabel>
            <FormControl>
              <Input
                type="number"
                min="1"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="stepTwo.companyType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tipo de empresa</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="stepTwo.companySector"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Sector</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

export default StepTwo;
