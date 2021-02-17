import express from "express";
import bodyParse from "body-parser";
import cors from "cors";
import webpush from "web-push";
import { salvarSeguro, listarSeguros } from "./seguro-service";

const vapidKeys = {
  publicKey:
    "BHK97kOZFC2bD76EOWhNPmRTAnaJhCWAAZ1lUPqgE0j7qDXvW7SOx27t1EIfdlwatfpf-6y-3zJBCtNS7ZMVMWQ",
  privateKey: "IRWqRgMnUEvpIz3aId4sJlYYbIbftw949ankoCj3j88",
};

webpush.setVapidDetails(
  "danubio.bwm@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const app = express();
app.use(bodyParse.json());

app.use(cors({ origin: true, credentials: true }));

app.route("/api/seguros").post(salvarSeguro);
app.route("/api/seguros").get(listarSeguros);

const HOST = "localhost";
const PORT = 3333;

const httpServer = app.listen(PORT, HOST, () => {
  console.log(`Servidor ON em http://${HOST}:${PORT}`);
});
