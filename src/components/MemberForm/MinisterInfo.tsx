import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { MemberFormValues } from "../types";

type Props = {
  register: UseFormRegister<MemberFormValues>;
  errors: FieldErrors<MemberFormValues>;
};

export default function MinisterInfo({ register, errors }: Props) {
  return (
    <>
      <div >
        <label className="block font-medium mb-1">ตำแหน่งรัฐมนตรี</label>
        <input
          type="text"
          {...register("ministerialPosition")}
          className="w-full border rounded px-3 py-2"
        />
        {errors?.ministerialPosition && (
          <p className="text-red-500 text-sm mt-1">
            {errors.ministerialPosition.message?.toString()}
          </p>
        )}
      </div>
      <div>
        <label className="block font-medium mb-1">กระทรวง</label>
        <input
          type="text"
          {...register("ministry")}
          className="w-full border rounded px-3 py-2"
        />
        {errors?.ministry && (
          <p className="text-red-500 text-sm mt-1">
            {errors.ministry.message?.toString()}
          </p>
        )}
      </div>
    </>
  );
}
