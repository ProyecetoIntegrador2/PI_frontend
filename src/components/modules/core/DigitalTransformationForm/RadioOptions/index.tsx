import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Control, FieldPath, FieldValues } from "react-hook-form";
import { useState } from "react";

interface IndexProps<T extends FieldValues> {
  control: Control<T>;
  stepActualLevel: FieldPath<T>;
  optionsList: string[];
  enableCustomOption?: boolean;
  returnOptionValueAsString?: boolean; // <-- Nueva prop
}

function Index<T extends FieldValues>({
  control,
  stepActualLevel,
  optionsList,
  enableCustomOption = false,
  returnOptionValueAsString = false, // <-- Valor por defecto
}: IndexProps<T>) {
  const [customOption, setCustomOption] = useState("");

  return (
    <div className="bg-gray-100/70 p-6 rounded-xl shadow-sm space-y-4">
      <FormField
        control={control}
        name={stepActualLevel}
        render={({ field }) => (
          <FormItem className="space-y-4">
            <div className="flex flex-col gap-2">
              {optionsList.map((option, index) => {
                const value = returnOptionValueAsString ? option : index + 1;
                return (
                  <label key={index} className="flex items-center space-x-2">
                    <FormControl>
                      <input
                        type="radio"
                        name={field.name}
                        value={value}
                        checked={field.value === value}
                        onChange={() => field.onChange(value)}
                        className="h-4 w-4 text-slate-900 accent-slate-900 focus:ring-slate-700"
                      />
                    </FormControl>
                    <span className="text-slate-700 text-sm">{option}</span>
                  </label>
                );
              })}

              {enableCustomOption && (
                <label className="flex items-center space-x-2">
                  <FormControl>
                    <input
                      type="radio"
                      name={field.name}
                      value="custom"
                      checked={field.value === customOption}
                      onChange={() => field.onChange(customOption)}
                      className="h-4 w-4 text-slate-900 accent-slate-900 focus:ring-slate-700"
                    />
                  </FormControl>
                  <input
                    type="text"
                    placeholder="Otra opción..."
                    value={customOption}
                    onChange={(e) => {
                      const newValue = e.target.value;
                      setCustomOption(newValue);
                      field.onChange(newValue);
                    }}
                    className="border border-gray-300 rounded px-2 py-1 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-700"
                  />
                </label>
              )}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
export default Index;