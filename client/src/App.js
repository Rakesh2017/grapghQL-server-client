import './App.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { AnimalList } from './components'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

const App = () => (
  <ApolloProvider client={client}>
    <div className='App'>
      {/* <Header /> */}
      <AnimalList />
    </div>
  </ApolloProvider>
)

export default App
