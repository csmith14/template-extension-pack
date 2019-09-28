const { resolve, join } = require( 'path' )

const fs = require( 'fs-extra' )

const packRoot = resolve( __filename, '../../' )
const {
	name,
	version,
	extensionPack,
	categories,
	keywords,
	description
} = require( join( packRoot, 'package.json' ) )

const marketplaceUrl = 'https://marketplace.visualstudio.com/items?itemName='
const linkToMarketPage = ( identifier ) => `- [${identifier}](${marketplaceUrl.concat( identifier )})`

const packageLinks = extensionPack.map( ( id ) => linkToMarketPage( id ) )

/* --- */
/* README Markdown Content */
const text =
`# ${name} v${version}

${description || '*No description property found in manifest*'}

**Categories**: ${categories.join( ' - ' )}

**Total Extension Count**: ${extensionPack.length}

## Extensions

${packageLinks.join( '\n' )}

For detailed information, refer to individual extension documentation.

Keywords: *${( keywords || [ 'visual studio code', 'extension' ] ).join( ', ' )}*
`

fs.writeFileSync( join( packRoot, 'README.md' ), text )
