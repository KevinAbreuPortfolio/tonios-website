// NOTES
// -------------------------------------------
// To import (Example)
// import breakpoint from '../../breakpoints'
// -------------------------------------------
// To use Media Query properly (Example)
// @media screen and (${breakpoint.device.bP1}){
// -------------------------------------------

// Media Query Breakpoint Notes
// 20em is 320px
// 30em is 480px
// 48em is 768px
// 64em is 1024px
// 75em is 1200px
// 120em is 1920px

export const size = {
    bP1: '320px',
    bP2: '480px',
    bP3: '768px',
    bP4: '1024px',
    bP5: '1200px',
    bP6: '1920px',
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
