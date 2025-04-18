## 🐳 Executando com Docker

### 🧱 Build da aplicação e banco

```bash
docker-compose build
```

> Um container com banco de dados já é criado e estará pronto para uso.

---

### 🧬 Aplicar migrations

```bash
docker-compose run --rm app npx prisma migrate deploy
```

> Aplica as migrations existentes no banco.

---

### ⚙️ Gerar client do Prisma

```bash
docker-compose run --rm app npx prisma generate
```

> Gera a client library atualizada do Prisma, permitindo ao código acessar os relacionamentos e campos corretamente.

---

### 🌱 Executar seed

```bash
docker-compose run --rm app npm run seed
```

> Popula o banco com produtos previamente cadastrados.

---

### 🚀 Subir a aplicação

```bash
docker-compose up
```

> Inicia a aplicação com todos os serviços necessários.

---

## ✅ O que foi feito

- Atendi todos os requisitos obrigatórios definidos no PDF.
- Implementei meus padrões de **testes unitários** nos módulos `product` e `shopping-cart`.
- Essa camada de testes representa bem meu estilo de trabalho e abordagem de qualidade.

---

## ⚠️ O que ficou pendente

- Ajustar o **container para ambiente de build** e produção.
- Tipar e testar **100% do código**, especialmente em áreas periféricas.
- Proteger dados sensíveis ao exibir pedidos (ex: filtrar informações do usuário).
- Adicionar **filtros globais de exceções** e handlers de erro personalizados.
- Implementar **RBAC (Role-Based Access Control)** real no backend para validar permissões de admin (em vez de confiar apenas na UI).
- Otimizar o envio de imagens usando **stream/base64** ao invés de aumentar o payload.
- Remover itens do carrinho após o pedido ser finalizado.
- Utilizar um **gerenciador de tokens** ao inves de fazer isso manualmente
- Gerar documentação automática via **OpenAPI/Swagger**.

---

## 📌 Observações finais

Acredito que o **backend** ficou mais completo e alinhado com boas práticas do que o frontend, especialmente no que diz respeito a testes, estrutura e clareza de domínio.  
Ainda assim, os pontos levantados acima são cruciais para garantir a robustez e escalabilidade do projeto.
