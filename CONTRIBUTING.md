# Contributing to react-cashmere

✨ Thanks for contributing to **react-cashmere**! ✨

As a contributor, here are the guidelines we would like you to follow:
- [How can I contribute?](#how-can-i-contribute)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Working with the code](#working-with-the-code)

## How can I contribute?

### New feature request or found a bug
Found a bug or have a new feature idea? Create an issue so we can track it and asign it priority.

### Help close open issues
Take a look at any open issues and see if you can help provide a solution.

## Commit Message Guidelines

### Commits

All the [react-cashmere](https://github.com/react-cashmere) repositories use [Commitizen](https://github.com/commitizen/cz-cli) to help you create [valid commit messages](#commit-message-guidelines).

After staging your changes with `git add`, run `npm run cm` to start the interactive commit message CLI.

### Commit message format

Each commit message consists of a **header**, a **body** and a **footer**.
The header has a special format that includes a **type**, a **scope** and a **subject**:

```commit
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

The **footer** can contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages).

### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit.
In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type

The type must be one of the following:

| Type         | Description                                                                                                 |
|--------------|-------------------------------------------------------------------------------------------------------------|
| **build**    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| **ci**       | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| **docs**     | Documentation only changes                                                                                  |
| **feat**     | A new feature                                                                                               |
| **fix**      | A bug fix                                                                                                   |
| **perf**     | A code change that improves performance                                                                     |
| **refactor** | A code change that neither fixes a bug nor adds a feature                                                   |
| **style**    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| **test**     | Adding missing tests or correcting existing tests                                                           |

### Subject

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer
The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines.
The rest of the commit message is then used for this.

### Examples

```commit
fix(pencil): stop graphite breaking when too much pressure applied
```

```commit
feat(pencil): add 'graphiteWidth' option

Fix #42
```

```commit
perf(pencil): remove graphiteWidth option

BREAKING CHANGE: The graphiteWidth option has been removed.

The default graphite width of 10mm is always used for performance reasons.
```
## Working with the code

### Checking out the source

First you will need to create your own fork of react-cashmere repo. https://github.com/HealthCatalyst/react-cashmere

```
git clone <react-cashmere fork>
```

### Runing storybook locally

The following commands will run storybook locally at [http://localhost:6006/](http://localhost:6006/)
You can navigate to the component you want to modify and the page will reload when you make changes.

```
cd react-cashmere
npm install
npm start
```

### Theme and Custom Components
The theme, providers and components live under `./src/*` directroy.

### Example Stories
The storybook documentation examples live under `./stories/*` directory.

If you are creating a new component you will need to add a new story in \
`./src/components/<Component Name>`\
You will also need to create a new story to document your your component in \
`./src/stories/<Component Name>.story.js`

### Run Tests

```
npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Build

```
npm run build
```

Builds the app for production to the `dist` folder.

