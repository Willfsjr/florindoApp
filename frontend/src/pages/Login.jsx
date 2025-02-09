import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
  
    const data = await response.json();
    
    if (response.ok) {
      localStorage.setItem("token", data.token);
      alert("Login bem-sucedido!");
    } else {
      setErrorMessage(data.error || "Erro ao fazer login");
    }
  };
  

  

  return (
    <div className="login-background">
      <div className="flex h-screen items-center justify-center">
        <div className="login-container w-full max-w-lg">
          <div className="flex justify-center mb-4">
            <img src="/public/assets/logo-florindo.png" alt="Logo" className="w-60 h-auto" />
          </div>

          {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}

          <form onSubmit={handleLogin}>
            <div className="mb-8">
              <label htmlFor="username" className="block text-gray-700 font-bold">
                Usuário
              </label>
              <input 
                type="text" 
                id="username" 
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Digite seu usuário"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="password" className="block text-gray-700 font-bold">
                Senha
              </label>
              <input 
                type="password" 
                id="password" 
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600 transition"
            >
              Entrar
            </ button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;