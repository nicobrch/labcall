import { API_PATH } from "@/config";
import { useCallback, useEffect, useState } from "react";

export const STATUS_LOADING = "status_loading";
export const STATUS_ERROR = "status_error";
export const STATUS_DEFAULT = "status_default";

type StatusType =
  | typeof STATUS_LOADING
  | typeof STATUS_ERROR
  | typeof STATUS_DEFAULT;

interface CallGetApiOptions {
  defaultValue?: any;
  config?: RequestInit;
  defaultStatus?: StatusType;
}

interface ApiError {
  status: number;
  message: string;
}

export const useCallGetApi = (
  url: string,
  options: CallGetApiOptions = {}
): [any, () => void, StatusType, ApiError | null] => {
  const { defaultValue = null, config = null, defaultStatus } = options;

  const [payload, setPayload] = useState(defaultValue);
  const [status, setStatus] = useState<StatusType>(
    defaultStatus || STATUS_DEFAULT
  );
  const [errorInfo, setErrorInfo] = useState<ApiError | null>(null);

  const call = useCallback(async () => {
    setStatus(STATUS_LOADING);
    fetch(`/api${url}`, {
      method: "GET",
      headers: {},
      ...config,
    })
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok) {
          const message = result?.error || "Error desconocido";
          throw { status: response.status, message };
        }
        setPayload(result);
        setStatus(STATUS_DEFAULT);
      })
      .catch((err) => {
        setStatus(STATUS_ERROR);
        setErrorInfo(err);
        return err;
      });
  }, [url]);

  return [payload, call, status, errorInfo];
};
