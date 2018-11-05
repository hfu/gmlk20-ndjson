const config = require('config')
const shapefile = require('shapefile')
const fetch = require('node-fetch')

const main = async function(url, cc, layer) {
  const shp = await fetch(`${url}/${layer}_${cc}.shp`)
  const dbf = await fetch(`${url}/${layer}_${cc}.dbf`)
  shapefile.open(shp.body, dbf.body, {encoding: 'utf-8'})
    .then(source => source.read()
      .then(function dump(result) {
        if (result.done) return
        console.log(JSON.stringify(result.value))
        return source.read().then(dump)
      }))
    .catch(error => console.error(error.stack))
}

for(const layer of config.get('layers')) {
  main(config.get('url'), config.get('cc'), layer)
}
