# Nuxt Modular
## Description
This package is maintain from cknow/nuxt-modular

## Install

```bash
npm install --save https://github.com/tupham9506/nuxt-modular
```

Add `@cknow/nuxt-modular` to modules section of `nuxt.config.js`:

```js
{
    modules: [
        '@cknow/nuxt-modular'
    ]
}
```

## Usage

This module allows you to build your app in modules.
By default the folders within `modular` will be considered modules and within each module you can use the same root structure, that is, your module can contain
`layouts`, `middleware`, `plugins`, `pages`, `static`, `store`.


## Structure
```bash
Nuxt-project
├──  assets                         #  Nuxt folder
├──  ...                            
├── modular                         # Nuxt-modular directory
    ├── <module>                    # Module folder (ex: admin, web...)
        ├── assets                  # Asset folder of <module> 
        ├── components              # Component folder
        ├── layouts                 # Layout folder
        ├── middleware              # middleware folder
        ├── pages                   # Page folder
        ├── plugins                 # Plugin folder
        ├── static                  # Static folder
        ├── store                   # Store folder
        ├── modular.config.js       # Config for <module> 
└── ...
```
### Global config
All folder outside `modular` folder to config for all modules.

### modular
Main muxt-module directory, it contain all module.

### <module>   
Each module has a namespace. Folder name is also namespace of module.

### assets
This folder contain resources of module.

### components
All components of module in here.

### layout
Layout of module. To use, we need add namespace to prefix. `<namspace>/<layout>`
Example:
Layout path `Nuxt-project/modular/admin/layouts/index.vue`
In `Nuxt-project/modular/admin/pages/index.vue`:
```
export default {
    layout: 'admin/index',
    data () {
    }
}
```

### middleware
To use: `<namspace>/<middleware>`

### pages
This will generate route.
Example:
```
Url             =>          File path
/               =>          `Nuxt-project/pages/index.vue`
/blog           =>          `Nuxt-project/pages/blog.vue`
/admin          =>          `Nuxt-project/modular/admin/pages/index.vue`
/admin/login    =>          `Nuxt-project/modular/admin/pages/login.vue`
```
### plugins
This contain plugins of module.

### static
Static folder of module.

### store
To use, `Nuxt-project/store` must have `index.js`.`Nuxt-project/modular/<module>/store/index` will become a store module(`store.state.<module>`).
Example:
```
Nuxt-project/store/index.js                 =>  store.state
Nuxt-project/modular/admin/store/index.js   =>  store.state.admin
Nuxt-project/modular/admin/store/user.js    =>  store.state.admin.user
Nuxt-project/modular/admin/store/web.js     =>  store.state.admin.web
```
### modular.config.js
Same nuxt.config.js, we can config for module
Example:
```
export default {
    plugin: [
        'modular/admin/plugins/i18n.js'
    ]
}
```

# Updating....




