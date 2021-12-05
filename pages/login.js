import React from "react";
import { getProviders, signIn } from "next-auth/react";

// getProviders().then((data) => console.log(data.spotify));

const Login = ({ providers }) => {
  return (
    <div>
      <img
        className="w-52 mb-5"
        src="https://links.papareact.com/9xl"
        alt="spotify logo"
      />

      {providers && Object.values(providers).map((provider) => (
        <buton>HI</buton>
      ))}
    </div>
  );
};

export default Login;

export async function getServerSideProps() {

  const providers = getProviders().then(data => console.log(data))
  console.log("INSIDE FETCH")

  return {
    props: {
      providers: providers
    },
  };
}
