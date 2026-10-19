#!/bin/bash

# Cores para o terminal
VERDE='\033[0;32m'
AZUL='\033[0;36m'
AMARELO='\033[1;33m'
SEM_COR='\033[0m'

while true; do
    clear
    echo -e "${AZUL}========================================================${SEM_COR}"
    echo -e "${VERDE}         SINCRONIZADOR GIT + REACT (LINUX)              ${SEM_COR}"
    echo -e "${AZUL}========================================================${SEM_COR}"
    echo ""
    echo "  [1] INICIAR TRABALHO (git pull --rebase + npm install)"
    echo "  [2] SALVAR E ENVIAR  (git add + commit + push)"
    echo "  [3] VER STATUS       (git status)"
    echo "  [4] RODAR PROJETO    (npm run dev)"
    echo "  [0] SAIR"
    echo ""
    echo -e "${AZUL}========================================================${SEM_COR}"
    read -p "Escolha uma opção (0-4): " opcao

    case $opcao in
        1)
            echo ""
            echo -e "${AMARELO}[1/2] Baixando atualizações do GitHub...${SEM_COR}"
            git pull --rebase origin main
            echo ""
            echo -e "${AMARELO}[2/2] Verificando dependências do projeto (npm install)...${SEM_COR}"
            if [ -f "package.json" ]; then
                npm install
            else
                echo "Aviso: package.json não encontrado nesta pasta. Pulando npm install."
            fi
            echo ""
            echo -e "${VERDE}Pronto! Ambiente atualizado.${SEM_COR}"
            read -p "Pressione ENTER para voltar ao menu..."
            ;;
        2)
            echo ""
            git status
            echo ""
            read -p "Digite a mensagem do commit (ou ENTER para data/hora automática): " msg
            if [ -z "$msg" ]; then
                msg="Atualização automática em $(date '+%d/%m/%Y às %H:%M')"
            fi
            echo ""
            echo -e "${AMARELO}[1/4] Adicionando arquivos (git add .)...${SEM_COR}"
            git add .
            echo -e "${AMARELO}[2/4] Criando commit...${SEM_COR}"
            git commit -m "$msg"
            echo -e "${AMARELO}[3/4] Sincronizando com o GitHub (git pull --rebase)...${SEM_COR}"
            git pull --rebase origin main
            echo -e "${AMARELO}[4/4] Enviando para o GitHub (git push)...${SEM_COR}"
            git push origin main
            echo ""
            echo -e "${VERDE}Alterações enviadas com sucesso!${SEM_COR}"
            read -p "Pressione ENTER para voltar ao menu..."
            ;;
        3)
            echo ""
            git status
            echo ""
            read -p "Pressione ENTER para voltar ao menu..."
            ;;
        4)
            echo ""
            echo -e "${VERDE}Iniciando servidor Vite (Pressione Ctrl+C para parar)...${SEM_COR}"
            npm run dev
            read -p "Pressione ENTER para voltar ao menu..."
            ;;
        0)
            echo "Saindo..."
            exit 0
            ;;
        *)
            echo "Opção inválida!"
            sleep 1
            ;;
    esac
done
