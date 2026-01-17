const techKey = (label: string) => {
  return label
    .toLowerCase()
    .replace(/c\#/g, "csharp")
    .replace(/\.net/g, "dotnet")
    .replace(/asp\.net/g, "aspnet")
    .replace(/c\+\+/g, "cplusplus")
    .replace(/[^a-z0-9]/g, "");
};

export default techKey;
