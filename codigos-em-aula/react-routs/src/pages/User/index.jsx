import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header"; 
import { Container, Card, Avatar, Button, ButtonsContainer } from "./styled";

export function User() {
    const { id } = useParams()

    const currentId = Number(id);

    const navigate = useNavigate()

    function handleClick(){
        navigate('/home')
    }

    const [user, setUser] = useState(null)
    const idAtual = Number(id);

    useEffect(()=> {
        async function getUser() {
            const response = await axios.get(
                `https://reqres.in/api/users/${idAtual}`,
                {
                    headers: {
                        'x-api-key': import.meta.env.API_KEY
                    }
                }
            )

            const data = response.data.data

            setUser(data)
        }

        getUser()
    }, [id])

    function prevUser() {
        
        if (idAtual > 1) {
            navigate(`/users/${currentId - 1}`);
        }
    }

    function nextUser() {
        navigate(`/users/${idAtual + 1}`);
    }

      
    
    return (
        <div>
            <Header />
            <Container>
                <Card>


                    {
                    user === null ?
                    (
                        <h1>Carregando...</h1>
                    ) : (
                        <div>
                            <img src={user.avatar} alt="" />
                            <h1>Nome: {user.first_name}</h1>
                            <h2>Sobrenome: {user.last_name}</h2>
                            <h2>Contato: {user.email}</h2>
                        </div>
                    )                
                }

                      <ButtonsContainer>
                        <Button onClick={prevUser}> Anterior</Button>
                        
                          <Button onClick={handleClick}>  🏠︎ Home</Button>
                  

                        <Button onClick={nextUser}>Próximo</Button>                        
                      </ButtonsContainer>
                </Card>
            </Container>
        </div>
    );
}