@echo off
chcp 65001 > nul
title Sincronizador Git + React (Windows)
color 0B

:MENU
cls
echo ========================================================
echo        SINCRONIZADOR GIT + REACT (WINDOWS)
echo ========================================================
echo.
echo  [1] INICIAR TRABALHO (git pull --rebase + npm install)
echo  [2] SALVAR E ENVIAR  (git add + commit + push)
echo  [3] VER STATUS       (git status)
echo  [4] RODAR PROJETO    (npm run dev)
echo  [0] SAIR
echo.
echo ========================================================
set /p opcao="Escolha uma opcao (0-4): "

if "%opcao%"=="1" goto INICIAR
if "%opcao%"=="2" goto SALVAR
if "%opcao%"=="3" goto STATUS
if "%opcao%"=="4" goto RODAR
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
