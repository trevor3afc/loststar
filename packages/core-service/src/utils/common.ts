//TODO: sleep
export const sleep = ({ ms }: { ms: number }) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
