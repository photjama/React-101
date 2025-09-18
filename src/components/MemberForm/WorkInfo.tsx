import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { MemberFormValues } from "../types";

type Props = {
  register: UseFormRegister<MemberFormValues>;
  errors: FieldErrors<MemberFormValues>;
};

export default function WorkInfo({ register, errors }: Props) {
  return (
    <>
      <div >
        <label className="block font-medium mb-1">ประวัติการทำงาน</label>
        <textarea {...register("workHistory")} className="w-full border rounded px-3 py-2" rows={3} />
        {errors.workHistory && <p className="text-red-500 text-sm">{errors.workHistory.message}</p>}
      </div>
      <div className="md:col-span-2">
        <label className="block font-medium mb-1">ผลงานที่ผ่านมา</label>
        <textarea {...register("achievements")} className="w-full border rounded px-3 py-2" rows={3} />
        {errors.achievements && <p className="text-red-5 text-sm">{errors.achievements.message}</p>}
      </div>
    </>
  );
}
