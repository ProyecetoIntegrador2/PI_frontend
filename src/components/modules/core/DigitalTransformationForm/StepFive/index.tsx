import { useFormContext } from "react-hook-form";
import { StepFiveFormData } from "../../validations/digitalTransformationSchema";
import { options } from "../../constants/questions";
import OptionsBox from "../OptionsBox";

function StepFive() {
  const { control } = useFormContext<{
    stepFive: StepFiveFormData;
  }>();

  return (
    <div className="flex flex-col space-y-14">
      <div className="space-y-4">
        <h2 className="font-bold">
          21. ¿Cómo se evalúa la experiencia del usuario en los servicios digitales ofrecidos?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q21}
          stepActualLevel="stepFive.q21ActualLevel"
          stepTargetLevel="stepFive.q21TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">
          22. ¿Qué enfoque se tiene hacia el diseño de la experiencia del usuario?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q22}
          stepActualLevel="stepFive.q22ActualLevel"
          stepTargetLevel="stepFive.q22TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">
          23. ¿Cómo se integra la retroalimentación del usuario en el desarrollo de productos y servicios?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q23}
          stepActualLevel="stepFive.q23ActualLevel"
          stepTargetLevel="stepFive.q23TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">24. ¿Cómo se gestionan las expectativas de los usuarios en relación con la tecnología y servicios ofrecidos?</h2>
        <OptionsBox
          control={control}
          optionsList={options.q24}
          stepActualLevel="stepFive.q24ActualLevel"
          stepTargetLevel="stepFive.q24TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">
          25. ¿Qué importancia tiene la accesibilidad en los servicios digitales de tu organización?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q25}
          stepActualLevel="stepFive.q25ActualLevel"
          stepTargetLevel="stepFive.q25TargetLevel"
        />
      </div>
    </div>
  );
}

export default StepFive;
