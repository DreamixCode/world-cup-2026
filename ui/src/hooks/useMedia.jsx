import { useEffect, useDebugValue, useState } from "react";

function useMedia(query) {
  const [state, setState] = useState(() => window.matchMedia(query).matches);
  useDebugValue(`\`${query}\` => ${state}`);

  useEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(query);
    function onChange() {
      if (!mounted) {
        return;
      }
      setState(mql.matches);
    }

    mql.addListener(onChange);
    setState(mql.matches);

    return () => {
      mounted = false;
      mql.removeListener(onChange);
    };
  }, [query]);

  return state;
}

export const breakpointValues = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
};

export const breakpoints = {
  SMALL: `(min-width: ${breakpointValues.sm}px)`,
  MEDIUM: `(min-width: ${breakpointValues.md}px)`,
  LARGE: `(min-width: ${breakpointValues.lg}px)`,
  XLARGE: `(min-width: ${breakpointValues.xl}px)`,
  XXLARGE: `(min-width: ${breakpointValues.xxl}px)`,
};

export const deviceOrientation = {
  PORTRAIT: "(orientation: portrait)",
  LANDSCAPE: "(orientation: landscape)",
};

export const pointingDevice = {
  // touch pointer
  POINTER_COARSE: "(pointer: coarse)",
  // mouse pointer
  POINTER_FINE: "(pointer: fine)",
};

export default Object.assign(
  useMedia,
  { ...breakpoints },
  { ...breakpointValues },
  { ...pointingDevice },
  { ...deviceOrientation }
);
