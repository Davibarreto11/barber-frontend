import React, { useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiLock, FiLogIn } from "react-icons/fi";
import { type FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";

import { useAuth } from "../../hooks/Auth";
import { useToast } from "../../hooks/Toast";
import getValidationErrors from "../../util/getValidationErrors";

import Logo from "../../assets/logo.png";
import signInBackgroundImg from "../../assets/sign-background.png";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Content, AnimationContainer } from "./styles";

interface SignInFormData {
  email: string;
  password: string;
}

export const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required("E-mail obrigatório")
            .email("Digite um e-mail válido"),
          password: Yup.string().required("Senha obrigatória"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err: any) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: "error",
          title: "Erro na autenticação",
          description: "Ocorreu um erro ao tentar login, cheque seus dados",
        });
      }
    },
    [signIn, addToast]
  );
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={Logo} alt="GoBarber" />

          <Form
            placeholder={false}
            onPointerEnterCapture={false}
            onPointerLeaveCapture={false}
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <h1>Faça seu login</h1>

            <Input name="email" icon={FiMail} placeholder="Email" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Entrar</Button>

            <Link to="/forgot-password">Esqueci minha senha</Link>
          </Form>

          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
      <img src={signInBackgroundImg} alt="Logo" />
    </Container>
  );
};
