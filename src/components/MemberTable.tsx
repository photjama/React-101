import type { Member } from "./types";
import { FaEdit, FaTrash } from "react-icons/fa";

type Props = {
  members: Member[];
  onEdit: (m: Member) => void;
  onDelete: (id: number) => void;
};

export default function MemberTable({ members, onEdit, onDelete }: Props) {
  return (
    <div className="overflow-auto max-h-[600px] rounded-lg shadow-md p-4 md:p-6">
      <table className="min-w-full border-collapse table-auto">
        <thead className="bg-teal-600 text-white sticky top-0 z-10 text-base">
          <tr>
            <th className="px-6 py-3 min-w-[100px] text-center">รูป</th>
            <th className="px-6 py-3 min-w-[180px] text-center">ชื่อ-นามสกุล</th>
            <th className="px-6 py-3 min-w-[250px] text-center">ประวัติการทำงาน</th>
            <th className="px-6 py-3 min-w-[250px] text-center">ผลงาน</th>
            <th className="px-6 py-3 min-w-[180px] text-center">ตำแหน่ง</th>
            <th className="px-6 py-3 min-w-[180px] text-center">กระทรวง</th>
            <th className="px-6 py-3 min-w-[150px] text-center">พรรค</th>
            <th className="px-6 py-3 text-center min-w-[120px]">จัดการ</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-base divide-y divide-gray-200">
          {members.map(member => (
            <tr
              key={member.id}
              className="hover:bg-teal-50 transition-colors text-center align-middle"
            >
              <td className="px-6 py-3">
                <img
                  src={member.photoUrl || 'https://placehold.co/50x50/333/FFF?text=N/A'}
                  alt="รูป"
                  className="w-12 h-12 rounded-full object-cover mx-auto"
                />
              </td>
              <td className="px-6 py-3 break-words">{member.prefix} {member.firstName} {member.lastName}</td>
              <td className="px-6 py-3 break-words">{member.workHistory}</td>
              <td className="px-6 py-3 break-words">{member.achievements}</td>
              <td className="px-6 py-3 break-words">{member.ministerialPosition}</td>
              <td className="px-6 py-3 break-words">{member.ministry}</td>
              <td className="px-6 py-3 break-words">{member.politicalParty}</td>
              <td className="px-6 py-3 flex justify-center gap-2">
                <button
                  onClick={() => onEdit(member)}
                  className="btn-edit"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => onDelete(member.id)}
                  className="btn-delete"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



