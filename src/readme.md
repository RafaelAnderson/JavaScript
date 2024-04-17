# Asignación por referencia y Asignación por valor

Cuando asignas un objeto a una nueva variable utilizando un simple operador de asignación (=), estás creando una referencia al objeto original. Esto significa que ambas variables apuntan al mismo objeto en la memoria. Cualquier modificación en cualquiera de las variables se reflejará en el objeto original y viceversa

Cuando asignas un valor primitivo (como un número, cadena, booleano, etc.) a una nueva variable, se asigna una copia del valor original. Por lo tanto, no hay ninguna conexión entre la variable original y 
la nueva variable. Modificar una de ellas no afectará a la otra.

El operador spread (...) se utiliza para copiar las propiedades de un objeto a otro objeto nuevo. Al hacerlo, se crea un nuevo objeto con las mismas propiedades y valores que el objeto original, pero son objetos diferentes en la memoria

# En Java
Los tipos primitivos tienen sus contrapartes en clases envoltorio (wrapper classes) que permiten trabajar con ellos como objetos. Aquí tienes algunos ejemplos de tipos primitivos y sus clases envoltorio correspondientes:

Tipo primitivo: int
Clase envoltorio: Integer
Tipo primitivo: double
Clase envoltorio: Double
Tipo primitivo: boolean
Clase envoltorio: Boolean
Tipo primitivo: char
Clase envoltorio: Character
Tipo primitivo: byte
Clase envoltorio: Byte
Tipo primitivo: short
Clase envoltorio: Short
Tipo primitivo: long
Clase envoltorio: Long

Estas clases envoltorio proporcionan métodos útiles para trabajar con los tipos primitivos como si fueran objetos. Por ejemplo, Integer tiene métodos para convertir un int a una cadena (toString()), para parsear una cadena y obtener un int (parseInt()), entre otros.

En cuanto a la asignación por referencia en Java, todos los objetos (incluidas las instancias de clases envoltorio) se pasan por referencia. Cuando asignas una instancia de una clase envoltorio a otra variable, ambas variables referirán al mismo objeto en memoria.

En este ejemplo, num1 y num2 apuntan al mismo objeto Integer, y al modificar num2, también se modifica el valor al que apunta num1. Sin embargo, es importante tener en cuenta que, aunque los objetos se pasan por referencia, los tipos primitivos no se pasan por referencia en Java. Cuando pasas un tipo primitivo a un método, se pasa como valor, no como referencia.

== (igualdad débil): Este operador compara los valores de dos variables, pero puede realizar conversiones implícitas de tipos si las variables son de tipos diferentes. En el caso de objetos y referencias, == verificará si ambos operandos se refieren al mismo objeto en memoria, no si los objetos son estructuralmente iguales.

=== (igualdad estricta): Este operador compara tanto los valores como los tipos de las variables. No realiza conversiones de tipos implícitas. En el caso de objetos y referencias, === verifica si ambos operandos se refieren al mismo objeto en memoria y si son del mismo tipo.

Puedes usar un método como JSON.stringify() para convertir los objetos a cadenas JSON y luego comparar esas cadenas.