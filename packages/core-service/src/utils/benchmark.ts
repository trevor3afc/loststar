export const startBench = ({ name }: { name: string }) => {
  console.time(name);
};

export const endBench = ({ name }: { name: string }) => {
  console.timeEnd(name);
};
