import { gql, useQuery } from "@apollo/client";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { AppProps } from "next/app";
import React, { ReactNode } from "react";

type Props = {
    children: ReactNode
}

export default function CustomThemeProvider(props: Props) {
    return (
        <div>
            <ThemeProvider theme={createMuiTheme({
                palette: {
                    primary: {
                        main: "#ed1c24",
                    },
                    secondary: {
                        main: "#424242",
                    },
                    divider: "#EE5123",
                    text: {
                        primary: "#000",
                        secondary: "#FFF"
                    }
                },
            })}>
                {props.children}
            </ThemeProvider>
        </div >
    )

}