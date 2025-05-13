import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Control, FieldPath, FieldValues } from "react-hook-form";

interface IndexProps<T extends FieldValues> {
  control: Control<T>;
  stepActualLevel: FieldPath<T>;
  stepTargetLevel: FieldPath<T>;
  optionsList: string[];
}

function Index<T extends FieldValues>({
  control,
  stepActualLevel,
  stepTargetLevel,
  optionsList,
}: IndexProps<T>) {
  return (
    <div className="bg-gray-100/70 p-6 rounded-xl shadow-sm space-y-4">
      {/* Encabezado de opciones */}
      <div className="grid grid-cols-[150px_repeat(auto-fill,_minmax(120px,_1fr))] items-center gap-2 font-semibold text-sm text-slate-700">
        <div></div>
        {optionsList.map((option, index) => (
          <div key={index} className="text-center">
            {option}
          </div>
        ))}
      </div>

      {/* Nivel Actual */}
      <FormField
        control={control}
        name={stepActualLevel}
        render={({ field }) => (
          <FormItem className="grid grid-cols-[150px_repeat(auto-fill,_minmax(120px,_1fr))] items-center gap-2">
            <FormLabel className="text-slate-700">Nivel Actual:</FormLabel>
            {optionsList.map((_, index) => (
              <FormControl key={index}>
                <input
                  type="radio"
                  name={field.name}
                  checked={field.value === index + 1}
                  onChange={() => field.onChange(index + 1)}
                  className="mx-auto h-4 w-4 text-slate-900 accent-slate-900 focus:ring-slate-700 focus:outline-none"
                />
              </FormControl>
            ))}
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Nivel Deseado */}
      <FormField
        control={control}
        name={stepTargetLevel}
        render={({ field }) => (
          <FormItem className="grid grid-cols-[150px_repeat(auto-fill,_minmax(120px,_1fr))] items-center gap-2">
            <FormLabel className="text-slate-700">Nivel Deseado:</FormLabel>
            {optionsList.map((_, index) => (
              <FormControl key={index}>
                <input
                  type="radio"
                  name={field.name}
                  checked={field.value === index + 1}
                  onChange={() => field.onChange(index + 1)}
                  className="mx-auto h-4 w-4 text-slate-900 accent-slate-900 focus:ring-slate-700 focus:outline-none"
                />
              </FormControl>
            ))}
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

export default Index;
