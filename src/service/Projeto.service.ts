import { ProjetoRepository } from "../repository/Projeto.repository";
import { Projeto } from "../entity/Projeto";
import { ConfigConnection } from "../connection/configConnection";
import { BaseService } from "./base/Base.service";

export class ProjetoService extends BaseService<Projeto>{}