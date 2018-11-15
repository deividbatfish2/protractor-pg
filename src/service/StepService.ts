import { StepRepository } from "../repository/step.repository";
import { Step } from "../entity/Step";
import { ConfigConnection } from "../connection/configConnection";
import { BaseService } from "./base/BaseService";

export class StepService extends BaseService<Step> {}