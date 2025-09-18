import type { Member } from "./types";
import { FaEdit, FaTrash } from "react-icons/fa";

type Props = {
  members: Member[];
  onEdit: (m: Member) => void;
  onDelete: (id: number) => void;
};

export default function MemberTable({ members, onEdit, onDelete }: Props) {
  return (
    <div className="overflow-auto max-h-[450px] rounded-lg shadow-md p-4 md:p-6">
      <table className="min-w-full border-collapse">
        <thead className="bg-teal-600 text-white sticky top-0 z-10">
          <tr>
            <th className="px-4 py-2">รูป</th>
            <th className="px-4 py-2">ชื่อ-นามสกุล</th>
            <th className="px-4 py-2">ประวัติการทำงาน</th>
            <th className="px-4 py-2">ผลงาน</th>
            <th className="px-4 py-2">ตำแหน่ง/กระทรวง</th>
            <th className="px-4 py-2">พรรค</th>
            <th className="px-4 py-2 text-center">จัดการ</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm divide-y divide-gray-200">
          {members.map(member => (
            <tr key={member.id} className="hover:bg-teal-50 transition-colors">
              <td className="px-4 py-2 text-center">
                <img
                  src={member.photoUrl || 'https://placehold.co/50x50/333/FFF?text=N/A'}
                  alt="รูป"
                  className="w-10 h-10 rounded-full object-cover mx-auto"
                />
              </td>
              <td className="px-4 py-2">{member.prefix} {member.firstName} {member.lastName}</td>
              <td className="px-4 py-2">{member.workHistory}</td>
              <td className="px-4 py-2">{member.achievements}</td>
              <td className="px-4 py-2">{member.ministerialPosition ? `${member.ministerialPosition}, ${member.ministry}` : '-'}</td>
              <td className="px-4 py-2">{member.politicalParty}</td>
              <td className="px-4 py-2 flex justify-center gap-2">
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
