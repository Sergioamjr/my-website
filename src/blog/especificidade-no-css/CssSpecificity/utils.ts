type Counter = {
  ids: number;
  classes: number;
  elements: number;
};

const isAValidElement = (tag: string): boolean => {
  try {
    return (
      document.createElement(tag).toString() !== "[object HTMLUnknownElement]"
    );
  } catch (err) {
    return false;
  }
};

export function countSelector(input: string): Counter {
  const allSelectors = input
    .replace("#", " #")
    .split(" ")
    .filter(Boolean);

  let sum = {
    ids: 0,
    classes: 0,
    elements: 0,
  };

  for (const selector of allSelectors) {
    const isAnElement = selector.substring(selector.indexOf("."), 0);

    if (/\.|:/.test(selector)) {
      sum.classes +=
        (selector.replace(":not", "").match(/\.|:/g) ?? []).length * 1;
    }

    if (/^#/.test(selector) && selector.length > 1) {
      sum.ids += 1;
    }

    if (isAValidElement(selector) || isAValidElement(isAnElement)) {
      sum.elements += 1;
    }
  }
  return sum;
}
