import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { memberSchema, type MemberFormValues, type Member } from "../types";

import PersonalInfo from "./PersonalInfo";
import WorkInfo from "./WorkInfo";
import MinisterInfo from "./MinisterInfo";
import PoliticalInfo from "./PoliticalInfo";

type Props = {
  onSubmit: (data: Member) => void;
  editingMember: Member | null;
  onCancel: () => void;
};

export default function MemberForm({ onSubmit, editingMember, onCancel }: Props) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<MemberFormValues>({
    resolver: zodResolver(memberSchema),
    defaultValues: {
      prefix: "",
      firstName: "",
      lastName: "",
      photoUrl: "",
      workHistory: "",
      achievements: "",
      ministerialPosition: "",
      ministry: "",
      politicalParty: "",
    },
  });

  useEffect(() => {
    if (editingMember) {
      reset(editingMember);
    } else {
      reset();
    }
  }, [editingMember, reset]);

  const handleFormSubmit = (data: MemberFormValues) => {
    const memberWithId: Member = {
      ...data,
      id: editingMember ? editingMember.id : Date.now(),
    };
    onSubmit(memberWithId);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
      <PersonalInfo register={register} errors={errors} />
      <WorkInfo register={register} errors={errors} />
      <MinisterInfo register={register} errors={errors} />
      <PoliticalInfo register={register} errors={errors} />

      <div className="flex gap-4 mt-6 md:col-span-2 justify-center">
  <button
    type="submit"
    className="btn-save"
  >
    {editingMember ? "บันทึกการแก้ไข" : "เพิ่มสมาชิก"}
  </button>

  {editingMember && (
    <button
      type="button"
      onClick={onCancel}
      className="btn-cancel"
    >
      ยกเลิก
    </button>
  )}
</div>
    </form>
  );
}
