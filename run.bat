@echo off
setlocal

title Civil Connection - Desenvolvimento

echo.
echo ==========================================
echo        CIVIL CONNECTION - START
echo ==========================================
echo.

REM ==========================================
REM 1. Verificar Node.js
REM ==========================================
echo [1/6] Verificando Node.js...

where node >nul 2>&1
if errorlevel 1 (
echo Node.js nao encontrado.
echo Instalando Node.js via Winget...
winget install OpenJS.NodeJS --scope user
if errorlevel 1 (
echo.
echo ERRO: Nao foi possivel instalar o Node.js.
pause
exit /b 1
)
)

echo Node.js encontrado.
node --version
npm.cmd --version

echo.

REM ==========================================
REM 2. Verificar Java
REM ==========================================
echo [2/6] Verificando Java...

where java >nul 2>&1
if errorlevel 1 (
echo.
echo ERRO: Java nao encontrado.
echo O backend precisa do Java 17.
echo.
echo Instale o Java 17 e execute este arquivo novamente.
pause
exit /b 1
)

java -version
echo.

REM ==========================================
REM 3. Instalar dependencias do Tailwind
REM ==========================================
echo [3/6] Instalando dependencias do Tailwind...

cd /d "%~dp0tools\tailwind"

if not exist package.json (
echo.
echo ERRO: tools\tailwind\package.json nao encontrado.
pause
exit /b 1
)

call npm.cmd install

if errorlevel 1 (
echo.
echo ERRO ao instalar dependencias do Tailwind.
pause
exit /b 1
)

echo.

REM ==========================================
REM 4. Build do Tailwind
REM ==========================================
echo [4/6] Gerando CSS do Tailwind...

call npm.cmd run build

if errorlevel 1 (
echo.
echo ERRO no build do Tailwind.
pause
exit /b 1
)

echo.

REM ==========================================
REM 5. Iniciar Tailwind Watch em nova janela
REM ==========================================
echo [5/6] Iniciando Tailwind Watch...

start "Civil Connection - Tailwind Watch" cmd /k ^
"cd /d ""%~dp0tools\tailwind"" && npm.cmd run watch"

echo Tailwind Watch iniciado.
echo.

REM ==========================================
REM 6. Iniciar Backend Spring Boot
REM ==========================================
echo [6/6] Iniciando Backend Spring Boot...

cd /d "%~dp0backend"

if not exist gradlew.bat (
echo.
echo ERRO: backend\gradlew.bat nao encontrado.
pause
exit /b 1
)

REM Corrige o erro windows-1252 / UTF-8
set "JAVA_TOOL_OPTIONS=-Dfile.encoding=UTF-8"

echo.
echo ==========================================
echo Backend iniciando...
echo ==========================================
echo.
echo Site:
echo http://localhost:8080/
echo.
echo API:
echo http://localhost:8080/api/stats
echo.
echo H2 Console:
echo http://localhost:8080/h2-console
echo.
echo Nao feche esta janela enquanto estiver usando o projeto.
echo.

call gradlew.bat bootRun

echo.
echo ==========================================
echo Backend encerrado.
echo ==========================================
pause
