import axios from "axios";
import { useForm } from "react-hook-form";
import { CreateUserContainer, FormBox, Input, Button, Message } from "./styled";
import { Header } from "../../components/Header";
import { useState } from "react";

export function CreateUser() {
    const { register, handleSubmit, reset } = useForm();
    const [state, setState] = useState(null);

    async function onSubmit(data) {
        try {
            const response = await axios.post(
                `https://reqres.in/api/users`, 
                data,
                {
                    headers: {
                        'x-api-key': import.meta.env.API_KEY
                    }
                }
            );

            setState(response.status);
        } catch (error) {
            setState(400);
        } finally {
            reset();
        }
    }

    return (
        <CreateUserContainer>
            <Header/>

            <FormBox onSubmit={handleSubmit(onSubmit)}>
                <Input type="text" placeholder="Nome" {...register("name", {
                    required: "O nome é obrigatorio!",
                    minLength: { value: 2, message: "Mínimo de 2 caracteres!" }
                })}/>
                
                <Input type="text" placeholder="Emprego" {...register("job", {
                    required: "O emprego é obrigatorio!",
                    minLength: { value: 2, message: "Mínimo de 2 caracteres!" }
                })}/>
                
                <Button type="submit">Cadastrar usuário</Button>
                
                {state === 201 && (
                    <Message $isSuccess={true}>Usuário criado com sucesso!</Message>
                )}
                
                {(state !== null && state !== 201) && (
                    <Message $isSuccess={false}>Erro ao cadastrar usuário!</Message>
                )}
            </FormBox>
        </CreateUserContainer>
    );
}