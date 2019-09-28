const { resolve, join } = require( 'path' )
const execa = require( 'execa' )

const packRoot = resolve( __filename, '../../' )
const { name, version, config } = require( join( packRoot, 'package.json' ) )

const vscExe = config && config.vscode ? config.vscode : 'code'

console.log( `
Installing ${name}, version ${version} ...
` )

const cmd = execa.commandSync( `${vscExe} --install-extension ${name}-${version}.vsix`, {
	cwd: packRoot
} )

console.log( cmd.stdout )
