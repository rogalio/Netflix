import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // creation d'un utilisateur
  const register = async (e) => {
    e.preventDefault();
    try {
      const user = createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  // connection d'un utilisateur
  const signIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <div className=" max-w-lg  p-16 m-auto bg-[rgba(0,0,0,0.85)]">
      <form className=" grid ">
        <h1 className=" text-left text-2xl font-bold mb-4">S'identifier</h1>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className=" p-3 outline-none h-10  mb-4 rounded border-none max-w-2xl "
        />
        <input
          type="password"
          placeholder="mot de passe"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className=" p-3 outline-none h-10   rounded border-none max-w-2xl "
        />
        <button
          className=" p-2 text-base rounded bg-[#e50914] h-12 font-semibold mt-6"
          type="submit"
          onClick={signIn}
        >
          S'identifier
        </button>
        <h4>
          <span className=" text-gray-400">Première visite sur Netflix ? </span>
          <span
            onClick={register}
            className=" hover:cursor-pointer hover:underline"
          >
            {" "}
            Inscrivez-vous.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
