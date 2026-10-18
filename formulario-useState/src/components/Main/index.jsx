import { useState } from "react";
import { Button, ClearButton, EmptyState, Form, FormSection, InputGroup, MainContainer, ResultItem, ResultSection, SplitCard, Title } from "./styled";

export function Main() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState("");
    const [interesse, setInteresse] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [dadosEnviados, setDadosEnviados] = useState(null)


    function handleSubmit(e) {
        e.preventDefault();

    
        setDadosEnviados ({
            nome: nome,
            email: email,
            idade: idade,
            interesse: interesse,
            mensagem: mensagem

        });
    }

    function handleClear() {
        setNome("");
        setEmail("");
        setIdade("");
        setInteresse("");
        setMensagem("");
        
        setDadosEnviados(null);
    }



	return (
        <MainContainer>
          <SplitCard>
                <FormSection>
                <Title>Pesquisa de Interesse de Curso</Title>

                <Form onSubmit={handleSubmit}>
                    
                    
                    <InputGroup>
                        <label> 1. Qual é o Seu nome? </label>
                        <input 
                        type="text" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Digite seu nome"
                        required           
                        />                              
                    </InputGroup>   

                    <InputGroup>
                        <label> 2. Qual é o seu e-mail? </label>
                        <input 
                        type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="exemplo@email.com"
                        required           
                        />                              
                    </InputGroup>   

                    <InputGroup>
                        <label> 3. Qual é a sua idade? </label>
                        <input 
                        type="number" 
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                        placeholder="Ex: 25"
                        required           
                        />                              
                    </InputGroup>   

                    <InputGroup>
                        <label> 4. Qual curso deseja fazer? </label>
                        <select 
                        value={interesse}
                        onChange={(e) => setInteresse(e.target.value)}
                        >
                            <option value="">Selecione uma opção...</option>
                            <option value="Front-end">Front-end (React, CSS, HTML)</option>
                            <option value="Back-end">Back-end (Node, Python, Java)</option>
                            <option value="Design">UI/UX Design</option>
                        </select>                               
                    </InputGroup>   

                    <InputGroup>
                        <label> 5. Deixe uma mensagem sobre seus estudos: </label>
                        <textarea
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        placeholder="O que você espera do Curso?"
                        rows="3"
                        required           
                        />                              
                    </InputGroup>   

                    <Button type="submit">Enviar Respostas</Button>

                </Form>
                    </FormSection>


           <ResultSection>
                    {dadosEnviados ? (
                        <div>
                            <Title style={{ color: "white" }}>Dados Recebidos!</Title>
                            
                            <ResultItem>
                                <span>Nome:</span>
                                <p>{dadosEnviados.nome}</p>
                            </ResultItem>
                            
                            <ResultItem>
                                <span>E-mail:</span>
                                <p>{dadosEnviados.email}</p>
                            </ResultItem>
                            
                            <ResultItem>
                                <span>Idade:</span>
                                <p>{dadosEnviados.idade} anos</p>
                            </ResultItem>
                            
                            <ResultItem>
                                <span>Área de Estudo:</span>
                                <p>{dadosEnviados.interesse}</p>
                            </ResultItem>
                            
                            <ResultItem>
                                <span>Mensagem:</span>
                                <p>{dadosEnviados.mensagem}</p>
                            </ResultItem>

                            {/* NOVO: Botão que chama a função handleClear */}
                            <ClearButton onClick={handleClear}>Limpar e Refazer</ClearButton>
                        </div>
                    ) : (
                        <EmptyState>
                            <h2>Pronto para revisar?</h2>
                            <p>Preencha o formulário ao lado e clique em enviar para conferir seus dados aqui.</p>
                        </EmptyState>
                    )}
                </ResultSection>

            </SplitCard>
        </MainContainer>
    );
}