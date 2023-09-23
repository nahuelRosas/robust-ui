import { useState, DependencyList, useEffect } from "react";
import { useGlobalContext } from "@robust-ui/use-global-context";

export function useServerEffect<T>({
  effect,
  dependencies,
}: {
  effect: () => Promise<unknown>;
  dependencies?: DependencyList;
}) {
  // : T[]
  // const serverEffectContext = useGlobalContext({
  //   key: "developerTools",
  //   subKey: "serverEffect",
  // });
  // let callId = serverEffectContext.current;
  // serverEffectContext.current++;
  // const [data, setData] = useState<unknown>(
  //   serverEffectContext.dataContext[callId]?.data || null
  // );
  // const [error, setError] = useState<unknown>(
  //   serverEffectContext.dataContext[callId]?.error || null
  // );
  // if (!serverEffectContext.resolved) {
  //   let cancel = Function.prototype;
  //   const effectPromise = new Promise(async function (resolve): Promise<void> {
  //     cancel = () => {
  //       if (!serverEffectContext.dataContext[callId]) {
  //         serverEffectContext.dataContext[callId] = {
  //           error: new Error("timeout"),
  //           id: callId,
  //         };
  //       }
  //       resolve(callId);
  //     };
  //     return effect()
  //       .then((res) => {
  //         serverEffectContext.dataContext[callId] = { data: res };
  //         resolve(callId);
  //       })
  //       .catch((error) => {
  //         serverEffectContext.dataContext[callId] = { error };
  //         resolve(callId);
  //       });
  //   });
  //   serverEffectContext.requests.push({
  //     id: callId,
  //     promise: effectPromise,
  //     cancel: cancel,
  //   });
  // }
  // useEffect(() => {
  //   if (
  //     serverEffectContext.resolved &&
  //     !serverEffectContext.dataContext[callId]
  //   ) {
  //     effect()
  //       .then((res) => {
  //         setData(res);
  //       })
  //       .catch((error) => {
  //         setError(error);
  //       });
  //   }
  //   delete serverEffectContext.dataContext[callId];
  // }, [
  //   callId,
  //   dependencies,
  //   effect,
  //   serverEffectContext.dataContext,
  //   serverEffectContext.resolved,
  // ]);
  // return [data as T, error as T];
}
