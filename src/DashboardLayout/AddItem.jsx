import React from "react";
import Swal from "sweetalert2";

const AddItem = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const tipData = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(
        "https://gardening-community-server-plum.vercel.app/share-garden-tip",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(tipData),
        }
      );

      const result = await res.json();

      if (res.ok) {
        Swal.fire("✅ Success", "Item added successfully!", "success");
        form.reset();
      } else {
        Swal.fire(
          "❌ Error",
          result.message || "Something went wrong",
          "error"
        );
      }
    } catch (error) {
      Swal.fire("⚠️ Failed", error.message, "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl grid md:grid-cols-2 gap-8 bg-white/60 backdrop-blur-md shadow-2xl rounded-3xl p-10 border border-white/40"
      >
        <div className="col-span-full">
          <h2 className="text-3xl font-extrabold text-green-700 mb-8 border-b-2 border-lime-400 pb-4">
            Add New Item
          </h2>
        </div>

        <Input label="Title" name="title" required />
        <Input label="Image URL" name="imageUrl" type="url" required />
        <Input label="Category" name="category" required />
        <Select
          label="Availability"
          name="availability"
          options={["Public", "Hidden"]}
        />
        <Input label="Plant Type" name="plantType" required />
        <Select
          label="Difficulty"
          name="difficulty"
          options={["Easy", "Medium", "Hard"]}
        />

        <Textarea label="Description" name="description" required />
        <Textarea label="Other Info" name="otherInfo" />

        <div className="col-span-full">
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold tracking-wide transition"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

/* ---------- Reusable Input Components ---------- */

const base =
  "w-full rounded-xl border border-gray-300/70 bg-white/80 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 placeholder-transparent";

const Input = ({ label, ...props }) => (
  <div className="relative">
    <input {...props} className={base} />
    <label className="absolute left-4 -top-3 text-xs bg-white/80 px-1 text-gray-500">
      {label}
    </label>
  </div>
);

const Textarea = ({ label, ...props }) => (
  <div className="relative col-span-full">
    <textarea rows={3} {...props} className={base + " resize-none"} />
    <label className="absolute left-4 -top-3 text-xs bg-white/80 px-1 text-gray-500">
      {label}
    </label>
  </div>
);

const Select = ({ label, options, ...props }) => (
  <div className="relative">
    <select {...props} className={base}>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    <label className="absolute left-4 -top-3 text-xs bg-white/80 px-1 text-gray-500">
      {label}
    </label>
  </div>
);

export default AddItem;
