# SANDMS Bank — Internal Tool Design System

## Brief
Premium, understated banking style. Serif headings paired with a plain sans body, square-cornered inputs, generous spacing, no gradients, no shadows except on modals, no emoji, no stock-photo look.

## Colors
```
--oxblood:   #6D0808   /* primary accent: buttons, links, focus, errors */
--umber:     #2D0000   /* body text, hover-darken state */
--sage:      #757D6F   /* borders, dividers, secondary lines */
--parchment: #EEEAD7   /* light background, card/dialog background */
```
Usage:
- Page background (content side): `#EEEAD7`
- Dark/brand panel background: `#6D0808`, text on it: `#EEEAD7`
- Body text on light background: `#2D0000`
- Muted/secondary text: `#2D0000` mixed ~28% toward `#EEEAD7`
- Borders/dividers: `#757D6F` mixed ~75% toward `#EEEAD7`
- Primary button: background `#6D0808`, hover `#2D0000`, text `#EEEAD7`
- Error text/border: `#6D0808`
- No other colors. Don't introduce blues, greens, or a separate "success green" — success is communicated with a checkmark icon, not a new color.

## Fonts
- Headings: `"Newsreader", Georgia, "Times New Roman", serif` — weight 400–500
- Body/UI: `"IBM Plex Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` — weight 400–600
- Load both from Google Fonts (`IBM+Plex+Sans:wght@400;500;600` and `Newsreader:opsz,wght@6..72,400;6..72,500`)
- Base body size: 16px, line-height 1.55
- Page/section H1: `clamp(2rem, 3vw, 2.5rem)`, weight 500, letter-spacing -0.01em
- Large hero heading (brand panel): `clamp(2rem, 3.4vw, 3.1rem)`, weight 400
- Field labels: 0.875rem, weight 500
- Helper/muted text: 0.8125rem–0.9375rem

## Spacing & sizing
- Input height: **52px**, padding `0 16px`, border-radius **2px**
- Primary button height: **54px**, same radius, weight 500, letter-spacing 0.02em
- Secondary/dialog button height: 50px
- Field bottom margin: 24px
- Border width: 1px everywhere (inputs, dividers, buttons)
- Corners are square: border-radius is 2px across the whole UI — never rounded pill buttons or large radii
- Two-panel layouts use a `5fr / 6fr` grid split, collapsing to one column under 860px

## Components
- **Inputs:** 1px `sage`-tinted border, `#F6F3E6` fill, oxblood border + 1px oxblood shadow ring on focus, oxblood border on `aria-invalid`
- **Buttons:** flat fill, no shadow, no gradient; darken (oxblood → umber) on hover; 2px offset outline on keyboard focus
- **Error text:** oxblood, small, appears directly under the field, no icon
- **Modal/dialog:** parchment background, 2px radius, a 6px solid oxblood band across the top, soft dark drop shadow (`0 24px 60px rgba(45,0,0,0.45)`), dark translucent backdrop
- **Success indicator:** a simple circular checkmark icon (oxblood fill, parchment stroke), never an emoji

## Rules
- No emoji anywhere in UI copy
- No rounded/pill buttons, no soft neumorphic shadows, no gradients
- No colors outside the four above (tints/mixes of them are fine)
- Keep copy formal and plain — no exclamation marks, no marketing tone
- Respect `prefers-reduced-motion`; keep animations under ~250ms and subtle (fade/rise only)