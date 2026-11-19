#!/bin/bash

# Cores para o terminal
VERDE='\033[0;32m'
AZUL='\033[0;36m'
AMARELO='\033[1;33m'
SEM_COR='\033[0m'

REPO_PADRAO="https://github.com/willclopes/tec-dev-senai.git"

while true; do
    clear
    echo -e "${AZUL}================================================================${SEM_COR}"
    echo -e "${VERDE}           SINCRONIZADOR GIT + REACT (LINUX) - v2               ${SEM_COR}"
    echo -e "${AZUL}================================================================${SEM_COR}"
    echo ""
    echo -e "${AMARELO}  --- ROTINA DO DIA A DIA ---${SEM_COR}"
    echo "  [1] INICIAR TRABALHO (git pull --rebase + npm install)"
    echo "  [2] SALVAR E ENVIAR  (git add + commit + push)"
    echo "  [3] VER STATUS       (git status)"
    echo "  [4] RODAR PROJETO    (npm run dev)"
    echo ""
    echo -e "${AMARELO}  --- CONFIGURAÇÃO INICIAL (1x POR COMPUTADOR / PROJETO) ---${SEM_COR}"
    echo "  [5] CONFIGURAR USUÁRIO GIT (Willian / willclopes@gmail.com)"
    echo "  [6] PRIMEIRO ENVIO DO ZERO (git init + remote + first push)"
    echo "  [7] CLONAR PROJETO EM PC NOVO (git clone)"
    echo ""
    echo "  [0] SAIR"
    echo ""
    echo -e "${AZUL}================================================================${SEM_COR}"
    read -p "Escolha uma opção (0-7): " opcao

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
        5)
            echo ""
            echo -e "${AMARELO}Configurando usuário e e-mail global do Git...${SEM_COR}"
            git config --global user.name "Willian"
            git config --global user.email "willclopes@gmail.com"
            echo ""
            echo -e "${VERDE}Configuração concluída! Valores atuais:${SEM_COR}"
            git config --global user.name
            git config --global user.email
            echo ""
            read -p "Pressione ENTER para voltar ao menu..."
            ;;
        6)
            echo ""
            echo -e "${AMARELO}ATENÇÃO: Use apenas para iniciar um projeto novo do zero!${SEM_COR}"
            read -p "URL do GitHub (ou ENTER para $REPO_PADRAO): " repo_url
            if [ -z "$repo_url" ]; then
                repo_url="$REPO_PADRAO"
            fi
            echo ""
            echo -e "${AMARELO}[1/7] Configurando usuário Git...${SEM_COR}"
            git config --global user.name "Willian"
            git config --global user.email "willclopes@gmail.com"
            echo -e "${AMARELO}[2/7] Criando README.md (se não existir)...${SEM_COR}"
            [ ! -f "README.md" ] && echo "# tec-dev-senai" >> README.md
            echo -e "${AMARELO}[3/7] Inicializando repositório (git init)...${SEM_COR}"
            git init
            echo -e "${AMARELO}[4/7] Adicionando arquivos (git add .)...${SEM_COR}"
            git add README.md
            git add .
            echo -e "${AMARELO}[5/7] Criando primeiro commit...${SEM_COR}"
            git commit -m "first commit"
            echo -e "${AMARELO}[6/7] Definindo branch main e conectando ao GitHub...${SEM_COR}"
            git branch -M main
            git remote remove origin 2>/dev/null
            git remote add origin "$repo_url"
            echo -e "${AMARELO}[7/7] Fazendo o primeiro envio (git push -u origin main)...${SEM_COR}"
            git push -u origin main
            echo ""
            echo -e "${VERDE}Primeiro envio finalizado!${SEM_COR}"
            read -p "Pressione ENTER para voltar ao menu..."
            ;;
        7)
            echo ""
            read -p "URL para clonar (ou ENTER para $REPO_PADRAO): " repo_url
            if [ -z "$repo_url" ]; then
                repo_url="$REPO_PADRAO"
            fi
            git config --global user.name "Willian"
            git config --global user.email "willclopes@gmail.com"
            git clone "$repo_url"
            echo ""
            echo -e "${VERDE}Repositório clonado! Entre na pasta criada e rode a Opção [1].${SEM_COR}"
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
