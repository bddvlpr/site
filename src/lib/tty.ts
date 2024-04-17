export type Line = { message: string; status: Status };
export type Status = 'EMPTY' | 'FAILED' | 'OK' | 'PROGRESS' | 'TIME';

export const lines: Array<Line> = [
  { message: 'Started ACPI event daemon.', status: 'OK' },
  { message: 'Starting LSB: automatic crash report generation...', status: 'EMPTY' },
  { message: 'Starting LSB: record successful boot for GRUB...', status: 'EMPTY' },
  { message: 'Starting LSB: MD monitoring daemon...', status: 'EMPTY' },
  { message: 'Started FUSE filesystem for LXC.', status: 'OK' },
  { message: 'Starting System Logging Service...', status: 'EMPTY' },
  { message: 'Starting Terminate Plymouth Boot Screen...', status: 'EMPTY' }
];

export const statusText = {
  EMPTY: '      ',
  FAILED: 'FAILED',
  OK: '  OK  ',
  PROGRESS: ' PROG ',
  TIME: ' TIME '
};
