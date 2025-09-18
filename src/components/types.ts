// types.ts
import { z } from "zod";

// schema สำหรับฟอร์ม
export const memberSchema = z.object({
  prefix: z.string().min(1, "คำนำหน้าต้องไม่ว่าง"),
  firstName: z.string().min(1, "ชื่อต้องไม่ว่าง"),
  lastName: z.string().min(1, "นามสกุลต้องไม่ว่าง"),
  photoUrl: z.string().url("URL ไม่ถูกต้อง").optional().or(z.literal("")),
  workHistory: z.string().min(1, "ประวัติการทำงานต้องไม่ว่าง"),
  achievements: z.string().min(1, "ผลงานต้องไม่ว่าง"),
  ministerialPosition: z.string().optional(),
  ministry: z.string().optional(),
  politicalParty: z.string().min(1, "สังกัดพรรคต้องไม่ว่าง"),
});

// type สำหรับฟอร์ม
export type MemberFormValues = z.infer<typeof memberSchema>;

// type สำหรับ state/ตาราง
export type Member = MemberFormValues & { id: number };
