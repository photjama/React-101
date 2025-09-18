import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { MemberFormValues } from "../types";

type Props = {
  register: UseFormRegister<MemberFormValues>;
  errors: FieldErrors<MemberFormValues>;
};

export default function PoliticalInfo({ register, errors }: Props) {
  return (
    <div className="md:col-span-2">
      <label className="block font-medium mb-1">สังกัดพรรคการเมือง</label>
      <input type="text" {...register("politicalParty")} className="w-full border rounded px-3 py-2" />
      {errors.politicalParty && <p className="text-red-500 text-sm">{errors.politicalParty.message}</p>}
    </div>
  );
}
