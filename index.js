const path = require( 'path' );

/**
 * To get alias for webpack `resolve.alias` value from `paths` at jsconfig.json `compilerOptions`
 * 
 * @param {string} jsConfigPaths value of `jsConfig.compilerOptions.paths` from jsconfig.json
 */

function getWebpackAliasFromJsconfig( jsConfigPaths ) {
    const alias = Object.keys( jsConfigPaths )
        .reduce( ( currentAlias, pathKey ) => {
            const [ aliasKey ] = pathKey.split( '/' );
            const [ pathAtJsConfig ] = jsConfigPaths[ pathKey ];

            const [ relativePathToDir ] = pathAtJsConfig.split( '/*' );

            const absolutePath = path.resolve( __dirname, relativePathToDir );

            return {
                ...currentAlias,
                [ aliasKey ]: absolutePath,
            };
        }, {} );

    return alias;
}


module.exports = getWebpackAliasFromJsconfig;
