const contentful = require("contentful");

const SPACE_ID = 'kk2bw5ojx476'
const ACCESS_TOKEN = '7ac531648a1b5e1dab6c18b0979f822a5aad0fe5f1109829b8a197eb2be4b84c'

const CONFIG = {
  headers: {
    Authorization: ACCESS_TOKEN
  }
}

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

export const getRecipes = () => client.getEntries({content_type: 'recipe'})

export const getRecipe = (id: string) => client.getEntry(id)