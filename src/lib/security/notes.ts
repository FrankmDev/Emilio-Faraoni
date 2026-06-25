export const SECURITY_NOTES = [
  'Los precios mayoristas no deben renderizarse en UI publica.',
  'El futuro sistema de autenticacion debe validar permisos en servidor.',
  'No confiar en checks solo de frontend para permisos o datos sensibles.',
  'No crear endpoints publicos que devuelvan wholesalePrice.',
  'Las futuras variables privadas no deben usar prefijo PUBLIC_.',
  'Los datos sensibles deben salir solo de queries server-side protegidas.',
  'No introducir logica de auth hasta que se implemente Supabase.',
  'Mantener datos y UI separados para facilitar la futura migracion.',
] as const;

export const FUTURE_DIRECTORIES = [
  'src/lib/supabase/',
  'src/lib/auth/',
  'src/lib/validation/',
  'src/server/actions/',
  'src/server/queries/',
] as const;
