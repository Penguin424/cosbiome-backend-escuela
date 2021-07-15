'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async create(ctx) {
        let body = ctx.request.body;
        console.log(body);
    
        entity = await strapi.connections.default.raw(`
                INSERT INTO detalletareas (
                    TareaDetDescripcion,
                    TareaDetArchivo,
                    TareaDetEntrega,
                    TareaDetCalificacion,
                    TareaDetAlumno,
                    TareaDetTarea,
                    TareaDetEntregada
                ) VALUES (
                    '${body.tareaDetDescripcion}',
                    '${body.tareaDetArchivo}',
                    '${body.tareaDetEntrega}',
                    ${body.tareaDetCalificacion},
                    ${body.tareaDetAlumno},
                    ${body.tareaDetTarea},
                    ${body.tareaDetEntregada}
                );
            `);
    
        ctx.send(
          {
            message: "The content was created!",
          },
          200
        );
      },
};
