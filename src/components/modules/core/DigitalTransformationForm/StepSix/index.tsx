import { useFormContext } from "react-hook-form";
import { StepSixFormData } from "../../validations/digitalTransformationSchema";
import { options } from "../../constants/questions";
import OptionsBox from "../OptionsBox";

function StepSix() {
  const { control } = useFormContext<{
    stepSix: StepSixFormData;
  }>();

  return (
    <div className="flex flex-col space-y-14">
      <div className="space-y-4">
        <h2 className="font-bold">
          26. ¿Cómo se gestiona el riesgo digital en tu organización?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q26}
          stepActualLevel="stepSix.q26ActualLevel"
          stepTargetLevel="stepSix.q26TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">
          27. ¿Cómo se asegura el cumplimiento de normativas en tu organización?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q27}
          stepActualLevel="stepSix.q27ActualLevel"
          stepTargetLevel="stepSix.q27TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">
          28. ¿Cuál es el nivel de conciencia sobre seguridad digital en tu organización?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q28}
          stepActualLevel="stepSix.q28ActualLevel"
          stepTargetLevel="stepSix.q28TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">29. ¿Cómo se gestionan los datos y la privacidad de los usuarios?</h2>
        <OptionsBox
          control={control}
          optionsList={options.q29}
          stepActualLevel="stepSix.q29ActualLevel"
          stepTargetLevel="stepSix.q29TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">
          30. ¿Cómo se identifican y gestionan los riesgos emergentes en tecnología?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q30}
          stepActualLevel="stepSix.q30ActualLevel"
          stepTargetLevel="stepSix.q30TargetLevel"
        />
      </div>
    </div>
  );
}

export default StepSix;
