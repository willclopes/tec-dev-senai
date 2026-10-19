@echo off
chcp 65001 > nul
title Sincronizador Git + React (Windows) - v2
color 0B

:MENU
cls
echo ================================================================
echo           SINCRONIZADOR GIT + REACT (WINDOWS) - v2
echo ================================================================
echo.
echo  --- ROTINA DO DIA A DIA ---
echo  [1] INICIAR TRABALHO (git pull --rebase + npm install)
echo  [2] SALVAR E ENVIAR  (git add + commit + push)
echo  [3] VER STATUS       (git status)
echo  [4] RODAR PROJETO    (npm run dev)
echo.
echo  --- CONFIGURACAO INICIAL (1x POR COMPUTADOR / PROJETO) ---
echo  [5] CONFIGURAR USUARIO GIT (Willian / willclopes@gmail.com)
echo  [6] PRIMEIRO ENVIO DO ZERO (git init + remote + first push)
echo  [7] CLONAR PROJETO EM PC NOVO (git clone + npm install)
echo.
echo  [0] SAIR
echo.
echo ================================================================
set /p opcao="Escolha uma opcao (0-7): "

if "%opcao%"=="1" goto INICIAR
if "%opcao%"=="2" goto SALVAR
if "%opcao%"=="3" goto STATUS
if "%opcao%"=="4" goto RODAR
if "%opcao%"=="5" goto CONFIG_USER
if "%opcao%"=="6" goto FIRST_PUSH
if "%opcao%"=="7" goto CLONAR
if "%opcao%"=="0" exit
goto MENU

:INICIAR
echo.
echo [1/2] Baixando atualizacoes do GitHub...
git pull --rebase origin main
echo.
echo [2/2] Verificando se ha pacotes novos no package.json...
if exist package.json (
    call npm install
) else (
    echo Aviso: package.json nao encontrado nesta pasta. Pulando npm install.
)
echo.
echo Pronto! Seu computador esta atualizado.
pause
goto MENU

:SALVAR
echo.
git status
echo.
set /p msg="Digite a mensagem do commit (ou deixe em branco para usar a data/hora): "
if "%msg%"=="" set msg=Atualizacao automatica em %date% as %time%

echo.
echo [1/4] Adicionando arquivos (git add .)...
git add .

echo [2/4] Criando commit...
git commit -m "%msg%"

echo [3/4] Sincronizando com o GitHub (git pull --rebase)...
git pull --rebase origin main

echo [4/4] Enviando para o GitHub (git push)...
git push origin main

echo.
echo Processo finalizado!
pause
goto MENU

:STATUS
echo.
git status
echo.
pause
goto MENU

:RODAR
echo.
echo Iniciando servidor Vite (Pressione Ctrl+C para parar)...
call npm run dev
pause
goto MENU

:CONFIG_USER
echo.
echo Configurando usuario e e-mail global do Git neste computador...
git config --global user.name "Willian"
git config --global user.email "willclopes@gmail.com"
echo.
echo Configuracao concluida! Valores atuais:
git config --global user.name
git config --global user.email
echo.
pause
goto MENU

:FIRST_PUSH
echo.
echo ================================================================
echo ATENCAO: Use esta opcao APENAS se estiver criando um repositorio
echo novo do zero nesta pasta pela primeira vez!
echo ================================================================
set repo_padrao=https://github.com/willclopes/tec-dev-senai.git
set /p repo_url="Digite a URL do GitHub (ou ENTER para usar %repo_padrao%): "
if "%repo_url%"=="" set repo_url=%repo_padrao%

echo.
echo [1/7] Configurando usuario Git...
git config --global user.name "Willian"
git config --global user.email "willclopes@gmail.com"

echo [2/7] Criando README.md (se nao existir)...
if not exist README.md echo # tec-dev-senai >> README.md

echo [3/7] Inicializando repositorio (git init)...
git init

echo [4/7] Adicionando arquivos (git add .)...
git add README.md
git add .

echo [5/7] Criando primeiro commit...
git commit -m "first commit"

echo [6/7] Definindo branch main e conectando ao GitHub...
git branch -M main
git remote remove origin 2>nul
git remote add origin %repo_url%

echo [7/7] Fazendo o primeiro envio (git push -u origin main)...
git push -u origin main

echo.
echo Primeiro envio finalizado!
pause
goto MENU

:CLONAR
echo.
set repo_padrao=https://github.com/willclopes/tec-dev-senai.git
set /p repo_url="Digite a URL para clonar (ou ENTER para %repo_padrao%): "
if "%repo_url%"=="" set repo_url=%repo_padrao%

echo.
echo Configurando usuario Git...
git config --global user.name "Willian"
git config --global user.email "willclopes@gmail.com"

echo Clonando repositorio...
git clone %repo_url%
echo.
echo Repositorio clonado! Entre na pasta criada e rode a Opcao [1] ou npm install.
pause
goto MENU
