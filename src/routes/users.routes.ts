import type {
  IncomingMessage,
  ServerResponse,
} from "node:http";

export function usersRoutes(
  request: IncomingMessage,
  response: ServerResponse,
) {
  const { method, url } = request;

  if (method === "GET" && url === "/usuarios") {
    response.writeHead(200, {
      "Content-Type": "application/json",
    });

    return response.end(
      JSON.stringify([
        { id: 1, nome: "Douglas" },
        { id: 2, nome: "Samuel" },
      ]),
    );
  }

  return false;
}