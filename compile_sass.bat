cd %~dp0/src/styles
start node-sass main.scss css/main.css
IF errorlevel 1 (echo Unsuccessful) ELSE (echo Sass compiled successfully!)
pause