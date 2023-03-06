
<div align="center">

<h1>NetworkPoll</h1>

</div>

NetworkPoll is Ethereum network based E2E secure voting system using Cloud and Blockchain to maintain voter confidentiality.

![](/assets/architecture/NEPOLL_ARCH.png)

## Tech Stack
![Grafana](https://img.shields.io/badge/grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white)
![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![CircleCI](https://img.shields.io/badge/circle%20ci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

## Project File Description

| Files/Folders `(Path)` | Description |
| -------- | -------- |
| `assets`     | Consist public assets and architecture diagrams    |
| `build`     | Consist Contracts ABIs for interactions with smart contract.    |
| `client`     |   Folder consists React framework to build client voting window.  |
| `contract`     | It consists of Solidity smart contract    | 
| `migrations`     | Contains Deployment Scripts  | 
| `mobile`     | Voter/Client-side Mobile device     |
| `src`     | Application encryptions using Flask framework - python based framework    |
| `test`     | Contract Testing folder    |
| `truffle-config.js`     | Truffle configuration file   |
| `src/modules`     | Contains Encryption algorithms   |
| `client/src`     | React Code    |
| `client/src/components`     | React Components   |
| `mobile/components`     | React Native Components   |


## Application Setup

- Fork the repository [siddhantprateek/networkpoll](https://github.com/siddhantprateek/networkpoll)

- ```shell
    git clone https://github.com/<username>/networkpoll
    cd petrovedge
    ```

### Setting up Python-dev environment

- Install Python3 and above [python.org](https://www.python.org/)

- ```javascript
    cd services
    mkdir <service-name>
    python -m venv .venv
    source .venv/Scripts/activate
    ```

### Setting up Nodejs-dev environment


- Install [NodeJs](https://nodejs.org/en/)

- ```javascript
    cd services
    mkdir <service-name>; cd <service-name>
    npm init -y
    ```



## Endpoints

| Endpoint | Description |
| -------- | -------- |
| `/` | Description |
| `/keys` | Description |


```shell
docker-compose up -d prometheus
docker-compose up -d grafana
docker-compose up -d grafana-dashboards
```
