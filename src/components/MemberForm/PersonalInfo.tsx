import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { MemberFormValues } from "../types";

type Props = {
  register: UseFormRegister<MemberFormValues>;
  errors: FieldErrors<MemberFormValues>;
};

export default function PersonalInfo({ register, errors }: Props) {
  return (
    <div >
      <div>
        <label className="block text-gray-800 font-medium mb-1">คำนำหน้า</label>
        <input
          type="text"
          {...register("prefix")}
          className="w-full border rounded px-4 py-2"
        />
        {errors.prefix && <p className="text-red-500 text-sm">{errors.prefix.message}</p>}
      </div>

      <div>
        <label className="block font-medium mb-1">ชื่อ</label>
        <input
          type="text"
          {...register("firstName")}
          className="w-full border rounded px-4 py-2"
        />
        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
      </div>

      <div>
        <label className="block font-medium mb-1">นามสกุล</label>
        <input
          type="text"
          {...register("lastName")}
          className="w-full border rounded px-4 py-2"
        />
        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
      </div>

      <div>
        <label className="block font-medium mb-1">รูปถ่าย (URL)</label>
        <input
          type="text"
          {...register("photoUrl")}
          className="w-full border rounded px-4 py-2"
        />
        {errors.photoUrl && <p className="text-red-500 text-sm">{errors.photoUrl.message}</p>}
      </div>
    </div>
  );
}

