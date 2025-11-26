import React from "react";
import "animate.css";
import { Upload } from "lucide-react";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="w-9/12 mx-auto py-7 space-y-5">
        <h1 className="text-4xl font-bold text-center ">Image Storage</h1>
        <div className="cursor-pointer hover:scale-105 transition-transform duration-300 w-7/12 mx-auto border-3 border-dashed border-slate-900 flex flex-col gap-2 items-center py-10 text-white bg-gradient-to-l from-blue-500 to-purple-500 rounded-xl">
          <Upload className="w-16 h-16" />
          <h1>Click me to add an image</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
