import { HeaderTag, OptionsStyle, OptionStyle } from "./styles";

export function Header() {
    const HEADER_CONTENT: {[key: string]: string} = {
        "Home": "/",
        "Contact": "/contact"
    }
    return (
        <HeaderTag>
            <OptionsStyle>
                {
                    Object.keys(HEADER_CONTENT).map((key: string) => {
                        return (
                            <OptionStyle><a href={HEADER_CONTENT[key]}>{key}</a></OptionStyle>
                        )
                    })
                }
            </OptionsStyle>
        </HeaderTag>
    )
}
