// NOTES
// -------------------------------------------
// To import (Example)
// import breakpoint from '../../breakpoints'
// -------------------------------------------
// To use Media Query properly (Example)
// @media screen and (${breakpoint.device.bP1}){
// -------------------------------------------

export const size = {
    bP1: '20em',
    bP2: '30em',
    bP3: '48em',
    bP4: '64em',
    bP5: '75em',
    bP6: '120em',
}
export const device = {
    bP1: `(min-width: ${size.bP1})`,
    bP2: `(min-width: ${size.bP2})`,
    bP3: `(min-width: ${size.bP3})`,
    bP4: `(min-width: ${size.bP4})`,
    bP5: `(min-width: ${size.bP5})`,
    bP6: `(min-width: ${size.bP6})`,
}

// Assigns object to a variable before exporting as module default
const breakpoint = {
    size,
    device,
}

export default breakpoint
