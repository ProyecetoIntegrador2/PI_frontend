import { useFormContext } from "react-hook-form";
import { StepOneFormData } from "../../validations/digitalTransformationSchema";
import { options } from "../../constants/questions";
import OptionsBox from "../OptionsBox";

function StepOne() {
  const { control } = useFormContext<{
    stepOne: StepOneFormData;
  }>();

  return (
    <div className="flex flex-col space-y-14">
      <div className="space-y-4">
        <h2 className="font-bold">
          1. ¿Cómo describirías la planificación de tecnología de información en
          tu organización?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q1}
          stepActualLevel="stepOne.q1ActualLevel"
          stepTargetLevel="stepOne.q1TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">
          2. ¿Cómo se priorizan las inversiones en TI en tu organización?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q2}
          stepActualLevel="stepOne.q2ActualLevel"
          stepTargetLevel="stepOne.q2TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">
          3. ¿Qué papel juega TI en la estrategia organizacional?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q3}
          stepActualLevel="stepOne.q3ActualLevel"
          stepTargetLevel="stepOne.q3TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">4. ¿Cómo se gestionan los recursos de TI?</h2>
        <OptionsBox
          control={control}
          optionsList={options.q4}
          stepActualLevel="stepOne.q4ActualLevel"
          stepTargetLevel="stepOne.q4TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">
          5. ¿Cuál es la visión a largo plazo de TI en tu organización?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q5}
          stepActualLevel="stepOne.q5ActualLevel"
          stepTargetLevel="stepOne.q5TargetLevel"
        />
      </div>
    </div>
  );
}

export default StepOne;
