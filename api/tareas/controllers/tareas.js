"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    let body = ctx.request.body;
    console.log(body);

    entity = await strapi.connections.default.raw(`
            INSERT INTO tareas (
              TareaDescripcion,
              TareaArchivo,
              TareaNombre,
              TareaEntrega,
              TareaPuntos,
              TareaMaestro,
              TareaCurso,
              TareaClase,
              TareaActiva
            ) VALUES (
                '${body.tareaDescripcion}',
                '${body.tareaArchivo}',
                '${body.tareaNombre}',
                '${body.tareaEntrega}',
                ${body.tareaPuntos},
                ${body.tareaMaestro},
                ${body.tareaCurso},
                ${body.tareaClase},
                ${body.tareaActiva}
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
