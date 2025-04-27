import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { Control, FieldPath, FieldValues } from "react-hook-form";

interface IndexProps<T extends FieldValues> {
  control: Control<T>;
  stepActualLevel: FieldPath<T>;
  stepTargetLevel: FieldPath<T>;
  optionsList: string[];
}

function index<T extends FieldValues>({
  control,
  stepActualLevel,
  stepTargetLevel,
  optionsList,
}: IndexProps<T>) {
  return (
    <div className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0 bg-gray-100/70 p-6 rounded-xl shadow-sm">
      <FormField
        control={control}
        name={stepActualLevel}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nivel Actual:</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={String(field.value)}
                className="grid grid-cols-2 gap-4"
              >
                {optionsList.map((text, index) => (
                  <div
                    key={index}
                    className={cn(
                      "border rounded-xl p-4 text-center cursor-pointer transition-all font-medium",
                      field.value === index + 1
                        ? "bg-slate-900 text-white border-slate-700 dark:bg-slate-800 dark:border-slate-600"
                        : "border-slate-300 text-slate-700 hover:border-slate-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-500"
                    )}
                    onClick={() => field.onChange(index + 1)}
                  >
                    {text}
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={stepTargetLevel}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nivel Deseado:</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={String(field.value)}
                className="grid grid-cols-2 gap-4"
              >
                {optionsList.map((text, index) => (
                  <div
                    key={index}
                    className={cn(
                      "border rounded-xl p-4 text-center cursor-pointer transition-all font-medium",
                      field.value === index + 1
                        ? "bg-slate-900 text-white border-slate-700 dark:bg-slate-800 dark:border-slate-600"
                        : "border-slate-300 text-slate-700 hover:border-slate-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-500"
                    )}
                    onClick={() => field.onChange(index + 1)}
                  >
                    {text}
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

export default index;
