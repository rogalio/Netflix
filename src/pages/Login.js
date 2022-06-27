import React, { useState } from "react";
import SignUp from "./SignUp";
const Login = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="relative h-screen bg-center bg-no-repeat bg-cover  bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/421eb204-167a-4e06-b20c-bf9d55d06bb3/FR-fr-20220613-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] ">
      {/* Header */}
      <div>
        <img
          className=" fixed left-[20px] top-[20px] w-[150px] object-contain"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <button
          className=" fixed  right-[20px] top-[20px] bg-[#e50914] text-white px-[20px] font-semibold text-base  py-[10px] "
          onClick={() => setSignIn(true)}
        >
          S'identifier
        </button>
        <div className="w-[100%] z-10 h-screen bg-[rgba(0,0,0,0.4)] bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.8)]" />
        {/* Hero  */}
        <div className=" z-[1] text-white p-[20px] absolute top-[30%] mx-auto text-center w-screen ">
          {signIn ? (
            <SignUp />
          ) : (
            <>
              <h1 className=" text-5xl mb-[20px] font-semibold">
                Films, séries TV et bien plus en illimité.
              </h1>
              <h2 className=" text-3xl font-normal mb-8">
                Où que vous soyez. Annulez à tout moment.
              </h2>
              <h3 className=" text-xl font-normal">
                Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour
                vous abonner ou réactiver votre abonnement.
              </h3>
              {/* form + button */}
              <div className=" m-5">
                <form className="h-10 align-middle flex justify-center">
                  <input
                    className=" px-4 h-[100%] w-[30%] border-none max-w[600px]"
                    clatype="email"
                    placeholder=" Adresse email "
                  />
                  <button
                    onClick={() => setSignIn(true)}
                    className=" px-2 h-[100%] bg-[#e50914] text-lg border-none font-semibold"
                  >
                    Commencer {">"}
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
