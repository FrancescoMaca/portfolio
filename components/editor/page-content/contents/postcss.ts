import { PageContent } from "../content-handler";

export const postcssContent: PageContent = {
  content: `
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`
}