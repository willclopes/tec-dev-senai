import styled from 'styled-components';

export const BannerWrapper = styled.section`
background: ${({ $variant }) => {
    if ($variant === "BemVindo") return "var(--grad-sunset-banner)";
    if ($variant === "auth") return "var(--grad-neon-synth)";
    if ($variant === "tarefas") return "var(--grad-ocean-cyan)";
    if ($variant === "cripto") return "var(--grad-cosmic-void)";
    if ($variant === "favoritos") return "var(--grad-gold-premium)";
    if ($variant === "conversor") return "var(--grad-toxic-lime)";
    if ($variant === "assinatura") return "var(--grad-solar-flare)";
    if ($variant === "admin") return "var(--grad-berry-admin)";
    return "var(--gradient-banner)";
  }};

width: 100%; 
  border-radius: var(--radius-lg);
  padding: 32px 28px; 
  color: var(--text-white); 
  box-shadow: var(--shadow-soft); 
  margin-bottom: 28px; 
  text-align: center;
  border: white solid 3px;
`;
export const BannerBadge = styled.span`
  display: inline-block; 
  background: rgba(255, 255, 255, 0.25); 
  padding: 6px 16px;
  border-radius: 999px; 
  font-size: 0.78rem; 
  font-weight: 800; 
  letter-spacing: 0.8px; 
  margin-bottom: 12px;
`;
export const BannerTitle = styled.h2`
  font-size: 1.9rem; 
  font-weight: 800; 
  margin-bottom: 8px;
`;

export const BannerSubtitle = styled.p`
  font-size: 1rem; 
  opacity: 0.95; 
  max-width: 720px; 
  margin: 0 auto;
`;