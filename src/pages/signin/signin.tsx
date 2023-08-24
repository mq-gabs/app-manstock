import { useState } from "react";
import { Button, Input } from "../../components";
import { signIn } from "../../services/auth/signin";
import { StyledSignIn } from "./signin.styles";
import Icon from "../../components/icon";
import { useAuth } from "../../hooks/auth";

export const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setUserData } = useAuth();

  const handleSignIn = async () => {
    if (!email || !password) {
      
    }

    const data = await signIn({ authData: { email, password }});
    setUserData(data);
  }

  const handlePressEnter = (code: string) => {
    if (code === 'Enter') {
      handleSignIn();
    }
  }

  return (
    <StyledSignIn>
      <div className="wrapper" onKeyDown={({ code }) => handlePressEnter(code)}>
        <div className="title">
        <Icon name="logo" size={4} />
        <h1>Manstock</h1>
        </div>
        <Input
          placeholder="Email"
          icon="email"
          value={email}
          setValue={setEmail}
        />
        <Input
          type="password"
          placeholder="Senha"
          icon="password"
          value={password}
          setValue={setPassword}
          />
        <Button
          text="Entrar"
          onClick={handleSignIn}
          isLoading={isLoading}
        />
      </div>
    </StyledSignIn>
  );
}