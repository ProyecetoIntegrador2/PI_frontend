import { useFormContext } from "react-hook-form";
import { StepSevenFormData } from "../../validations/digitalTransformationSchema";
import { options } from "../../constants/questions";
import OptionsBox from "../OptionsBox";

function StepSeven() {
  const { control } = useFormContext<{
    stepSeven: StepSevenFormData;
  }>();

  return (
    <div className="flex flex-col space-y-14">
      <div className="space-y-4">
        <h2 className="font-bold">
          31. ¿Cómo describirías la cultura digital en tu organización?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q31}
          stepActualLevel="stepSeven.q31ActualLevel"
          stepTargetLevel="stepSeven.q31TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">
          32. ¿Cómo se promueve la innovación digital en tu organización?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q32}
          stepActualLevel="stepSeven.q32ActualLevel"
          stepTargetLevel="stepSeven.q32TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">
          33. ¿Cómo se entrena a los empleados en herramientas y prácticas digitales?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q33}
          stepActualLevel="stepSeven.q33ActualLevel"
          stepTargetLevel="stepSeven.q33TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">34. ¿Cómo se maneja el cambio hacia la digitalización en tu organización?</h2>
        <OptionsBox
          control={control}
          optionsList={options.q34}
          stepActualLevel="stepSeven.q34ActualLevel"
          stepTargetLevel="stepSeven.q34TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">
          35. ¿Cuál es la actitud general hacia el uso y adopción de nuevas tecnologías?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q35}
          stepActualLevel="stepSeven.q35ActualLevel"
          stepTargetLevel="stepSeven.q35TargetLevel"
        />
      </div>
    </div>
  );
}

export default StepSeven;
