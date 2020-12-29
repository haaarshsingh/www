const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/harshsingh/Documents/GitHub/harshhhdev.github.io/src/pages/index.tsx")))
}

