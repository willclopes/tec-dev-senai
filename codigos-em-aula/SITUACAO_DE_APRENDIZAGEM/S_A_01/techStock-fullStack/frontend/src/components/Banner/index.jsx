
import {ContainerBanner, ConteudoBanner, EtiquetaBanner, TituloBanner, DescricaoBanner } from "./styled.jsx";



export default function Banner({ tituloSuperior, title, description }) {
  return (
    <ContainerBanner>

        <ConteudoBanner> 
            
            <EtiquetaBanner> ✦ {tituloSuperior} </EtiquetaBanner>
 
        <TituloBanner> {title} </TituloBanner>
 
        <DescricaoBanner> {description} </DescricaoBanner>

      </ConteudoBanner>

     

    </ContainerBanner>
  );
}
