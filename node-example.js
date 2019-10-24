const request = require('request')
const cheerio = require('cheerio')

const url = 'https://blog.benchsci.com/startups-using-artificial-intelligence-in-drug-discovery#aggregate_and_synthesize_information'

const handleResponse = (error, response, rawBody) => {
  if (error) {
    console.error('Failed to fetch the URL.')
    return
  }

  const $ = cheerio.load(rawBody)
  const h3s = $('h3').children().toArray()
  const categories = h3s.map((h3) => h3.next.data)

  console.log(categories)
}

request.get(url, handleResponse)


