import http from "node:http";

import { usersRoutes } from "./routes/users.routes.js";

const server = http.createServer((request, response) => {
  console.log({
    method: request.method,
    url: request.url,
  });

  const routeHandled = usersRoutes(request, response);

  if (routeHandled !== false) {
    return;
  }

  response.writeHead(404, {
    "Content-Type": "application/json",
  });

  return response.end(
    JSON.stringify({
      message: "Rota não encontrada",
    }),
  );
});

server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});