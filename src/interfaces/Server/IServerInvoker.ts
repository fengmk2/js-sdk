import { TypeDaprInvokerCallback } from "../../types/DaprInvokerCallback.type";
import { InvokerListenOptionsType } from "../../types/InvokerListenOptions.type";

export default interface IServerInvoker {
    listen(methodName: string, cb: TypeDaprInvokerCallback, options?: InvokerListenOptionsType): Promise<any>;
}