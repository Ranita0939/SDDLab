# SDDLab — Spec-Driven Development en E-commerce

Proyecto universitario que aplica el paradigma **Spec-Driven Development (SDD)**
sobre un dominio de negocio de e-commerce (carrito de compras).

---

## ¿Qué es SDD?

Spec-Driven Development es un paradigma donde:

1. **Primero** se define la especificación (qué debe hacer el sistema)
2. **Segundo** se escriben las pruebas basadas en esa spec
3. **Tercero** se implementa el código para pasar las pruebas

Los tests son la especificación ejecutable. Si el test pasa, el sistema cumple el requisito.

---

## Dominio: Carrito de Compras

### Especificación (SPEC)

| ID   | Requisito                                              | Test                                      |
|------|--------------------------------------------------------|-------------------------------------------|
| RF01 | El carrito inicia vacío con total $0                   | empieza vacío con total 0                 |
| RF02 | Se pueden agregar productos con nombre, precio, cantidad | agrega un producto y calcula total       |
| RF03 | El total es suma de (precio × cantidad)                | agrega un producto y calcula total        |
| RF04 | Si total > $100 se aplica 10% de descuento             | aplica 10% descuento si total supera $100 |
| RF05 | Precio negativo lanza error                            | lanza error si precio es negativo         |
| RF06 | Cantidad 0 lanza error                                 | lanza error si cantidad es 0              |

---

## Estructura del proyecto
