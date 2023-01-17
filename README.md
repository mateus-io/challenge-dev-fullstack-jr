# Challenge Dev Fullstack JR

## Configuração de Ambiente:

- <strong>1º passo</strong> - Navegue até o diretório "backend":

`cd backend`

- <strong>2º passo</strong> - Crie o arquivo ".env" no mesmo local que está o arquivo de exemplo ".env.example":

`touch .env`

- <strong>3º passo</strong> - Copie as variáveis que estão no arquivo ".env.example" e cole no arquivo ".env":

- <strong>4º passo</strong> - Altere o valor das variáveis para atender ao ambiente que você quer testar:

- <strong>5º passo</strong> - Navegue até o diretório "frontend":

`cd ../frontend` (se tiver na pasta backend) ou `cd frontend` (se tiver na raiz do projeto)

- <strong>6º passo</strong> - Crie o arquivo ".env.development" e ".env.production" no mesmo local que estão os arquivos de exemplo ".env.development.example" e ".env.production.example":

`touch .env.development`
`touch .env.production`

- <strong>7º passo</strong> - Copie as variáveis que estão no arquivo ".env.development.example" e ".env.production.example" e cole nos arquivos ".env.development" e ".env.production" respectivamente:

- <strong>8º passo</strong> - Altere o valor das variáveis para atender ao ambiente que você quer testar:

## Como Rodar:

### `Com Docker`

- <strong>1º passo</strong> - Instalar o Docker e o Compose:

<a href="https://docs.docker.com/">Documentação Docker</a>

- <strong>2º passo</strong> - Navegar até o diretório "docker":

`cd docker`

- <strong>3º passo</strong> - Use o seguinte comando para montar toda estrutura:

`docker compose up` ou `docker-compose up`

### `Sem Docker`

- <strong>Pré requisito</strong> - Node JS e npm instalados:

- <strong>1º passo</strong> - Navegar até o diretório "backend":

`cd backend`

- <strong>2º passo</strong> - Lançar o seguinte comando para instalar as dependências:

`npm install --force`

- <strong>3º passo</strong> - Lançar o seguinte comando para buildar e rodar o backend:

`npm run start:prod`

- <strong>4º passo</strong> - Navegar até o diretório "frontend":

`cd frontend`

- <strong>5º passo</strong> - Lançar o seguinte comando para instalar as dependências:

`npm install --force`

- <strong>6º passo</strong> - Lançar o seguinte comando para buildar e rodar o frontend:

`npm run start:prod`
