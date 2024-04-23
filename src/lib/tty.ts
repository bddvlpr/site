export type Line = { message: string; status?: Status };
export type Status = 'FAIL' | 'HEAD' | 'OK' | 'PROG' | 'TIME';
