/* Exporter les couleurs utilisés pour le design de base sous forme de soit disant "token" */
export const colorTokens = {
  blue: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#E6EBFF",
    100: "#CCD6FE",
    200: "#99ADFD",
    300: "#6695FC",
    400: "#337CFA",
    500: "#0063F9",
    600: "#004DBD",
    700: "#003080",
    800: "#001A44",
    900: "#00060B",
  },
};

/* Changement des configurations de theme de MUI */
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
          /* Valeurs des couleurs pour le thème dark */
          primary: {
            dark: colorTokens.primary[200],
            main: colorTokens.primary[500],
            light: colorTokens.primary[800],
          },
          neutral: {
            dark: colorTokens.blue[100],
            main: colorTokens.blue[200],
            mediumMain: colorTokens.blue[300],
            medium: colorTokens.blue[400],
            light: colorTokens.blue[700],
          },
          background: {
            default: colorTokens.blue[900],
            alt: colorTokens.blue[800],
          },
        }
        : {
          /* Valeur des couleurs pour le thème light */
          primary: {
            dark: colorTokens.primary[700],
            main: colorTokens.primary[500],
            light: colorTokens.primary[50],
          },
          neutral: {
            dark: colorTokens.blue[700],
            main: colorTokens.blue[500],
            mediumMain: colorTokens.blue[400],
            medium: colorTokens.blue[300],
            light: colorTokens.blue[50],
          },
          background: {
            default: colorTokens.blue[10],
            alt: colorTokens.blue[0],
          },
        }),
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
