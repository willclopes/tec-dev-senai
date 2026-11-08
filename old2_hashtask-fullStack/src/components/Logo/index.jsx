import { LogoLink, LogoMark, LogoName } from "./styled";


export function Logo({compact=false, showName=true}) {
    return (

        <LogoLink href="/" $compact={compact}>
            <LogoMark $compact={compact}> 
                ♯HT.
            </LogoMark>

            {showName && (
                <LogoName>
                    HashTask

                </LogoName>
            )}         
        </LogoLink>
    )
}