import { PageContent } from "../content-handler";

export const deployContent: PageContent = {
  content: `
  name: 🐳 Docker-Update-Or-Else 🚀

on:
  push:
    branches:
      - main  # Because who needs other branches anyway?

jobs:
  build-or-cry-trying:
    runs-on: ubuntu-latest  # We're not picky, any ubuntu will do

    steps:
    - name: 🕵️‍♂️ Sneakily checkout the repo
      uses: actions/checkout@v4  # Like a ninja in the night

    - name: 🎭 Impersonate a responsible developer and create .env
      run: |
        rm .env && \  # Out with the old!
        cp .env.sample .env && \  # In with the new!
        sed -i 's/EMAILJS_SERVICE=.*/EMAILJS_SERVICE=\"\${{ secrets.EMAILJS_SERVICE }}\"/' .env && \\
        sed -i 's/EMAILJS_TEMPLATE=.*/EMAILJS_TEMPLATE=\"\${{ secrets.EMAILJS_TEMPLATE }}\"/' .env && \\
        sed -i 's/EMAILJS_KEY=.*/EMAILJS_KEY=\"\${{ secrets.EMAILJS_KEY }}\"/' .env && \\
        cat .env  # Meow! 🐱

    - name: 🏗️ Summon the Docker Buildx spirits
      uses: docker/setup-buildx-action@v3  # Abracadabra!

    - name: 🕴️ Sneak into Docker Hub like a secret agent
      uses: docker/login-action@v3
      with:
        username: \${{ secrets.DOCKERHUB_USERNAME }}  # 007, is that you?
        password: \${{ secrets.DOCKERHUB_TOKEN }}  # Shhh, it's a secret!

    - name: 🏭 Build the frontend or die trying
      uses: docker/build-push-action@v5
      with:
        file: ".docker/deployment/react/frontend/Dockerfile"  # The blueprint of dreams
        context: "."  # Context is everything, they say
        platforms: linux/arm64  # Because x86 is so last season
        push: true  # To infinity and beyond!
        tags: swondi/franky-portfolio:latest  # Tag, you're it!

# If you've made it this far, congratulations! You're officially a Docker wizard! 🧙‍♂️✨`
}