//공통 responseDTO
export type TGetResponse<T> = {
  success: boolean;
  error: string;
  data: T;
};
