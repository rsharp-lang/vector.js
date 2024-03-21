@echo off

SET R_HOME=\GCModeller\src\R-sharp\App\net6.0
SET RSCRIPT="%R_HOME%/Rscript.exe"
SET R_ENV="%R_HOME%/R#.exe"

SET pkg="./vjs.zip"

CALL %RSCRIPT% --build /src ../ --skip-src-build /save %pkg%
CALL %R_ENV% --install.packages %pkg%