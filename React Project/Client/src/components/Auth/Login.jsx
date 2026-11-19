import { useState } from "react";

const Login = ({ handelLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    handelLogin(email, password);
    setEmail("");
    setPassword("");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="w-full max-w-md rounded-xl border-2 border-gray-600 p-10">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex flex-col items-center gap-4"
        >
          <h1 className="mb-4 text-3xl font-bold text-white">Login</h1>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-full border-2 border-red-600 bg-transparent px-5 py-3 text-xl text-white outline-none placeholder:text-white focus:border-amber-500"
            type="email"
            placeholder="Enter Your Email"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-full border-2 border-red-600 bg-transparent px-5 py-3 text-xl text-white outline-none placeholder:text-white focus:border-amber-500"
            type="password"
            placeholder="Enter Password"
          />

          <button
            type="submit"
            className="w-full rounded-full bg-amber-600 px-5 py-3 text-xl text-white transition-colors hover:bg-amber-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
