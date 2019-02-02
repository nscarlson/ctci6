const { chunkify } = require('./chunkify')

const quantile = (data, quantileNumber, quantileType) => {
    const groups = quantileGroups(data, quantileType)

    return groups[quantileNumber - 1]
}

const quantileGroups = (data, quantileType) => {
    sortedData = data.sort((a, b) => a - b)

    const groups = chunkify(sortedData, quantileType)

    return groups
}

module.exports = { quantile, quantileGroups }
