export function utilsCommon(): string {
  return 'utils--common';
}

export const sleep = ({ ms }: { ms: number }) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const looper = async ({ ms }: { ms: number }) => {
  benchmarkStart({ label: 'looper' });
  await sleep({ ms });
  benchmarkEnd({ label: 'looper' });
  await looper({ ms });
};

export const benchmarkStart = async ({ label }: { label: string }) => {
  console.time(label);
};

export const benchmarkEnd = async ({ label }: { label: string }) => {
  console.timeEnd(label);
};
