import { useFormContext } from "react-hook-form";
import { StepFourFormData } from "../../validations/digitalTransformationSchema";
import { options } from "../../constants/questions";
import OptionsBox from "../OptionsBox";

function StepFour() {
  const { control } = useFormContext<{
    stepFour: StepFourFormData;
  }>();

  return (
    <div className="flex flex-col space-y-14">
      <div className="space-y-4">
        <h2 className="font-bold">
          16. ¿Cómo se gestionan los procesos operativos en tu organización?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q16}
          stepActualLevel="stepFour.q16ActualLevel"
          stepTargetLevel="stepFour.q16TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">
          17. ¿Qué nivel de integración tecnológica existe en los procesos de negocio?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q17}
          stepActualLevel="stepFour.q17ActualLevel"
          stepTargetLevel="stepFour.q17TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">
          18. ¿Cómo se documentan y se mantienen los procesos en tu organización?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q18}
          stepActualLevel="stepFour.q18ActualLevel"
          stepTargetLevel="stepFour.q18TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">19. ¿Cómo responde tu organización a cambios en los procesos requeridos por nuevas necesidades de negocio?</h2>
        <OptionsBox
          control={control}
          optionsList={options.q19}
          stepActualLevel="stepFour.q19ActualLevel"
          stepTargetLevel="stepFour.q19TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">
          20. ¿Cómo se mide la eficiencia de los procesos en tu organización?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q20}
          stepActualLevel="stepFour.q20ActualLevel"
          stepTargetLevel="stepFour.q20TargetLevel"
        />
      </div>
    </div>
  );
}

export default StepFour;
