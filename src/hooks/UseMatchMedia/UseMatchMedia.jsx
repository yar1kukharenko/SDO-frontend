import { useLayoutEffect, useState } from "react";

const quries = [
  "(max-width: 766px)",
  "(min-width: 767px) and (max-width: 1199px)",
  "(min-width: 1200px)",
];

export const useMatchMedia = () => {
  const mediaQueryList = quries.map((query) => matchMedia(query));
  const getValues = () => mediaQueryList.map((mql) => mql.matches);
  const [values, setValues] = useState(getValues);
  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryList.forEach((mql) => mql.addEventListener("change", handler));
    return () =>
      mediaQueryList.forEach((mql) => {
        mql.removeEventListener("change", handler);
      });
  });
  return ["isMobile", "isTablet", "isDesktop"].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {}
  );
};
