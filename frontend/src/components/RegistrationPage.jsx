import { useState } from "react";
import axios from "axios";
import { Listbox } from "@headlessui/react";
import { useSearchParams } from "react-router-dom";
import Navbar from "./Navbar.jsx";

const genders = ["male", "female", "other"];
const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function RegistrationPage() {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan") || "Basic";

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
      await axios.post(`${import.meta.env.VITE_API_URL}/api/users/register`, {
        ...form,
        plan,
      });
      alert("Your registration is successful.");
    } catch (err) {
      alert("Something went wrong. Try again.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Form container */}
      <main className="grow flex justify-center p-4 sm:p-6 pt-[80px] sm:pt-[100px] overflow-auto">
        <div className="w-full max-w-4xl bg-gradient-to-br from-purple-900/90 to-black/90 p-6 sm:p-10 rounded-3xl border border-purple-500/50">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-center mb-6 sm:mb-10 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Final Step – {plan} Member
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Name */}
            <input
              placeholder="Full Name"
              required
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/70 w-full"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/70 w-full"
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="Phone Number"
              required
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/70 w-full"
            />

            {/* Age */}
            <input
              type="number"
              placeholder="Age"
              required
              onChange={(e) => setForm({ ...form, age: e.target.value })}
              className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/70 w-full"
            />

            {/* Height */}
            <input
              type="number"
              placeholder="Height (cm)"
              required
              onChange={(e) => setForm({ ...form, height: e.target.value })}
              className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/70 w-full"
            />

            {/* Weight */}
            <input
              type="number"
              placeholder="Weight (kg)"
              required
              onChange={(e) => setForm({ ...form, weight: e.target.value })}
              className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/70 w-full"
            />

            {/* Gender */}
            <Listbox value={form.gender} onChange={(value) => setForm({ ...form, gender: value })}>
              <div className="relative w-full">
                <Listbox.Button className="p-4 sm:p-5 w-full bg-white/10 rounded-2xl border border-white/20 text-white text-left">
                  {form.gender || "Gender"}
                </Listbox.Button>
                <Listbox.Options className="absolute mt-2 w-full max-h-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-auto z-50">
                  {genders.map((g) => (
                    <Listbox.Option
                      key={g}
                      value={g}
                      className="cursor-pointer p-3 text-white hover:bg-purple-900/50 rounded-md"
                    >
                      {g}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>

            {/* Blood Group */}
            <Listbox value={form.bloodGroup} onChange={(value) => setForm({ ...form, bloodGroup: value })}>
              <div className="relative w-full">
                <Listbox.Button className="p-4 sm:p-5 w-full bg-white/10 rounded-2xl border border-white/20 text-white text-left">
                  {form.bloodGroup || "Blood Group"}
                </Listbox.Button>
                <Listbox.Options className="absolute mt-2 w-full max-h-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-auto z-50">
                  {bloodGroups.map((bg) => (
                    <Listbox.Option
                      key={bg}
                      value={bg}
                      className="cursor-pointer p-3 text-white hover:bg-purple-900/50 rounded-md"
                    >
                      {bg}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>

            {/* Submit */}
            <div className="md:col-span-2 mt-6 sm:mt-8">
              <button
                type="submit"
                className="w-full py-4 sm:py-5 text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white hover:scale-105 transform transition"
              >
                Complete My Registration
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
