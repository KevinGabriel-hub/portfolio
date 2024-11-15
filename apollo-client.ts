import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { relayStylePagination } from "@apollo/client/utilities"

const httpLink = createHttpLink({
  uri: "https://us-west-2.cdn.hygraph.com/content/cm2szo0tr00jq08w98pesqi4a/master",
})

const authLink = setContext((_, { headers }) => {
  const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MzAxMTgyNTIsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuaHlncmFwaC5jb20vdjIvY20yc3pvMHRyMDBqcTA4dzk4cGVzcWk0YS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC11cy13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiMDkzMDQ2YTMtYmQwYS00Njg2LWI3MTAtNzA1ZmU5NDBkNTA0IiwianRpIjoiY2xhdmd3dG9nMnpqdDAxdDEzeW42aHFsMCJ9.Tb04FqufCD_wc5GywQi5tbegBXOXMKNYt7SO4SQLUsw8mtrBwD1xx5dkPcchIDTbYJOWRn6x4nKyBZzyO4z-dAEfe6l5E43wiri0zct13erEQZYq7bfC3ZLMbXVbvqyDtZL8LAYZhp4bGk2EN3tfaBi-hVblD71utzwUP3_pehB876QeGpDmnKJIlRqTCpgpKhnI78N0oRo_UfeurgZCL4NotLt2DSQFN0jnF9BgPK9MuLQbga_ki6OF9v-WNdu_aSRFB2qaM-bQx2S1gGHCdPEulz3FJU81Vo_6ABCTGduGZnNUOb-Yl17gDwygDJVGO7EVncBeyiO7tOl2cuR_20-xJ9jgPMJcLVGEPpgxFfLNzvazo2NIwj9W1ucBycIzfrhRtLPFGGhnFxtk0ZhVD5UuiS2ochitVk-g2t2yabRGm1-F34-8N8UuMuLLMOduCul2Z4Ux5f4CxFTo9FQMd_GuDlJiMoNk1xCzjVLH7Py7OMo1O0OkeCX_kceKJ0HABKIXzbsd_mUoWT2Pb0bwap3FEItlIx_4QJJi-dpr6KI93MoRFd_VpOl9mKqqu7r2t7CmQKSnPakFLXMsn-4M-ig9iiZMhvFZ6DIbsG6AZsR5gAa1zkk9ejCx9g0FTMrHnaBZmE654ttnV6_fSqSD3Coc_WOWK7Y78xb6n4gFZ0g"
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          worksConnection: relayStylePagination(),
          guestBooksConnection: relayStylePagination(),
          blogs: {
            //first merge func gets called and then read func. fetchMore always sends a network request which then comes back to the cache and gets merged
            //with the help of merge function. Then cache tries to read the query to send the required data back to the client. But if a read
            // function is present then the moment cache will try to read the query, it will instantly call the read function.
            read(existing, { args: { skip, first } }: any) {
              return existing && existing.slice(skip, skip + first)
            },
            keyArgs: false,
            merge(existing, incoming, { args: { skip } }: any) {
              const merged = existing ? existing.slice(0) : []
              for (let i = 0; i < incoming.length; ++i) {
                merged[skip + i] = incoming[i]
              }
              return merged
            },
          },
        },
      },
    },
  }),
})

export const currentWorkTab = makeVar<string>("All")
export const currentMenu = makeVar<number>(1)
export const currentWork = makeVar<null | string>(null)
export const showMenu = makeVar<boolean>(false)

export default client
