const { resolve, join } = require( 'path' )
const execa = require( 'execa' )
const packRoot = resolve( __filename, '../../' )
const { name, version, config } = require( join( packRoot, 'package.json' ) )
const vscExe = config && config.vscode ? config.vscode : [ 'code' ]

vscExe.forEach( ( exe ) => install( exe ) )

function install ( exe ) {
	console.log( `
Installing ${name}, version ${version} ...
	` )
	const command = `${exe} --install-extension ${name}-${version}.vsix`
	const cmd = execa.commandSync( command, {
		cwd: packRoot
	} )
	console.log( cmd.stdout )
}
