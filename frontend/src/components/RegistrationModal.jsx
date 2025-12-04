import { useState } from "react";
import axios from "axios";
import { Listbox } from "@headlessui/react";

const genders = ["male", "female", "other"];
const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function RegistrationModal({ plan, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    bloodGroup: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/users/register", {
        ...form,
        plan,
      });
      alert("Welcome to the family! Check your email.");
      onClose();
    } catch (err) {
      alert("Something went wrong. Try again.");
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-purple-900/90 to-black/90 rounded-3xl p-10 max-w-4xl w-full border border-purple-500/50">
        <h2 className="text-5xl font-display text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Final Step – {plan} Member
        </h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          {/* Name, Email, Phone */}
          <input
            placeholder="Full Name"
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-5 rounded-2xl bg-white/10 border border-white/20 focus:border-purple-400 outline-none text-white placeholder-white/60"
          />
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="p-5 rounded-2xl bg-white/10 border border-white/20 focus:border-purple-400 outline-none text-white placeholder-white/60"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="p-5 rounded-2xl bg-white/10 border border-white/20 focus:border-purple-400 outline-none text-white placeholder-white/60"
          />

          {/* Age, Height, Weight */}
          <div className="md:col-span-2 grid md:grid-cols-3 gap-6">
            <input
              type="number"
              placeholder="Age"
              inputMode="numeric"
              required
              onChange={(e) => setForm({ ...form, age: e.target.value })}
              className="p-5 rounded-2xl bg-white/10 border border-white/20 focus:border-purple-400 outline-none text-white placeholder-white/60"
            />
            <input
              type="number"
              placeholder="Height (cm)"
              required
              onChange={(e) => setForm({ ...form, height: e.target.value })}
              className="p-5 rounded-2xl bg-white/10 border border-white/20 focus:border-purple-400 outline-none text-white placeholder-white/60"
            />
            <input
              type="number"
              placeholder="Weight (kg)"
              required
              onChange={(e) => setForm({ ...form, weight: e.target.value })}
              className="p-5 rounded-2xl bg-white/10 border border-white/20 focus:border-purple-400 outline-none text-white placeholder-white/60"
            />
          </div>

          {/* Gender Dropdown */}
          <Listbox value={form.gender} onChange={(value) => setForm({ ...form, gender: value })}>
            <div className="relative w-full">
              <Listbox.Button className="p-5 w-full rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-white text-left focus:border-purple-400 outline-none">
                {form.gender || "Gender"}
              </Listbox.Button>
              <Listbox.Options className="absolute  bottom-full mb-2 mt-2 w-full bg-white/10 backdrop-blur border border-white/20 rounded-2xl z-50 overflow-hidden">
                {genders.map((g) => (
                  <Listbox.Option
                    key={g}
                    value={g}
                    className={({ active, selected }) =>
                      `cursor-pointer select-none p-4 text-white ${active ? "bg-purple-900/50" : ""} ${
                        selected ? "font-bold" : ""
                      }`
                    }
                  >
                    {g}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>

          {/* Blood Group Dropdown */}
          <Listbox value={form.bloodGroup} onChange={(value) => setForm({ ...form, bloodGroup: value })}>
            <div className="relative w-full">
              <Listbox.Button className="p-5 w-full rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-white text-left focus:border-purple-400 outline-none">
                {form.bloodGroup || "Blood Group"}
              </Listbox.Button>
              <Listbox.Options className="absolute  bottom-full mb-2 mt-2 w-full bg-white/10 backdrop-blur border border-white/20 rounded-2xl z-50 overflow-hidden">
                {bloodGroups.map((bg) => (
                  <Listbox.Option
                    key={bg}
                    value={bg}
                    className={({ active, selected }) =>
                      `cursor-pointer select-none p-4 text-white ${active ? "bg-purple-900/50" : ""} ${
                        selected ? "font-bold" : ""
                      }`
                    }
                  >
                    {bg}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>

          {/* Buttons */}
          <div className="md:col-span-2 flex gap-6 mt-8">
            <button
              type="submit"
              className="flex-1 py-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-purple-600/50 transition text-white"
            >
              Complete My Registration
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-6 bg-white/10 rounded-2xl font-bold hover:bg-white/20 transition text-white"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
