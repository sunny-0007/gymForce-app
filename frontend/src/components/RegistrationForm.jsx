import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Listbox } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";

const genders = ["male", "female", "other"];
const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
const plans = ["warrior", "legend", "titan"];

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    bloodGroup: "",
    height: "",
    weight: "",
    plan: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          age: "",
          gender: "",
          bloodGroup: "",
          height: "",
          weight: "",
          plan: "",
        });
        navigate("/"); // redirect to home page
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to backend");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-xl">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-6 text-center">
          Registration Form
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Gender</label>
            <Listbox value={formData.gender} onChange={(val) => setFormData({ ...formData, gender: val })}>
              <div className="relative">
                <Listbox.Button className="w-full border border-gray-300 rounded-lg px-4 py-2 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-orange-500">
                  {formData.gender || "Select Gender"}
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-30 overflow-auto z-10">
                  {genders.map((gender) => (
                    <Listbox.Option
                      key={gender}
                      value={gender}
                      className={({ active }) =>
                        `cursor-pointer px-4 py-2 ${active ? "bg-orange-100 text-orange-700" : "text-gray-800"}`
                      }
                    >
                      {({ selected }) => (
                        <div className="flex justify-between items-center">
                          <span>{gender}</span>
                          {selected && <Check className="w-4 h-4 text-orange-500" />}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>

          {/* Blood Group */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Blood Group</label>
            <Listbox value={formData.bloodGroup} onChange={(val) => setFormData({ ...formData, bloodGroup: val })}>
              <div className="relative">
                <Listbox.Button className="w-full border border-gray-300 rounded-lg px-4 py-2 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-orange-500">
                  {formData.bloodGroup || "Select Blood Group"}
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-30 overflow-auto z-10">
                  {bloodGroups.map((bg) => (
                    <Listbox.Option
                      key={bg}
                      value={bg}
                      className={({ active }) =>
                        `cursor-pointer px-4 py-2 ${active ? "bg-orange-100 text-orange-700" : "text-gray-800"}`
                      }
                    >
                      {({ selected }) => (
                        <div className="flex justify-between items-center">
                          <span>{bg}</span>
                          {selected && <Check className="w-4 h-4 text-orange-500" />}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>

          {/* Height */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Height (cm)</label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              placeholder="Enter your height in cm"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Weight */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              placeholder="Enter your weight in kg"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Plan */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Plan</label>
            <Listbox value={formData.plan} onChange={(val) => setFormData({ ...formData, plan: val })}>
              <div className="relative">
                <Listbox.Button className="w-full border border-gray-300 rounded-lg px-4 py-2 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-orange-500">
                  {formData.plan || "Select Plan"}
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto z-10">
                  {plans.map((plan) => (
                    <Listbox.Option
                      key={plan}
                      value={plan}
                      className={({ active }) =>
                        `cursor-pointer px-4 py-2 ${active ? "bg-orange-100 text-orange-700" : "text-gray-800"}`
                      }
                    >
                      {({ selected }) => (
                        <div className="flex justify-between items-center">
                          <span>{plan}</span>
                          {selected && <Check className="w-4 h-4 text-orange-500" />}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-teal-500 text-white font-semibold shadow hover:opacity-90 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
