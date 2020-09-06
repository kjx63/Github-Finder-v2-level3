## Github Finder (V3)

### Context API and useReducer (alternative to redux)

---

##### Note

- Redux is not bad, but the context API with useReducer hook is a really nice solution for small to medium application to manage App-level state

---

### Features

File Structures and implement Context(29)

- Context

  - github
    - githubContext: intiialze the new context
    - GithubState: all of the "actions" go here / initialState also goes here.
      - dispatch to the reducer by using useReducer hook
      - return the Provider
    - githubReducer: function to decide what's goint to happen to your "state" based on your actions
  - types.js: variables of strings to call to change your state within your reducer
