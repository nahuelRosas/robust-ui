/**
 * Custom hook that determines if the code is running on the server or the browser.
 * @returns An object with properties indicating if the code is running on the browser or the server.
 */
export function useSSR(): {
  isBrowser: false | HTMLElement;
  isServer: boolean;
} {
  const isDOM =
    typeof window !== "undefined" &&
    window.document &&
    window.document.documentElement;

  return {
    isBrowser: isDOM,
    isServer: !isDOM,
  };
}
