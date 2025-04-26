import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { StepOneFormData } from "../../validations/registerSchema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

function StepOne() {
  const { control } = useFormContext<{ stepOne: StepOneFormData }>();

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="stepOne.name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nombre</FormLabel>
            <FormControl>
              <Input placeholder="Juan Felipe" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="stepOne.lastName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Apellido</FormLabel>
            <FormControl>
              <Input placeholder="Pérez" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="stepOne.email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="m@example.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="stepOne.jobTitle"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Cargo</FormLabel>
            <FormControl>
              <Input placeholder="Desarrollador Frontend" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="stepOne.yearsOfExperience"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Años de experiencia</FormLabel>
            <FormControl>
              <Input
                type="number"
                min="0"
                placeholder="3"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

export default StepOne;
