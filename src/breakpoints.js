// NOTES
// -------------------------------------------
// To import (Example)
// import { breakpoint } from '../../breakpoints'
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
    bP1: '320',
    bP2: '480',
    bP3: '768',
    bP4: '1024',
    bP5: '1200',
    bP6: '1920',
}
export const device = {
    bP1: `(min-width: ${size.bP1}px)`,
    bP2: `(min-width: ${size.bP2}px)`,
    bP3: `(min-width: ${size.bP3}px)`,
    bP4: `(min-width: ${size.bP4}px)`,
    bP5: `(min-width: ${size.bP5}px)`,
    bP6: `(min-width: ${size.bP6}px)`,
}

// Assigns object to a variable before exporting as module default
export const breakpoint = {
    size,
    device,
}

// export default breakpoint
