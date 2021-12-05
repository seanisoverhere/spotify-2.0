import React, { useState, useEffect } from "react";
import { getProviders, signIn } from "next-auth/react";

const Login = () => {
  const [clientProviders, setClientProviders] = useState();

  useEffect(() => {
    getProviders().then((res) => setClientProviders(res));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-black min-h-screen w-full">
      <img
        className="w-52 mb-5"
        src="https://links.papareact.com/9xl"
        alt="spotify logo"
      />

      {clientProviders &&
        Object.values(clientProviders).map((provider) => (
          <div key={provider.name}>
            <button
              className="bg-green-400 text-white p-3 rounded-lg mt-4"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Login with {provider.name}
            </button>
          </div>
        ))}
    </div>
  );
};

export default Login;
