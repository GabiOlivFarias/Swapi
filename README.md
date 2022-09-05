# Front end template v1.0.0 - Front

## Dependências

 - Node v14.16.1
    - Caso não tenha o Node instalado em sua máquina, recomendamos o uso do [NVM](https://github.com/creationix/nvm) para a instalação do mesmo.
 - Git e Git Flow
 - Vue >= 2.5.21
 - NPM >= 5.6.0

### Importante

*Tirar isso aqui quando for para o seu projeto*

> Alterar o `package.json`
> Alterar o `deploy.rb`
> Alterar o `manifest.json`

**Recursos e componentes disponíveis**
- Componente de upload de fotos com preview(PhotoUploader.vue)
- Campo de senha com botão para deixar disponível visualizar a senha(dentro de RegisterForm.vue)

*Tirar isso aqui quando for para o seu projeto*

### Download

Acesse via terminal o local dos seus projetos e faça o download do repositório.
```bash
$ git clone git@gitlab.com:jera-software/front-end-template.git
```

Para utilização do ambiente de desenvolvimento configure o Git Flow.
```bash
$ sudo apt-get install git-flow
$ git flow init
```
Pressione Enter para todas as opções que serão exibidas. Depois disso você já estará na branch de development.

Caso opte por não utilizar Git Flow, será necessário fazer o download da branch `develop` remota.

---------------

## Configurações

Dentro da pasta do projeto, crie o arquivo `.nvmrc` e atualize a versão utilizada do Node.
```bash
$ echo "v14.16.1" > .nvmrc
$ nvm use
```

### Instalação das dependências
> Obs: caso ainda não possua o Vue instalado, rode o comando `npm install -g vue`.
> Caso queria instalar o CLI oficial do Vue, rode o comando `npm install -g @vue/cli`.

Utilize a ferramenta `npm` para instalar os pacotes necessários no projeto.
```bash
$ npm install
```

---------------

## Comandos

**Start do Servidor**
```bash
$ npm run serve
```

**Corrigir lint**
```bash
$ npm run lint
```
