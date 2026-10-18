import { useState, useEffect } from "react";

import { CardContainer, FormContainer, HighlightBox, MainContainer, PreviewContainer, ResultCard, StatusBadge } from "./styled";


export function Main() {

  const [titulo, setTitulo] = useState("Simulador de Investimentos - React")
 
  const [nomeMeta, setNomeMeta] = useState("Reserva de Emergência");
  const [valorInicial, setValorInicial] = useState("1000");
  const [aporteMensal, setAporteMensal] = useState(300);
  const [meses, setMeses] = useState(12);
  const [taxaMensal, setTaxaMensal] = useState(1.0);



  const [totalInvestido, setTotalInvestido] = useState(0);
  const [totalJuros, setTotalJuros] = useState(0);
  const [valorFinal, setValorFinal] = useState(0);
  const [avisoDica, setAvisoDica] = useState("");


useEffect(() => {
        // Muda o título da aba do navegador assim que a página carrega
        document.title = "Simulador React | useEffect";
        console.log("Página carregada pela primeira vez!");

        setTimeout(() => {
            setTitulo("Parametros da Meta 🎯");
        }, 2000);
    }, []);


    useEffect(() => {
      const inicial = Number(valorInicial) || 0;
      const mensal = Number(aporteMensal) || 0;
      const tempo = Number(meses) || 0;
      const taxa = (Number(taxaMensal) || 0) / 100;

      let acumulado = inicial;
      for (let i=1; i <= tempo; i++){
        acumulado = acumulado * (1 + taxa) + mensal;
        }

        const investido = inicial + (mensal * tempo)
        const rendimento = acumulado - investido

        setTotalInvestido(investido)
        setTotalJuros(rendimento)
        setValorFinal(acumulado)

        if (tempo >= 36) {
            setAvisoDica("Excelente! No longo prazo os juros compostos multiplicam seu patrimônio.");
        } else if (mensal === 0) {
            setAvisoDica("Dica: Tente colocar um aporte mensal para acelerar sua meta!");
        } else {
            setAvisoDica("Simulação ativa! Altere qualquer valor ao lado e veja a mágica acontecer.");
        }
    }, [valorInicial, aporteMensal, meses, taxaMensal]
  )
    

  
  return (
      <MainContainer>
          <CardContainer>
              <h2>{titulo}</h2>
              
              <FormContainer>
                
                <div>
                  <label>1. Qual é o nome da sua meta?</label>
                  <input
                  type="text"
                  value={(nomeMeta)}
                  onChange={(e) => setNomeMeta(e.target.value)}
                  placeholder="Ex: Comprar um carro, Viagem..."
                  />
                </div>

                <div>
                  <label>2. Valor Inicial (R$)</label>
                  <input
                  type="number"
                  value={(valorInicial)}
                  onChange={(e) => setValorInicial(e.target.value)}
                  placeholder="1000"
                  />
                </div>

                <div>
                  <label>3. Quanto vai guardar por mês? (R$)</label>
                  <input
                  type="number"
                  value={(aporteMensal)}
                  onChange={(e) => setAporteMensal(e.target.value)}
                  placeholder="1000"
                  />
                </div>

                <div>
                  <label>4. Por quantos meses? ({meses} meses)</label>
                  <input
                  type="range" 
                  min="1" 
                  max="120" 
                  value={meses}
                  onChange={(e) => setMeses(e.target.value)}
                  />
                </div>

                <div>
                  <label>5. Perfil de Rendimento (Taxa Mensal)</label>
                    <div className="botoes-taxa">
                      <button 
                          type="button" 
                          className={taxaMensal === 0.6 ? "ativo" : ""}
                          onClick={() => setTaxaMensal(0.6)}
                      >
                        Poupança (0.6%)
                    </button>
                    
                    <button 
                        type="button" 
                        className={taxaMensal === 1.0 ? "ativo" : ""}
                        onClick={() => setTaxaMensal(1.0)}
                    >
                        CDB / Renda Fixa (1.0%)
                    </button>
                    
                    <button 
                        type="button" 
                        className={taxaMensal === 1.4 ? "ativo" : ""}
                        onClick={() => setTaxaMensal(1.4)}
                    >
                        Arrojado (1.4%)
                            </button>
                        </div>
                    </div>
                </FormContainer>
            </CardContainer>

              <PreviewContainer>

                <div className="cabecalho-preview">
                    <h2>Projeção em Tempo Real</h2>
                    <StatusBadge>⚡ useEffect Ativo</StatusBadge>
                </div>

                <HighlightBox>
                    <span>Meta: {nomeMeta || "Sem nome"}</span>
                    <h3>R$ {valorFinal.toFixed(2)}</h3>
                    <small>Acumulado após {meses} meses (Taxa de {taxaMensal}% a.m.)</small>
                </HighlightBox>

                <ResultCard>
                    <div className="item">
                        <span>Total que saiu do seu bolso:</span>
                        <p>R$ {totalInvestido.toFixed(2)}</p>
                    </div>

                    <div className="item lucro">
                        <span>Dinheiro ganho só com Juros:</span>
                        <p>+ R$ {totalJuros.toFixed(2)}</p>
                    </div>
                </ResultCard>

                <div className="dica-box">
                    💡 {avisoDica}
                </div>
              </PreviewContainer>
    </MainContainer>
  )
}