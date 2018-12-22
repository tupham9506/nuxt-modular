import serveStatic from 'serve-static';

export default class Static {
    static run(modular) {
        const options = modular.options;

        if (!modular.isDirectory(options.dir.static)) {
            modular.logger.debug(`Modular \`${modular.name}\` no static directory`);

            return;
        }

        const staticMiddleware = serveStatic(
            modular.pathResolve(options.dir.static),
            options.render.static
        );

        staticMiddleware.prefix = options.render.static.prefix;
        modular.moduleContainer.addServerMiddleware(staticMiddleware);
    }
}
