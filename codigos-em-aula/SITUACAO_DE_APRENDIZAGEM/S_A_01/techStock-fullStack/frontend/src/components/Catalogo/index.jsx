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


export function Catalogo({
titulo, 
  descricao, 
  equipamentos = [], 
  mostrarAcoes = false, 
  onEdit,     
  onDelete,   
  paginaAtual,
  totalPaginas,
  onPaginaAnterior,
  onPaginaProxima



}) {
  
    

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
               <th>Data Aquis.</th>
               <th>Situação</th>
               {mostrarAcoes && <th>Ações</th>}
            </tr>
          </thead>

          <tbody>
            {equipamentos.map((equipamento) => (
              <tr key={equipamento.id}>
                <td>{equipamento.id}</td>
                <td>{equipamento.nome}</td>
                <td>{equipamento.categoria}</td>
                <td>{equipamento.numero_serie}</td>
                <td>{equipamento.data_aquisicao?.split('-').reverse().join('/')}</td>
                <td>               
                  <Status 
                    // Mapeia o status do banco para a variável CSS (minúscula/sem acento)
                    $status={
                      equipamento.status === "Disponível" ? "disponivel" :
                      equipamento.status === "Emprestado" ? "emprestado" : 
                      "manutencao"
                    }
                  >
                    ⏺&nbsp;
                    {/* Imprime o status exatamente como veio do banco */}
                    {equipamento.status} 
                  </Status>
                </td>

                {/* BOTÕES DE EDITAR E EXCLUIR */}
                {mostrarAcoes && (
                  <td>
                    <Acoes>
                      <BotaoAcao
                        type="button"
                        $tipo="editar"
                        onClick={() => onEdit?.(equipamento)}
                      >
                        ✎ᝰEditar
                      </BotaoAcao>

                      <BotaoAcao
                        type="button"
                        $tipo="excluir"
                        onClick={() => onDelete?.(equipamento.id)}
                      >
                        ✘Excluir
                      </BotaoAcao>
                    </Acoes>
                  </td>
                )}
              </tr>
            ))}

            {/* Mensagem quando não existir equipamento */}
            {equipamentos.length === 0 && (
              <tr>
                <td colSpan={mostrarAcoes ? "7" : "6"}>
                  Nenhum equipamento encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </Tabela>
      </TabelaContainer>

      {/* PAGINAÇÃO */}
      <Paginacao>
        <span>
          {equipamentos.length} equipamento(s) listado(s) nesta página
        </span>

        <div>
          <BotaoPagina
            type="button"
            onClick={onPaginaAnterior}
            disabled={paginaAtual === 1 || !paginaAtual}
          >
            Anterior
          </BotaoPagina>

          <span>
            Página {paginaAtual || 1} de {totalPaginas || 1}
          </span>

          <BotaoPagina
            type="button"
            onClick={onPaginaProxima}
            disabled={paginaAtual >= totalPaginas || !paginaAtual}
          >
            Próximo
          </BotaoPagina>
        </div>
      </Paginacao>
    </Painel>
  );
}
