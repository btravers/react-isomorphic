const path = require('path')
const fs = require('fs')
const React = require('react')
const { Provider } = require('react-redux')
const { renderToString } = require('react-dom/server')
const { StaticRouter } = require('react-router-dom')

const { default: store } = require('../src/store')
const { default: App } = require('../src/components/App')

module.exports = (req, res) => {
    const filePath = path.resolve(__dirname, '..', 'build', 'index.html')
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return res.status(500).end()
        }
        const context = {}
        const markup = renderToString(
          <Provider store={store}>
            <StaticRouter
              location={req.url}
              context={context}
            >
              <App/>
            </StaticRouter>
          </Provider>
        )

        if (context.url) {
            return res.redirect(301, context.url)
        }

        return res.send(data.replace('{{SSR}}', markup))
    })
}