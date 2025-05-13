import { useFormContext } from "react-hook-form";
import { StepTwoFormData } from "../../validations/digitalTransformationSchema";
import { options } from "../../constants/questions";
import OptionsBox from "../OptionsBox";

function StepTwo() {
  const { control } = useFormContext<{
    stepTwo: StepTwoFormData;
  }>();

  return (
    <div className="flex flex-col space-y-14">
      <div className="space-y-4">
        <h2 className="font-bold">
          6. ¿Qué tipo de informes utiliza tu organización para la toma de decisiones?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q6}
          stepActualLevel="stepTwo.q6ActualLevel"
          stepTargetLevel="stepTwo.q6TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">
          7. ¿Cómo se recolectan y analizan los datos en tu organización?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q7}
          stepActualLevel="stepTwo.q7ActualLevel"
          stepTargetLevel="stepTwo.q7TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">
          8. ¿Cuál es el nivel de accesibilidad a los datos en tu organización?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q8}
          stepActualLevel="stepTwo.q8ActualLevel"
          stepTargetLevel="stepTwo.q8TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">9. ¿Qué tan avanzadas son las capacidades de análisis de datos de tu organización?</h2>
        <OptionsBox
          control={control}
          optionsList={options.q9}
          stepActualLevel="stepTwo.q9ActualLevel"
          stepTargetLevel="stepTwo.q9TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">
          10. ¿Cómo se utilizan los datos para apoyar la estrategia de la organización?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q10}
          stepActualLevel="stepTwo.q10ActualLevel"
          stepTargetLevel="stepTwo.q10TargetLevel"
        />
      </div>
    </div>
  );
}

export default StepTwo;
