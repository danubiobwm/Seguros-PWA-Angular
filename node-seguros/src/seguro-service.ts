import { Request, Response } from 'express';
const { SEGUROS } = require('./in-memory-db');

const salvarSeguro = (req: Request, res: Response) => {
  const seguro = req.body;

  SEGUROS.push(seguro);
  console.log('Seguro adicionado', seguro);
  res.status(200).json({ message: 'Seguro adicionado com Sucesso' })
}

const listarSeguros = (req: Request, res: Response) => {
  res.status(200).json(SEGUROS);
}

export {listarSeguros, salvarSeguro};