import { createTheme } from "@mui/material";
import { BREAKPOINTS, TYPOGRAPHIES, UIHELPER } from "./themeEnums";
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      100: "#FFE6D9",
      200: "#FFC7B4",
      300: "#FFA28F",
      400: "#FF7F73",
      main: "#FF4545",
      600: "#DB3241",
      700: "#B7223C",
      800: "#931636",
      900: "#7A0D33",
    },

    secondary: {
      100: "#E2F0FC",
      200: "#C6E0F9",
      300: "#A5C7EF",
      400: "#89AEE0",
      main: "#638BCC",
      600: "#486BAF",
      700: "#314F92",
      800: "#1F3676",
      900: "#132461",
    },
    tertiary: {
      main: "#FF6969",
    },
    quaternary: {
      main: "#DFDFDF",
    },
    info: {
      100: "#CBFEFA",
      200: "#97FDFD",
      300: "#63EEF9",
      400: "#3DD9F4",
      main: "#00B9ED",
      600: "#0090CB",
      700: "#006CAA",
      800: "#004D89",
      900: "#003771",
    },
    warning: {
      100: "#FFF6D8",
      200: "#FFEBB2",
      300: "#FFDD8B",
      400: "#FFCF6F",
      main: "#FFB83F",
      600: "#DB942E",
      700: "#B7731F",
      800: "#935614",
      900: "#7A400C",
    },
    error: {
      100: "#FEE8E2",
      200: "#FECCC5",
      300: "#FDAAA7",
      400: "#FB9197",
      main: "#F96D82",
      600: "#D64F70",
      700: "#B33660",
      800: "#902251",
      900: "#771448",
    },
    success: {
      100: "#EFFDD6",
      200: "#DAFCAF",
      300: "#BEF685",
      400: "#A2ED65",
      main: "#78E236",
      600: "#59C227",
      700: "#3EA21B",
      800: "#288311",
      900: "#186C0A",
    },
    neutral: {
      main: "#DFE3E8",
    },
    icon: {
      main: "#486BAF",
    },
    text: {
      main: "#4E4E4E",
    },
    background: {
      default: "#FBFBFC",
      paper: "#FFFFFF",
    },
    white: {
      main: "#FFF",
    },
  },

  shadows: Array(25).fill(
    "0px 0px 0px 0px rgba(223, 228, 238, 0.33), 0px 6px 14px 0px rgba(223, 228, 238, 0.32), 0px 25px 25px 0px rgba(223, 228, 238, 0.28), 0px 57px 34px 0px rgba(223, 228, 238, 0.16), 0px 102px 41px 0px rgba(223, 228, 238, 0.05), 0px 159px 44px 0px rgba(223, 228, 238, 0.01)"
  ),
  breakpoints: {
    values: {
      ...BREAKPOINTS,
    },
  },
  props: {
    ...UIHELPER,
  },
  typography: {
    ...TYPOGRAPHIES,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#FBFBFC",
          paddingLeft: "20px",
          paddingRight: "20px",
          borderRadius: "0px",
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "large",
        color: "primary",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          // fontSize: "14px",
          borderRadius: "10px",
          textTransform: "uppercase",
          boxShadow: "none",
          padding: "8px 12px",
          // minWidth: "109px",

          "&.MuiButton-containedPrimary": {
            color: "#FFFFFF",
            "@media only screen and (max-width: 600px)": {
              width: "100%",
            },
          },
          "&.MuiButton-containedPrimary:hover": {
            backgroundColor: "#CC3737",
            "@media only screen and (max-width: 600px)": {
              width: "100%",
            },
          },
          "&.MuiButton-containedSecondary:hover": {
            backgroundColor: "#4F6FA3",
            "@media only screen and (max-width: 600px)": {
              width: "100%",
            },
          },
          "&.MuiButton-containedSecondary": {
            color: "#FFFFFF",
            "@media only screen and (max-width: 600px)": {
              width: "100%",
            },
          },
          "&.MuiButton-containedSuccess": {
            color: "#FFFFFF",
            "@media only screen and (max-width: 600px)": {
              width: "100%",
            },
          },
          "&.MuiButton-containedInfo": {
            color: "#FFFFFF",
            "@media only screen and (max-width: 600px)": {
              width: "100%",
            },
          },
          "&.MuiButton-containedWarning": {
            color: "#FFFFFF",
            "@media only screen and (max-width: 600px)": {
              width: "100%",
            },
          },
          "&.MuiButton-containedError": {
            color: "#FFFFFF",
            "@media only screen and (max-width: 600px)": {
              width: "100%",
            },
          },
        },
      },
    },

    MuiListSubheader: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFF",
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        root: {
          "&>.MuiDrawer-paper": {
            borderRight: "1px dashed rgb(145 158 171 / 23%)",
            boxShadow: "none",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "&.MuiPaper-elevation1": {
            borderRadius: "20px",
            boxShadow:
              "0px 1px 3px 0px rgba(210, 216, 243, 0.12), 0px 1px 1px 0px rgba(210, 216, 243, 0.14), 0px 2px 1px -1px rgba(210, 216, 243, 0.20)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation2": {
            borderRadius: "20px",
            boxShadow:
              "0px 1px 5px 0px rgba(210, 216, 243, 0.12), 0px 2px 2px 0px rgba(210, 216, 243, 0.14), 0px 3px 1px -2px rgba(210, 216, 243, 0.20)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation3": {
            borderRadius: "20px",
            boxShadow:
              "0px 1px 8px 0px rgba(210, 216, 243, 0.12), 0px 3px 4px 0px rgba(210, 216, 243, 0.14), 0px 3px 3px -2px rgba(210, 216, 243, 0.20)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation4": {
            borderRadius: "20px",
            boxShadow:
              "0px 1px 10px 0px rgba(210, 216, 243, 0.12), 0px 4px 5px 0px rgba(210, 216, 243, 0.14), 0px 2px 4px -1px rgba(210, 216, 243, 0.20)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation5": {
            borderRadius: "20px",
            boxShadow:
              "0px 1px 14px 0px rgba(210, 216, 243, 0.12), 0px 5px 8px 0px rgba(210, 216, 243, 0.14), 0px 3px 5px -1px rgba(210, 216, 243, 0.20)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation6": {
            borderRadius: "20px",
            boxShadow:
              "0px 1px 18px 0px rgba(210, 216, 243, 0.12), 0px 6px 10px 0px rgba(210, 216, 243, 0.14), 0px 3px 5px -1px rgba(210, 216, 243, 0.20)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation7": {
            borderRadius: "20px",
            boxShadow:
              "0px 2px 16px 1px rgba(210, 216, 243, 0.12), 0px 7px 10px 1px rgba(210, 216, 243, 0.14), 0px 4px 5px -2px rgba(210, 216, 243, 0.20)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation8": {
            borderRadius: "20px",
            boxShadow:
              "0px 3px 16px 2px rgba(210, 216, 243, 0.12), 0px 9px 12px 1px rgba(210, 216, 243, 0.14), 0px 5px 6px -3px rgba(210, 216, 243, 0.20)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation9": {
            borderRadius: "20px",
            boxShadow:
              "0px 3px 16px 2px rgba(210, 216, 243, 0.12), 0px 9px 12px 1px rgba(210, 216, 243, 0.14), 0px 5px 6px -3px rgba(210, 216, 243, 0.20)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation10": {
            borderRadius: "20px",
            boxShadow:
              "0px 4px 18px 3px rgba(210, 216, 243, 0.12), 0px 10px 14px 1px rgba(210, 216, 243, 0.14), 0px 6px 6px -3px rgba(210, 216, 243, 0.20)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation11": {
            borderRadius: "20px",
            boxShadow:
              "0px 4px 20px 3px rgba(210, 216, 243, 0.12), 0px 11px 15px 1px rgba(210, 216, 243, 0.14), 0px 6px 7px -4px rgba(210, 216, 243, 0.20)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation12": {
            borderRadius: "20px",
            boxShadow:
              "0px 5px 22px 4px rgba(210, 216, 243, 0.12), 0px 12px 17px 2px rgba(210, 216, 243, 0.14), 0px 7px 8px -4px rgba(210, 216, 243, 0.20)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation13": {
            borderRadius: "20px",
            boxShadow:
              "0px 5px 24px 4px rgba(210, 216, 243, 0.12), 0px 13px 19px 2px rgba(210, 216, 243, 0.14), 0px 7px 8px -4px rgba(210, 216, 243, 0.20)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation14": {
            borderRadius: "20px",
            boxShadow:
              "0px 5px 26px 4px rgba(210, 216, 243, 0.12), 0px 14px 21px 2px rgba(210, 216, 243, 0.14), 0px 7px 9px -4px rgba(210, 216, 243, 0.20)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation15": {
            borderRadius: "20px",
            boxShadow:
              "0px 6px 28px 5px rgba(210, 216, 243, 0.12), 0px 15px 22px 2px rgba(210, 216, 243, 0.14), 0px 8px 9px -5px rgba(210, 216, 243, 0.20)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation16": {
            borderRadius: "20px",
            boxShadow:
              "0px 6px 30px 5px rgba(210, 216, 243, 0.12), 0px 16px 24px 2px rgba(210, 216, 243, 0.14), 0px 8px 10px -5px rgba(210, 216, 243, 0.20)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation17": {
            borderRadius: "20px",
            boxShadow:
              "0px 6px 32px 5px rgba(210, 216, 243, 0.12), 0px 17px 26px 2px rgba(210, 216, 243, 0.14), 0px 8px 11px -5px rgba(210, 216, 243, 0.20)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation18": {
            borderRadius: "20px",
            boxShadow:
              "0px 7px 34px 6px rgba(210, 216, 243, 0.12), 0px 18px 28px 2px rgba(210, 216, 243, 0.14), 0px 9px 11px -5px rgba(210, 216, 243, 0.20)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation19": {
            borderRadius: "20px",
            boxShadow:
              "0px 7px 36px 6px rgba(210, 216, 243, 0.12), 0px 19px 29px 2px rgba(210, 216, 243, 0.14), 0px 9px 12px -6px rgba(210, 216, 243, 0.20)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation20": {
            borderRadius: "20px",
            boxShadow:
              "0px 8px 38px 7px rgba(210, 216, 243, 0.12), 0px 20px 31px 3px rgba(210, 216, 243, 0.14), 0px 10px 13px -6px rgba(210, 216, 243, 0.20)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation21": {
            borderRadius: "20px",
            boxShadow:
              "0px 8px 40px 7px rgba(210, 216, 243, 0.12), 0px 21px 33px 3px rgba(210, 216, 243, 0.14), 0px 10px 13px -6px rgba(210, 216, 243, 0.20)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation22": {
            borderRadius: "20px",
            boxShadow:
              "0px 8px 42px 7px rgba(210, 216, 243, 0.12), 0px 22px 35px 3px rgba(210, 216, 243, 0.14), 0px 10px 14px -6px rgba(210, 216, 243, 0.20)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation23": {
            borderRadius: "20px",
            boxShadow:
              "0px 9px 44px 8px rgba(210, 216, 243, 0.12), 0px 23px 36px 3px rgba(210, 216, 243, 0.14), 0px 11px 14px -7px rgba(210, 216, 243, 0.20)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
          "&.MuiPaper-elevation24": {
            borderRadius: "20px",
            boxShadow: "-40px 40px 80px -8px rgba(0, 0, 0, 0.24)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },

          // primary elevation
          "&.MuiPaper-elevation25": {
            borderRadius: "20px",
            padding: "24px",
            backgroundColor: "#FF4545",
            color: "#F9FAFB",
            boxShadow: "0px 8px 16px 0px rgba(255, 69, 69, 0.24)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },

          //secondary elevation
          "&.MuiPaper-elevation26": {
            borderRadius: "20px",
            padding: "24px",
            backgroundColor: "#638BCC",
            color: "#F9FAFB",
            boxShadow: "0px 8px 16px 0px rgba(99, 139, 204, 0.24)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },

          //Info elevation
          "&.MuiPaper-elevation27": {
            borderRadius: "20px",
            padding: "24px",
            backgroundColor: "#00B9ED",
            color: "#F9FAFB",
            boxShadow: "0px 8px 16px 0px rgba(0, 185, 237, 0.24)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },

          //Success elevation
          "&.MuiPaper-elevation28": {
            borderRadius: "20px",
            padding: "24px",
            backgroundColor: "#78E236",
            color: "#F9FAFB",
            boxShadow: "0px 8px 16px 0px rgba(120, 226, 54, 0.24)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },

          //Warning elevation
          "&.MuiPaper-elevation29": {
            borderRadius: "20px",
            padding: "24px",
            backgroundColor: "#FFB83F",
            color: "#F9FAFB",
            boxShadow: "0px 8px 16px 0px rgba(255, 184, 63, 0.24)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },

          //Warning elevation
          "&.MuiPaper-elevation30": {
            borderRadius: "20px",
            padding: "24px",
            backgroundColor: "#D64F70",
            color: "#F9FAFB",
            boxShadow: "0px 8px 16px 0px rgba(249, 109, 130, 0.24)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
          },
       
          "&.MuiSelect-option": {
            "&:hover": {
              borderRadius: "10px",
              color: "#FF4545",
              background: "#FFECEC",
            },
          },
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          "&.MuiFormHelperText-root": {
            fontSize: "12px",
            color: "#454F5B",
          },
          "&.MuiFormHelperText-root.Mui-error": {
            fontSize: "12px",
            color: "#D64F70",
          },
        },
      },
    },

    MuiDialog: {
      defaultProps: {
        maxWidth: "laptop",
      },
      styleOverrides: {
        root: {
          background: "rgba(117, 117, 134, 0.10)",
          backdropFilter: "blur(2px)",

          ".MuiDialog-paper": {
            borderRadius: "20px",
            padding: "48px",

            boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
            "@media only screen and (max-width: 600px)": {
              borderRadius: 0,
              padding: "24px",
              ".MuiDialogTitle-root": {
                padding: "0px",
                fontSize: "20px",
              },
            },
          },
          ".MuiDialogTitle-root": {
            padding: "15px 0px 24px 0px",
            fontSize: "24px",
          },
          ".MuiDialogContent-root": {
            padding: "0px",
          },
          ".MuiDialogActions-root": {
            padding: "0px",
          },
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        size: "medium",
        fullWidth: true,
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          ".MuiOutlinedInput-root": {
            borderRadius: "10px",
            gap: "5px",

            "& fieldset": {
              borderColor: "#B1C5E6",
            },
          },
          ".MuiOutlinedInput-root.Mui-disabled": {
            background: "#F4F6F9",
            color: "var(--neutrals-light-body-text, #5B606F)",

            "& fieldset": {
              borderColor: "#B1C5E6",
            },
            "&:hover fieldset": {
              borderColor: "#4F6FA3",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#B1C5E6",
            },
          },
          ".MuiOutlinedInput-root.Mui-error": {
            "&:hover fieldset": {
              borderColor: "#F73878",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FC8797",
            },
          },
          ".MuiFilledInput-root": {
            borderRadius: "0px",
          },
          ".MuiInput-root": {
            height: "40px",
          },
        },
      },
    },

    MuiSelect: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
        inputProps: {
          style: {
            padding: "10px",
          },
        },
      },
      styleOverrides: {
        root: {
          borderRadius: "10px",
          minHeight: "37px",
          gap: "5px",

          "& fieldset": {
            borderColor: "#B1C5E6",
          },
        },
        "&.Mui-disabled": {
          borderRadius: "10px",
          background: "transparent",
          color: "#DFE3E8",

          "& fieldset": {
            borderColor: "#B1C5E6",
          },
          "&:hover fieldset": {
            borderColor: "#4F6FA3",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#B1C5E6",
          },
        },
        "&.Mui-error": {
          "&:hover fieldset": {
            borderColor: "#F73878",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#FC8797",
          },
        },
      },
    },

    MuiChip: {
      defaultProps: {
        size: "medium",
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          borderRadius: "10px",
          gap: "5px",
        },
        colorPrimary: {
          borderColor: "#FFE6D9",
          backgroundColor: "#FFE6D9",
          color: "#DB3241",
        },
        colorSuccess: {
          backgroundColor: "#EFFDD6",
          color: "#59C227",
        },
        colorWarning: {
          backgroundColor: "#FFF6D8",
          color: "#DB942E",
        },
        colorInfo: {
          backgroundColor: "#CBFEFA",
          color: "#0090CB",
        },
        colorError: {
          backgroundColor: "#FEE8E2",
          color: "#D64F70",
        },
        outlined: {
          borderColor: "#DB3241",
          color: "#DB3241",
        },
        "&.Mui-disabled": {
          background: "#F4F6F8",
          color: "#C4CDD5",
          "&:hover": {
            background: "#F4F6F9",
          },
        },
        outlinedPrimary: {
          borderColor: "#DB3241",
          color: "#DB3241",
          backgroundColor: "transparent",
          "&:hover": {
            borderColor: "#FF4545",
            backgroundColor: "#FFE6D9",
          },
        },
        outlinedSuccess: {
          borderColor: "#59C227",
          color: "#59C227",
          backgroundColor: "transparent",
          "&:hover": {
            borderColor: "#78E236",
            backgroundColor: "#EFFDD6",
          },
        },

        outlinedWarning: {
          borderColor: "#DB942E",
          color: "#DB942E",
          backgroundColor: "transparent",
          "&:hover": {
            borderColor: "#FFB83F",
            backgroundColor: "#FFF6D8",
          },
        },

        outlinedInfo: {
          borderColor: "#0090CB",
          color: "#0090CB",
          backgroundColor: "transparent",
          "&:hover": {
            borderColor: "#00B9ED",
            backgroundColor: "#CBFEFA",
          },
        },

        outlinedError: {
          borderColor: "#D64F70",
          color: "#D64F70",
          backgroundColor: "transparent",
          "&:hover": {
            borderColor: "#F96D82",
            backgroundColor: "#FEE8E2",
          },
        },
      },
    },

    MuiAccordion: {
      defaultProps: {
        size: "small",
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          "&.MuiAccordion-root": {
            border: "none",
            borderRadius: "20px",
            backgroundColor: "#fff",
          },
          "&.MuiAccordion-gutters": {
            "&:before": {
              display: "none",
            },
          },
          ".MuiAccordionSummary-root": {
            padding: "0 24px",
          },
          ".MuiAccordionSummary-expandIconWrapper": {
            color: "#638BCC",
          },
          ".MuiAccordion-region": {
            padding: "0 24px 24px 24px",
          },
        },
        // Add more color variants as needed
      },
    },

    MuiMenu: {
      styleOverrides: {
        root: {
          ".MuiMenu-paper": {
            margin: "8px 0",
          },
          ">.MuiPaper-elevation0": {
            padding: "0 !important",
          },
          ">.MuiPaper-elevation8": {
            padding: "0 !important",
          },
          ".MuiMenu-list": {
            padding: "14px !important",
          },
          ".MuiIcon-root": {
            marginRight: "8px !important",
          },
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.MuiMenuItem-root": {
            padding: "10px",
            "&:hover": {
              borderRadius: "10px",
              backgroundColor: "#F2F5FA",
              color: "#638BCC",
            },
          },
          "&.Mui-selected": {
            borderRadius: "10px",
            backgroundColor: "#F2F5FA",
          },
        },
      },
    },

    MuiList: {
      styleOverrides: {
        root: {
          ">.MuiButtonBase-root": {
            "&:hover": {
              borderRadius: "10px",
              backgroundColor: "rgba(242, 245, 250, .5)",
            },
          },
          ".MuiListSubheader-root": {
            backgroundColor: "#FBFBFC",
          },
        },
      },
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            ".MuiListItemIcon-root": {
              color: "#FF4545",
            },
            ".MuiTypography-root": {
              color: "#FF4545",
            },
            color: "red",
            borderRadius: "10px",
            backgroundColor: "#FFECEC",
          },
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          padding: "0",
          "&.MuiTab-labelIcon": {
            gap: "8px !important",
          },
        },
      },
    },

    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",

          ">.MuiPaper-elevation6": {
            backgroundColor: "transparent",
            boxShadow: "none",
            padding: "10px",
          },
        },
      },
    },

    MuiAlert: {
      styleOverrides: {
        root: {
          alignItems: "center",
          width: "100% !important",

          ".MuiAlert-action": {
            padding: "0",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          ".MuiCardContent-root": {
            padding: "16px !important",
            width: "100%",
          },
          ".MuiCardActions-root": {
            padding: "8px !important",
            width: "100%",
          },
          ">.MuiPaper-elevation1": {
            padding: "0 !important",
            width: "100%",
            height: "fit-content",
          },
        },
      },
    },

    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
      styleOverrides: {
        root: {
          "&.MuiPaper-elevation1": {
            borderRadius: "10px !important",
            padding: "16px",
            backgroundColor: "#FFF",
            color: "#454F5B",
          },
        },
      },
    },

    MuiAutocomplete: {
      styleOverrides: {
        root: {
          ".MuiAutocomplete-option": {
            '&[data-focus="true"]': {
              backgroundColor: "#F2F5FA",
            },
            '&[aria-selected="true"]': {
              backgroundColor: "#F2F5FA",
            },
          },
        },
        // Add more color styleOverrides as needed
      },
    },

    MuiSwitch: {
      styleOverrides: {
        root: {
          ".MuiSwitch-thumb": {
            boxShadow: "none",
          },
        },
      },
    },

    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: "24px 0px",
        },
      },
    },

    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          height: "7px",

          "@media only screen and (max-width: 1600px)": {
            width: "500px",
          },
          "@media only screen and (max-width: 600px)": {
            width: "300px",
          },
          "@media only screen and (max-width: 468px)": {
            width: "200px",
          },
        },
      },
    },

    MuiSlider: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          width: "100%",

          "& .MuiSlider-valueLabel": {
            backgroundColor: "unset",
            color: "#00000099",
          },
        },
      },
    },
    
    MuiDataGrid: {
      styleOverrides: {
        root: {
          width: "100%",
          "@media (max-width: 600px)": {
            width: 250,
          },
          ".MuiDataGrid-main": {
            border: "none",
            ".MuiDataGrid-columnHeaders": {
              borderColor: "#EEEEEE",
            },
            ".MuiDataGrid-columnHeader:focus, .MuiDataGrid-columnHeader:focus-within, .MuiDataGrid-cell:focus":
              {
                outline: "none",
              },
            ".MuiDataGrid-columnHeaderTitle": {
              fontWeight: "700",
            },
            ".MuiDataGrid-withBorderColor": {
              borderColor: "#EEEEEE",
            },
            ".MuiDataGrid-row:hover": {
              backgroundColor: "#F2F5FA",
            },
            ".MuiDataGrid-virtualScrollerContent:last-child, ": {
              border: "none !important",
            },
          },
          ".MuiDataGrid-footerContainer": {
            border: "none",
          },
        },
      },
    },
  },
});
