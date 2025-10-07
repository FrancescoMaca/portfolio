import { PageContent } from "../content-handler";

export const dotenvContent: PageContent = {
  content: `
GH_TOKEN="Yeah your are not getting this..."
RESEND_TOKEN="...not this one either"
RESEND_RECEIVER="[temp_email]@icloud.com"

# You can never have too many variables
HOURS_SPENT_ON_THIS=37
PET_NAME="Pino"
PET_NAME_RIP="Sometime in June 2010 - 24 Sptember 2025"
`
}