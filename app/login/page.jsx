"use client";
import { useState } from "react";
import { authenticate } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";

export default function Page() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the authenticate action with formData
    dispatch(formData);
  };

  console.log(formData, "formData");
  return (
    <div className="bg-stone-300 h-screen flex justify-center items-center ">
      <form className="bg-white p-5 flex flex-col" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mb-5 px-2 border"
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="mb-5 px-2 border"
          placeholder="Password"
          required
        />
        <br />
        <div>{errorMessage && <p>{errorMessage}</p>}</div>
        <LoginButton />
      </form>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      aria-disabled={pending}
      className="bg-black text-white py-2 px-5 rounded"
      type="submit"
    >
      Login
    </button>
  );
}
