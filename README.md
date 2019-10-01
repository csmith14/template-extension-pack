[file:981DDF4D-DC49-473D-AAB6-D21E5E5B39A0-5310-000003EC627EB22E/README.md]
# Template Extension-Pack Repository

This is a template repository.

This repo is used by [`create-local-ext-pack`](https://yarnpkg.com/en/package/create-local-ext-pack) to scaffold new local-use extension packs.

## Package.json Fields

The package.json file is read by [`vsce`](https://yarnpkg.com/en/package/vsce) as the extension's 'manifest file'. Information here addresses this manifest in terms of interaction with the setup and install scripts. 

	*For further information: [Extension Manifest Documentation](https://code.visualstudio.com/api/references/extension-manifest)*

### displayName

As implied, this is the value displayed as the extension's title in the sidebar and web interfaces. 

### Engines

The engine `vscode` must be specified.

### extensionPack

In the case of an extension pack, the only content-declaring field is `extensionPack`, which must be assigned an array of ID strings corresponding to the pack's constituents. 

### dependencies, devDependencies

When `vsce` packages the extension as a `.vsix` file, any properties declared on the `dependencies` object are interpreted as *dependencies of the extension*, which is most likely not desired. Any packages added during extension configuration should be added with `--dev`. 

### config.vscode

This array contains exactly one or both of `code` and/or `code-insiders`, as these are the two exectubales installed by the respective vscode versions. During setup with the `create-*` script, the value is assigned to either the sole value found within the environment, or in the case both are present, the value(s) chosen by the user. 

**When invoking `./bin/install.js`, the script will install the `.vsix` to each executable in the array.**



