## DICA VSCODE

--Ocultando .js e .map ou outro arquivo

FILE > PREFERENCES > SETTING 

Se for __USER SETTING__ , a configuração vai afetar todo programa.

se for __WORKSPACE SETTING__, a configuação vai afetar somente o workspace.

*WORKSPACE melhor. Pois assim, com a quantidade de projeto e pratica incentivar a fazer isso varias vzs.
Logo, com o passar do tempo vai ser tornar um habito.*

Selecione: WORKSPACE SETTING

Então em setting.json dentro das { }

escreva:
``` 
"files.exclude"

```

assim que digitar o vs CODE vai trazer a configuracao padrao

```
"files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/CVS": true,
        "**/.DS_Store": true
    }
    
```
então pra ocultar um arquivo JS basta acrescentar

```
"files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/CVS": true,
        "**/.DS_Store": true,
        "**/*.js": { 
          "when": "$(basename).ts"
        }
        
    }

```

O bloco de codigo abaixo que foi adicionado significa:
```
"**/*.js": { 
          "when": "$(basename).ts"
        }
```
*Oculte todos os arquivos com extencao .js __Quando__ tiver um mesmo arquivo no mesmo diretorio com a extensao typescript*


para outros arquivos basta somente colocar o true que ele ocultar.

```
"files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/CVS": true,
        "**/.DS_Store": true,
        "**/*.js": {
            "when": "$(basename).ts"
        },
        "**/*.map": true
    }

```





