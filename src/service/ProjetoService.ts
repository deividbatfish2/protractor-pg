import { ProjetoRepository } from "../repository/projeto.repository";
import { Projeto } from "../entity/Projeto";
import { ConfigConnection } from "../connection/configConnection";
import { BaseService } from "./base/BaseService";

export class ProjetoService extends BaseService<Projeto>{}