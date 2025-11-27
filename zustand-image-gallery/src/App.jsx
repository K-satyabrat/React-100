import React from "react";
import "animate.css";
import { Download, Trash2, Upload } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import { useImageStore } from "./zustand/useImageStore";
const FIVE_MB = 5 * 1024 * 1024;

const App = () => {
  const { images, setImage, deleteImage } = useImageStore();

  const choosefile = (e) => {
    const input = e.target;
    const file = input.files[0];
    console.log(file);

    if (!file.type.startsWith("image/"))
      return toast.error("please select an image file", {
        position: "top-center",
      });

    if (file.size > FIVE_MB)
      return toast.error("File size too large", {
        position: "top-center",
      });

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      console.log(fileReader.result);
      setImage({
        id: Date.now(),
        name: file.name,
        size: file.size,
        binary: fileReader.result,
        createdAt: new Date(),
      });
      toast.success("new image added");
    };
  };

  const downloadImage = (item) => {
    const a = document.createElement("a");
    a.href = item.binary;
    a.download = item.name;
    a.click();
    a.remove();
  };

  return (
    <div className="bg-gray-100 min-h-screen lg:p-0 p-8">
      <div className="lg:w-9/12 mx-auto py-7 space-y-5">
        <h1 className="text-4xl font-bold text-center ">Image Storage</h1>
        <div className="relative  hover:scale-105 transition-transform duration-300 lg:w-7/12 mx-auto border-3 border-dashed border-slate-900 flex flex-col gap-2 items-center py-10 text-white bg-gradient-to-l from-blue-500 to-purple-500 rounded-xl">
          <Upload className="w-16 h-16" />
          <h1>Click me to add an image</h1>
          <input
            onChange={choosefile}
            className="absolute top-0 left-0 w-full h-full opacity-0 rounded-xl cursor-pointer"
            type="file"
          />
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {images.map((item, id) => (
            <div key={id} className="overflow-hidden  ">
              <img
                src={item.binary}
                className="w-full h-[150px] object-cover rounded-t-xl hover:scale-110 transition-transform duration-300"
              />
              <div className="bg-white p-3 rounded-b-xl">
                <h1 className="font-semibold">{item.name}</h1>
                <p className="text-gray-500">
                  {(item.size / 1024 / 1024).toFixed(1) + "Mb"}
                </p>
                <div className="flex gap-7">
                  <button
                    onClick={() => downloadImage(item)}
                    className="w-8 h-8 bg-green-400 rounded-xl flex justify-center items-center text-white hover:bg-cyan-500"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteImage(item.id)}
                    className="w-8 h-8 bg-red-600 rounded-xl flex justify-center items-center text-white hover:bg-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
