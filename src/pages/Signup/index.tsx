import React, { useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiMail, FiUser, FiLock } from "react-icons/fi";
import { type FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";

import api from "../../services/api";

import { useToast } from "../../hooks/Toast";

import getValidationErrors from "../../util/getValidationErrors";
import signUpBackgroundImg from "../../assets/signup-background.png";

import Logo from "../../assets/logo.png";

import { Container, Content, AnimationContainer, TextIntro, FormContent } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

export const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required("Nome obrigatório"),
          email: Yup.string()
            .required("E-mail obrigatório")
            .email("Digite um e-mail válido"),
          password: Yup.string().min(6, "No mínimo 6 dígitos"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post("/users", data);

        navigate("/");

        addToast({
          type: "success",
          title: "Cadastro realizado!",
          description: "Você já pode fazer seu logon no Gobarber",
        });
      } catch (err: any) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: "error",
          title: "Erro na cadastro",
          description: "Ocorreu um erro ao fazer cadastro, tente novamente",
        });
      }
    },
    [addToast, navigate]
  );

  return (
    <Container>
      {/* <Backgroud /> */}
      <Content>

        <AnimationContainer>
        <TextIntro>
            <h1>Lorem Ipsum Dollor</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book.
            </p>
          </TextIntro>

        <FormContent>
              <img src={Logo} alt="GoBarber" />

              <Form
                placeholder={false}
                onPointerEnterCapture={false}
                onPointerLeaveCapture={false}
                ref={formRef}
                onSubmit={handleSubmit}
                initialData={{}}
              >
                <h1>Crie sua <label>conta</label></h1>

                <Input name="name" icon={FiUser} placeholder="Nome" />
                <Input name="email" icon={FiMail} placeholder="E-mail" />
                <Input
                  type="password"
                  name="password"
                  icon={FiLock}
                  placeholder="Senha"
                />

                <Button type="submit">Cadastrar</Button>
              </Form>

              <Link to="/">
                <FiArrowLeft />
                Voltar para o início
              </Link>
          </FormContent>

        </AnimationContainer>
      </Content>
    </Container>
  );
};
