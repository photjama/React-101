/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/

/*import { useState } from "react";
import MemberForm from "./components/MemberForm";
import MemberList from "./components/MemberList";
import type { Member } from "./types/member";

function App() {
  const [members, setMembers] = useState<Member[]>([]);

  const addMember = (member: Member) => {
    setMembers((prev) => [...prev, member]);
  };

  const deleteMember = (id: string) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div>
      <h1>ระบบจัดการข้อมูลสมาชิก ส.ส.</h1>
      <MemberForm onAdd={addMember} />
      <MemberList members={members} onDelete={deleteMember} />
    </div>
  );
}

export default App;*/

// App.tsx
import { useState, type ReactNode } from "react";
import MemberForm from "./components/MemberForm/MemberForm";
import MemberTable from "./components/MemberTable";
import type { Member } from "./components/types";
import { initialMembers } from "./components/initialMembers"; 


// ---------------- Card Component ----------------
function Card({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div >
      {title && (
        <h2 >{title}</h2>
      )}
      <div>{children}</div>
    </div>
  );
}



// ---------------- App ----------------
export default function App() {
  const [members, setMembers] = useState<Member[]>(initialMembers); // ใช้ initialMembers
  const [editingMember, setEditingMember] = useState<Member | null>(null);

  const handleSubmit = (data: Member) => {
    if (editingMember) {
      setMembers(members.map(m => m.id === editingMember.id ? { ...data, id: editingMember.id } : m));
      setEditingMember(null);
    } else {
      setMembers([...members, { ...data, id: Date.now() }]);
    }
  };

  return (
    <div className="form-container">
      {/* เพิ่ม padding รอบกรอบหลัก */}
      <div className="relative w-full max-w-6xl p-4 rounded-3xl 
                      bg-gradient-to-r from-teal-400 via-teal-300 to-teal-400 shadow-2xl">
        <div className="bg-white rounded-3xl p-8 flex flex-col gap-8">
          {/* Header */}
          <header className="text-center py-4">
            
          </header>

          {/* Main Content */}
          <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Form Card */}

            <Card title="แบบฟอร์มสมาชิก" >
              <MemberForm 
                onSubmit={handleSubmit} 
                editingMember={editingMember} 
                onCancel={() => setEditingMember(null)} 
              />
            </Card>

            {/* Table Card */}
            <Card title="รายการสมาชิก" >
              <MemberTable 
                members={members} 
                onEdit={setEditingMember} 
                onDelete={id => setMembers(members.filter(m => m.id !== id))} 
              />
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
}







