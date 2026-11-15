import {
  Painel,
  Titulo,
  Descricao,
  TabelaContainer,
  Tabela,
  Status,
  Paginacao,
  BotaoPagina,
  Acoes,
  BotaoAcao
} from "./styled.jsx";

// Componente reutilizável do catálogo.
// Por enquanto, recebe apenas os textos.
export default function Catalogo({titulo, descricao, equipamentos = [], mostrarAcoes = false, onEditar, onExcluir,}) {
  
    

    return (


      
    <Painel>

      {/* TÍTULO DO CATÁLOGO */}

      <Titulo>
        {titulo}
      </Titulo>

      <Descricao>
        {descricao}
      </Descricao>


      {/* TABELA DE EQUIPAMENTOS */}

      <TabelaContainer>

        <Tabela>

          <thead>
            <tr>
               <th>ID</th>
               <th>Equipamento</th>
              <th>Categoria</th>
              <th>Número de série</th>
              <th>Situação</th>
              
              {mostrarAcoes && (
                  <th>Ações</th>
              )}

            </tr>
          </thead>

         <tbody>


         {equipamentos.map((equipamento) => (

              <tr key={equipamento.id}>

                 <td>{equipamento.id}</td>

                <td>{equipamento.nome}</td>

                <td>{equipamento.categoria}</td>

                <td>{equipamento.numero_serie}</td>

                <td>

                  <Status $status={equipamento.status}>

                    {equipamento.status === "disponivel"
                      ? "Disponível"
                      : equipamento.status === "emprestado"
                      ? "Emprestado"
                      : "Em manutenção"}

                  </Status>

                </td>

 {/* BOTÕES DE EDITAR E EXCLUIR */}

                {mostrarAcoes && (

                  <td>

                    <Acoes>

                      <BotaoAcao
                        type="button"
                        $tipo="editar"
                        //onClick={() => onEditar?.(equipamento)}
                      >
                        Editar
                      </BotaoAcao>


                      <BotaoAcao
                        type="button"
                        $tipo="excluir"
                        //onClick={() => onExcluir?.(equipamento)}
                      >
                        Excluir
                      </BotaoAcao>

                    </Acoes>

                  </td>

                )}

              </tr>

            ))}


            {/* Mensagem quando não existir equipamento */}

            {equipamentos.length === 0 && (

              <tr>
                <td colSpan="4">
                  Nenhum equipamento encontrado.
                </td>
              </tr>

            )}

          </tbody>

        </Tabela>

      </TabelaContainer>


      {/* Quantidade de equipamentos exibidos */}

      <Paginacao>

        {/* Quantidade total de equipamentos */}

        <span>
          {equipamentos.length} equipamento(s) encontrado(s)
        </span>


        {/* Navegação entre páginas */}

        <div>

          <BotaoPagina
            type="button"
            //onClick="1"
            disabled="2"
          >
            Anterior
          </BotaoPagina>

          <span>
            Página "1" de "5"
          </span>

          <BotaoPagina
            type="button"
            //onClick="1"
            disabled="2"
          >
            Próximo
          </BotaoPagina>

        </div>

      </Paginacao>

    </Painel>
  );
}