import { Container, Content } from "./styled";


export function Banner ({
    tituloSuperior ="Um novo ritmo começa aqui", 
    tituloMeio = "Organize hoje. Faça amanhã.", 
    tituloInferior = "Um jeito mais leve de cuidar das tarefas e acompanhar o mercado. Seu espaço, do seu jeito.", 
    variant = "padrao"

}) {
    return (
        <Container $variant={variant}>
            <Content>
                <span>{tituloSuperior}</span>
                <h1>{tituloMeio}</h1>
                <p>{tituloInferior}</p>
            </Content>
        </Container>
        
    )


}