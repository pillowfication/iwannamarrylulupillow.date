const fs = require('fs')
const path = require('path')

const out = path.resolve(__dirname, './results.csv')

const columns = [
  'username',
  'fishingExperience',
  'notMiqote',
  'legend',
  'chocobo',
  'slimeRancher',
  'gobbie',
  'cow1',
  'cow2',
  'cow3',
  'covid',
  'comments',
  'balloons'
]

function csvEscape (str) {
  str = String(str)
  if (/[,"\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`
  } else {
    return str
  }
}

fs.writeFileSync(out, columns.join(',') + '\n')

const data = fs.readFileSync(path.resolve(__dirname, './results')).toString().split('\n')
data.pop()

for (const datum of data) {
  const d = JSON.parse(datum)
  fs.appendFileSync(out, columns.map(c => csvEscape(d[c])).join(',') + '\n')
}
