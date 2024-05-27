import React, { type ChangeEvent, useCallback, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiLock, FiMail, FiUser, FiCamera, FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";
import * as Yup from "yup";

import { Form } from "@unform/web";
import { type FormHandles } from "@unform/core";

import { useToast } from "../../hooks/Toast";
import { useAuth } from "../../hooks/Auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, AvatarInput, Content } from "./styles";

interface ProfileFormData {
  name: string;
  email: string;
  password: string;
}

export const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = useCallback(async (data: ProfileFormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um email válido"),
        password: Yup.string().min(6, "No minimo 6 digitos"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.put("/profile/update", data).then((response) => {
        updateUser(response.data);
        addToast({
          type: "success",
          title: "Avatar atualizado!",
          description: "",
        });

        navigate("/");
      });
    } catch (err: any) {
      addToast({
        type: "error",
        title: "Erro ao atualizar!",
        description: "Ocorreu um erro ao tentar atualizar, cheque seus dados",
      });
    }
  }, []);

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append("avatar", e.target.files[0]);

        api.patch("/users/avatar", data).then((response) => {
          updateUser(response.data);
          addToast({
            type: "success",
            title: "Avatar atualizado!",
            description: "",
          });
        });
      }
    },
    [addToast, updateUser]
  );

  return (
    <Container>
      <header>
        <div>
          <Link to="/dashboard">
            <FiArrowLeft />
          </Link>
        </div>
      </header>

      <Content>
        <Form
          placeholder={false}
          onPointerEnterCapture={false}
          onPointerLeaveCapture={false}
          ref={formRef}
          initialData={{ name: user.name, email: user.email }}
          onSubmit={handleSubmit}
        >
          <AvatarInput>
            <img
              src={
                user.avatar_url
                  ? user.avatar_url
                  : require("../../assets/pngwing.com.png")
              }
              alt={user.name}
            />
            <label htmlFor="avatar">
              <FiCamera />

              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
          </AvatarInput>

          <h1>Meu perfil</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input
            containerStyle={{ marginTop: 24 }}
            name="old_password"
            icon={FiLock}
            type="password"
            placeholder="Senha Atual"
          />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Nova senha"
          />
          <Input
            name="password_confirmation"
            icon={FiLock}
            type="password"
            placeholder="Confirmar senha"
          />

          <Button type="submit">Confirmar mundanças</Button>
        </Form>
      </Content>
    </Container>
  );
};
