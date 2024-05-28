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
import signinIlustration from "../../assets/barber.svg";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Content, AnimationContainer, TextIntro, FormContent } from "./styles";

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

          <FormContent>
          <img src={Logo} alt="GoBarber" />
            <Form
              placeholder={false}
              onPointerEnterCapture={false}
              onPointerLeaveCapture={false}
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <h1>Faça seu <label>Login</label></h1>

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
          </FormContent>

          <TextIntro>
            <img src={signinIlustration} alt="" />
            <h1>Lorem Ipsum Dollor</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book.
            </p>
          </TextIntro>
        </AnimationContainer>

      </Content>



      {/* <img src={signInBackgroundImg} alt="Logo" /> */}
    </Container>
  );
};
