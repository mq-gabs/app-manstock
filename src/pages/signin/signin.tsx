import { useState } from "react";
import { Button, Input } from "../../components";
import { signIn } from "../../services/auth/signin";
import { StyledSignIn } from "./signin.styles";
import Icon from "../../components/icon";

export const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignIn = async () => {
    const result = await signIn({ authData: { email, password }});
    result;
  }

  return (
    <StyledSignIn>
      <div className="wrapper">
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
        />
      </div>
    </StyledSignIn>
  );
}