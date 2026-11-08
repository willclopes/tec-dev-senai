import { BannerBadge, BannerSubtitle, BannerTitle, BannerWrapper } from "./styled";


export function Banner({ 
  badge="🚀 BEM-VINDO AO PRISMPULSE",
  titulo="Organize sua rotina e acompanhe suas Criptomoedas!",
  subtitulo="Gerencie suas tarefas diárias em cartões intuitivos e desbloqueie cotações em tempo real, favoritos e conversor BRL no plano Premium.",
  variant= "BemVindo"
}) {
  
  return (
    <BannerWrapper $variant={variant}>
      <BannerBadge>{badge}</BannerBadge>
      <BannerTitle>{titulo}</BannerTitle>
      <BannerSubtitle>{subtitulo}</BannerSubtitle>
    </BannerWrapper>
  );
}