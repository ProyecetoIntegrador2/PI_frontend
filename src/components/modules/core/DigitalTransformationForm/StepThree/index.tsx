import { useFormContext } from "react-hook-form";
import { options } from "../../constants/questions";
import OptionsBox from "../OptionsBox";
import { StepThreeFormData } from "../../validations/digitalTransformationSchema";

function StepOne() {
  const { control } = useFormContext<{
    stepThree: StepThreeFormData;
  }>();

  return (
    <div className="flex flex-col space-y-14">
      <div className="space-y-4">
        <h2 className="font-bold">
          11. ¿Cómo describirías las habilidades digitales generales en tu organización?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q11}
          stepActualLevel="stepThree.q11ActualLevel"
          stepTargetLevel="stepThree.q11TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">
          12.  ¿Cómo se gestiona el talento digital en tu organización?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q12}
          stepActualLevel="stepThree.q12ActualLevel"
          stepTargetLevel="stepThree.q12TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">
          13. ¿Cuál es la capacidad de adaptación tecnológica de tu organización?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q13}
          stepActualLevel="stepThree.q13ActualLevel"
          stepTargetLevel="stepThree.q13TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">14. ¿Cómo se priorizan y se implementan las inversiones en tecnología en tu organización?</h2>
        <OptionsBox
          control={control}
          optionsList={options.q14}
          stepActualLevel="stepThree.q14ActualLevel"
          stepTargetLevel="stepThree.q14TargetLevel"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold">
          15. ¿Cómo se evalúa el impacto de las tecnologías implementadas en tu organización?
        </h2>
        <OptionsBox
          control={control}
          optionsList={options.q15}
          stepActualLevel="stepThree.q15ActualLevel"
          stepTargetLevel="stepThree.q15TargetLevel"
        />
      </div>
    </div>
  );
}

export default StepOne;
