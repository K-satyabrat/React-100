import { useState } from "react";

function App() {
  const [num, setNum] = useState(12);
  const [type, setType] = useState("linear");
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="w-9/12 mx-auto">
        <div className="flex justify-between ">
          <h1 className="text-3xl font-bold">🎨Gradient generator</h1>
          <div className="flex gap-4">
            <input
              className="bg-white border border-slate-400 rounded-lg w-[100px] p-2 "
              placeholder="12"
              onChange={(e) => setNum(e.target.value)}
            />
            <select className="bg-white border border-slate-400 rounded-lg w-[100px] p-2 ">
              <option value="linear">Linear</option>
              <option value={"radial"}>Radial</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
