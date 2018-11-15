import { StepRepository } from "../repository/Step.repository";
import { Step } from "../entity/Step";
import { ConfigConnection } from "../connection/configConnection";
import { BaseService } from "./base/Base.service";

export class StepService extends BaseService<Step> {}