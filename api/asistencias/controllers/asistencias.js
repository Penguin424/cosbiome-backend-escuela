"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    let body = ctx.request.body;

    entity = await strapi.connections.default.raw(`
        INSERT INTO asistencias (
            AsistenciaFecha,
            AsistenciaClase,
            AsistenciaAlumno,
            AsistenciaCheck
        ) VALUES (
            '${body.asistenciaFecha}',
            ${body.asistenciaClase},
            ${body.asistenciaAlumno},
            ${body.asistenciaCheck}
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
