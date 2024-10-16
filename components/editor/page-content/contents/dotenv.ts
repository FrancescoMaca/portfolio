import { PageContent } from "../content-handler";

export const dotenvContent: PageContent = {
  content: `
NODE_ENV="production"
MONGO_URI="mongodb+srv://franky@:******@data.gixxpr2.mongodb.net/?retryWrites=true&w=majority&appName=Data"

# You can never have too many variables
HOURS_SPENT_ON_THIS=37
PET_NAME="Pino"
`
}