export type Line = { message: string; status: Status };
export type Status = 'EMPTY' | 'FAILED' | 'OK' | 'PROGRESS' | 'TIME';

export const lines: Array<Line> = [
  { message: 'Reached target Remote File Systems.', status: 'OK' },
  { message: 'Listening on Delayed Shutdown Socket.', status: 'OK' },
  { message: 'Listening on /dev/initctl Compatibility Named Pipe.', status: 'OK' },
  { message: 'Reached target Encrypted Volumes.', status: 'OK' },
  { message: 'Listening on udev Kernel Socket.', status: 'OK' },
  { message: 'Listening on udev Control Socket.', status: 'OK' },
  { message: 'Expecting device dev-disk-by-label\x2droot...', status: 'EMPTY' },
  { message: 'Listening on Journal Socket.', status: 'OK' },
  { message: 'Starting File System Check on Root Device...', status: 'EMPTY' },
  { message: 'Starting udev Kernel Device Manager...', status: 'EMPTY' },
  { message: 'Mounting Debug File System...', status: 'EMPTY' },
  { message: 'Starting Journal Service...', status: 'EMPTY' },
  { message: 'Started Journal Service.', status: 'EMPTY' },
  { message: 'Started Journal Service.', status: 'EMPTY' },
  { message: 'Starting Apply Kernel Variables...', status: 'EMPTY' },
  { message: 'Startin udev Coldplug all Devices...', status: 'EMPTY' },
  { message: 'Mounting Huge Pages File System...', status: 'EMPTY' },
  { message: 'Mounting POSIX Message Queue File System...', status: 'EMPTY' },
  { message: 'Starting Setup Virtual Console...', status: 'EMPTY' },
  { message: 'Starting Set Up Additional Binary Formats...', status: 'EMPTY' },
  { message: 'Mounting Configuration File System...', status: 'EMPTY' },
  { message: 'Started Apply Kernel Variables.', status: 'OK' },
  { message: 'Started udev Kernel Device Manager.', status: 'OK' },
  { message: 'Mounting Arbitrary Executable File Formats File System...', status: 'EMPTY' },
  { message: 'Started udev Coldplug all Devices.', status: 'OK' },
  { message: 'Mounted POSIX Message Queue File System.', status: 'OK' },
  { message: 'Mounted Debug File System.', status: 'OK' },
  { message: 'Mounted Configuration File System.', status: 'OK' },
  { message: 'Mounted Huge Pages File System.', status: 'OK' },
  { message: 'Mounted Arbitrary Executable File Formats File System.', status: 'OK' },
  { message: 'Started Set Up Additional Binary Formats.', status: 'OK' },
  { message: 'Started Setup Virtual Console.', status: 'OK' },
  { message: 'Found device /dev/ttyS0', status: 'OK' },
  {
    message: 'systemd--fsck[53]: fedora: clean, 319575/983040 files, 2914206/3932160 blocks',
    status: 'EMPTY'
  }
];

export const statusText = {
  EMPTY: '      ',
  FAILED: 'FAILED',
  OK: '  OK  ',
  PROGRESS: ' PROG ',
  TIME: ' TIME '
};
