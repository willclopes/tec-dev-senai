
import { EtiquetaBanner } from "../Banner/styled.jsx";
import {Card, Topo, Legenda, Icone, Numero, LegendaCard, Etiqueta } from "./styled.jsx";

export default function Cards({ tipo, legenda, numerocard, legendacard, icone }) {
  
    return (
    <Card $tipo={tipo}>

      <Topo>

        
            <Legenda>
            {legenda}
            </Legenda>

        
        <Icone>
          {icone}
        </Icone>

      </Topo>

      <Numero>
        {numerocard}
      </Numero>

      <LegendaCard>
        {legendacard}
      </LegendaCard>

    </Card>
  );
}
