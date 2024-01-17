import React from "react";
import upload from "../assets/upload.svg";
const InputFile = ({ setExercises }) => {
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        const parsedContent = JSON.parse(content);
        setExercises(parsedContent);
        localStorage.setItem("data", JSON.stringify(parsedContent));
      };
      reader.readAsText(file);
    }
  };
  return (
    <section>
      <div class="flex items-center justify-center w-full">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-screen cursor-pointer hover:bg-neutral-950 transition-all"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              class="w-8 h-8 mb-4 text-gray-300 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p class="mb-2 text-sm text-gray-300 font-semibold">
              Click to upload a file
            </p>
          </div>

          <input
            id="dropzone-file"
            type="file"
            onChange={(e) => handleFile(e)}
            accept=".txt"
            class="hidden"
          />
        </label>
      </div>
    </section>
  );
};

export default InputFile;
